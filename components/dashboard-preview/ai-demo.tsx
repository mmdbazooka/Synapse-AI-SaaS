"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowUp, Check, Sparkles } from "lucide-react";
import { prompts, responses } from "@/data/demo";
export function AIDemo({ compact = false }: { compact?: boolean }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  function generate(text = prompt) {
    if (!text.trim() || loading) return;
    setPrompt(text);
    setLoading(true);
    setAnswer(null);
    const index = text.toLowerCase().includes("block")
      ? 1
      : text.toLowerCase().includes("plan")
        ? 2
        : 0;
    timer.current = setTimeout(() => {
      setAnswer(index);
      setLoading(false);
    }, 850);
  }
  return (
    <div className={`ai-demo ${compact ? "ai-compact" : ""}`}>
      <div className="ai-demo-heading">
        <span className="spark-icon">
          <Sparkles size={18} />
        </span>
        <div>
          <strong>A little clarity, on demand.</strong>
          <p>Interactive product preview — sample responses</p>
        </div>
        <span className="ai-online">DEMO</span>
      </div>
      <div className="ai-response" aria-live="polite" aria-busy={loading}>
        {loading ? (
          <div className="thinking">
            <span />
            <span />
            <span />
            Finding a little clarity…
          </div>
        ) : answer !== null ? (
          <div className="generated-answer">
            <p className="answer-heading">{responses[answer].heading}</p>
            <p>{responses[answer].body}</p>
            <ul>
              {responses[answer].steps.map((s) => (
                <li key={s}>
                  <Check size={13} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="ai-empty">
            <Sparkles size={28} />
            <h3>Big ideas. A clear next step.</h3>
            <p>Ask a question, or start with a little inspiration below.</p>
          </div>
        )}
      </div>
      <div className="prompt-suggestions">
        {prompts.map((p, i) => (
          <button disabled={loading} onClick={() => generate(p)} key={p}>
            <span>0{i + 1}</span>
            {p}
          </button>
        ))}
      </div>
      <form
        className="ai-composer"
        onSubmit={(e) => {
          e.preventDefault();
          generate();
        }}
      >
        <label
          className="sr-only"
          htmlFor={compact ? "dashboard-prompt" : "demo-prompt"}
        >
          Ask the sample assistant
        </label>
        <input
          id={compact ? "dashboard-prompt" : "demo-prompt"}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What would you like to untangle?"
          maxLength={500}
        />
        <button
          type="submit"
          aria-label="Generate sample response"
          disabled={loading || !prompt.trim()}
        >
          <ArrowUp size={19} />
        </button>
      </form>
      <p className="ai-disclosure">
        A scripted preview, not a live AI model. Your text stays here.
      </p>
    </div>
  );
}
