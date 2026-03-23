import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/cv-data";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const anthropic = new Anthropic({ apiKey });

    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: CHATBOT_SYSTEM_PROMPT,
      messages: messages.map(
        (m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })
      ),
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({ text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } catch (err) {
          const errData = JSON.stringify({ error: String(err) });
          controller.enqueue(encoder.encode(`data: ${errData}\n\n`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
