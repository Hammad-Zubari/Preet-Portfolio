import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Who is Preet?",
  "What projects has she built?",
  "Tell me about her FYP",
  "What's her tech stack?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, messages.length]);

  const busy = status === "submitted" || status === "streaming";

  const send = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    void sendMessage({ text: t });
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with PreetBot"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--mint)] text-[var(--background)] px-4 py-3 shadow-lg hover:scale-105 transition-transform"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        <span className="text-sm font-medium hidden sm:inline">
          {open ? "Close" : "Ask about Preet"}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[min(92vw,380px)] h-[min(70vh,560px)] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
          <header className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/40">
            <div className="w-9 h-9 rounded-full bg-[var(--mint-soft)] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[var(--mint)]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">PreetBot</p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] pulse-dot" />
                Ask me anything about Preet
              </p>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="rounded-2xl rounded-tl-sm bg-secondary px-3 py-2 max-w-[85%]">
                  Hi! I&apos;m <span className="mint font-medium">PreetBot</span>. I can answer questions about Preet&apos;s background, skills and projects. What would you like to know?
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-2.5 py-1.5 rounded-full border border-border hover:border-[var(--mint)] hover:text-[var(--mint)] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                      isUser
                        ? "bg-[var(--mint)] text-[var(--background)] rounded-tr-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                    }`}
                  >
                    {text || (status === "streaming" ? "…" : "")}
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-3 py-2 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "120ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "240ms" }} />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-border p-3 flex items-center gap-2 bg-background/40"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Preet..."
              disabled={busy}
              className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[var(--mint)] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="w-9 h-9 rounded-full bg-[var(--mint)] text-[var(--background)] flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
