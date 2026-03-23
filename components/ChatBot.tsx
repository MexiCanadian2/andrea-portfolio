"use client";

import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { CHATBOT_SUGGESTIONS } from "@/lib/cv-data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatBotHandle {
  open: () => void;
}

const ChatBot = forwardRef<ChatBotHandle>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setLoading(true);
    setStreamingText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok || !res.body) {
        throw new Error("API error");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        // Parse SSE lines
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                accumulated += parsed.text;
                setStreamingText(accumulated);
              }
            } catch {
              // ignore parse errors
            }
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: accumulated },
      ]);
      setStreamingText("");
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again or reach out to Andrea directly at andrea.m.bravo.ojeda@gmail.com.",
        },
      ]);
      setStreamingText("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A84C] text-[#FAFAF8] flex items-center justify-center shadow-lg hover:bg-[#9E7B35] transition-colors duration-300 ${
          open ? "hidden" : "flex"
        }`}
        aria-label="Open chat assistant"
      >
        <MessageCircle size={22} />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 animate-ping bg-[#C9A84C] opacity-30 rounded-none"
          aria-hidden="true"
        />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] h-[560px] bg-[#FAFAF8] border border-[#1C1C1E]/12 flex flex-col shadow-2xl"
            role="dialog"
            aria-label="AI Portfolio Assistant"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1C1C1E]/8 bg-[#1C1C1E]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm text-[#FAFAF8]">A</span>
                </div>
                <div>
                  <p className="text-sm font-sans text-[#FAFAF8] font-medium">
                    Andrea&apos;s AI Assistant
                  </p>
                  <p className="text-xs font-sans text-[#8A9E85]">
                    Ask me anything
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#6B6B6E] hover:text-[#FAFAF8] transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.length === 0 && !loading && (
                <div>
                  <p className="text-sm font-sans text-[#6B6B6E] mb-5 leading-relaxed">
                    Hi! I&apos;m Andrea&apos;s portfolio assistant. I can answer questions
                    about her experience, skills, and background in English, French, or Spanish.
                  </p>
                  {/* Suggestion chips */}
                  <div className="flex flex-wrap gap-2">
                    {CHATBOT_SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs font-sans px-3 py-2 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#FAFAF8] transition-all duration-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm font-sans leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#C9A84C] text-[#FAFAF8]"
                        : "bg-[#F0EFE9] text-[#3A3A3C] border border-[#1C1C1E]/8"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Streaming */}
              {streamingText && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-4 py-3 text-sm font-sans leading-relaxed bg-[#F0EFE9] text-[#3A3A3C] border border-[#1C1C1E]/8">
                    {streamingText}
                    <span className="inline-block w-1 h-3.5 bg-[#C9A84C] ml-0.5 animate-pulse" />
                  </div>
                </div>
              )}

              {loading && !streamingText && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-[#F0EFE9] border border-[#1C1C1E]/8">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 bg-[#C9A84C] animate-bounce"
                          style={{ animationDelay: `${d * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#1C1C1E]/8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={loading}
                  className="flex-1 px-3 py-2.5 text-sm font-sans border border-[#1C1C1E]/12 bg-[#FAFAF8] text-[#1C1C1E] placeholder-[#AEAEB2] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 disabled:opacity-60"
                  aria-label="Chat input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 bg-[#C9A84C] text-[#FAFAF8] flex items-center justify-center hover:bg-[#9E7B35] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

ChatBot.displayName = "ChatBot";
export default ChatBot;
