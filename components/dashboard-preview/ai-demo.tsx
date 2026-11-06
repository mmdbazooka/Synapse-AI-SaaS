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
    <div
      className={`
      ai-demo p-[25px] [border:1px_solid_#ba91fa2b] rounded-[12px]
      [background:radial-gradient(ellipse_at_0_0,_#9d62dc13,_transparent_70%),_#13101d]
      [box-shadow:0_20px_60px_#0002] [@media(max-width:_760px)]:p-[20px]
    ${compact ? `ai-compact p-[22px] max-w-[650px] my-[15px] mx-auto [&_.ai-response]:min-h-[170px]` : ""}`}
    >
      <div
        className={`
        ai-demo-heading flex items-center gap-[11px] [&_strong]:text-[11px] [&_strong]:font-medium [&_p]:text-[7px]
        [&_p]:text-[#8f7ea2] [&_p]:mt-[4px] [@media(max-width:_760px)]:[&_strong]:text-[10px]
        [@media(max-width:_760px)]:[&_p]:text-[6px] [@media(max-width:_760px)]:gap-[8px]
      `}
      >
        <span
          className={`
          spark-icon grid place-items-center w-[34px] h-[34px] rounded-[8px] bg-[#aa7ce61a] text-[#c0a2f4]
          [border:1px_solid_#c6a9f529] [@media(max-width:_760px)]:w-[29px] [@media(max-width:_760px)]:h-[29px]
        `}
        >
          <Sparkles size={18} />
        </span>
        <div>
          <strong>A little clarity, on demand.</strong>
          <p>Interactive product preview — sample responses</p>
        </div>
        <span
          className={`
          ai-online text-[6px] tracking-[0.09em] ml-auto text-[#b89bd8] [border:1px_solid_#b89bd833] rounded-[4px]
          py-[4px] px-[6px]
        `}
        >
          DEMO
        </span>
      </div>
      <div
        className={`ai-response min-h-[240px] flex items-center py-[25px] px-0 [@media(max-width:_760px)]:min-h-[235px]`}
        aria-live="polite"
        aria-busy={loading}
      >
        {loading ? (
          <div
            className={`
            thinking text-[11px] text-[#b8a1cf] flex gap-[5px] items-center m-auto [&>span]:w-[4px] [&>span]:h-[4px]
            [&>span]:bg-[#b9a0e4] [&>span]:rounded-full [&>span]:[animation:thought_1s_infinite_alternate]
            [&>span:nth-child(2)]:[animation-delay:0.2s] [&>span:nth-child(3)]:[animation-delay:0.4s]
            [&>span:nth-child(3)]:mr-[6px]
          `}
          >
            <span />
            <span />
            <span />
            Finding a little clarity…
          </div>
        ) : answer !== null ? (
          <div
            className={`
            generated-answer [&>.answer-heading]:font-[family-name:var(--font-display)] [&>.answer-heading]:text-[20px]
            [&>.answer-heading]:leading-[1.3] [&>.answer-heading]:text-[#eee5f7] [&>p:not(.answer-heading)]:text-[11px]
            [&>p:not(.answer-heading)]:text-[#b2a0c4] [&>p:not(.answer-heading)]:mt-[13px] [&>ul]:list-none [&>ul]:p-0
            [&>ul]:mt-[15px] [&>ul]:mx-0 [&>ul]:mb-0 [&_li]:flex [&_li]:gap-[8px] [&_li]:text-[#bfb0d1] [&_li]:text-[10px]
            [&_li]:leading-[1.6] [&_li]:my-[9px] [&_li]:mx-0 [&_li>svg]:mt-[2px] [&_li>svg]:text-[#b491e5]
            [@media(max-width:_760px)]:[&>p:not(.answer-heading)]:text-[10px] [@media(max-width:_760px)]:[&_li]:text-[9px]
          `}
          >
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
          <div
            className={`
            ai-empty m-auto text-center text-[#b192da] [&>svg]:mt-0 [&>svg]:mx-auto [&>svg]:mb-[20px]
            [&>svg]:text-[#b597dd] [&>h3]:text-[21px] [&>h3]:text-[#d9cde7] [&>h3]:tracking-[-0.04em] [&>p]:text-[10px]
            [&>p]:text-[#8d7f9c] [&>p]:mt-[8px] [@media(max-width:_760px)]:[&>h3]:text-[21px]
            [@media(max-width:_760px)]:[&>p]:text-[9px]
          `}
          >
            <Sparkles size={28} />
            <h3>Big ideas. A clear next step.</h3>
            <p>Ask a question, or start with a little inspiration below.</p>
          </div>
        )}
      </div>
      <div
        className={`
        prompt-suggestions flex gap-[6px] flex-wrap mb-[12px] [&>button]:flex [&>button]:items-center
        [&>button]:gap-[6px] [&>button]:text-[8px] [&>button]:text-[#b8a7cd] [&>button]:[border:1px_solid_#b691df24]
        [&>button]:bg-[#b691df08] [&>button]:rounded-[5px] [&>button]:py-[7px] [&>button]:px-[8px]
        [&>button]:[transition:background_0.2s] [&>button:hover]:bg-[#b691df1a] [&>button>span]:text-[6px]
        [&>button>span]:text-[#746482] [@media(max-width:_1100px)]:[&>button]:text-[7px]
        [@media(max-width:_760px)]:gap-[6px] [@media(max-width:_760px)]:[&>button]:text-[8px]
      `}
      >
        {prompts.map((p, i) => (
          <button disabled={loading} onClick={() => generate(p)} key={p}>
            <span>0{i + 1}</span>
            {p}
          </button>
        ))}
      </div>
      <form
        className={`
          ai-composer flex items-center [border:1px_solid_#b092db33] bg-[#0d0a1477] rounded-[7px] p-[7px]
          [&>input]:w-full [&>input]:bg-[transparent] [&>input]:[border:0] [&>input]:py-[8px] [&>input]:px-[7px]
          [&>input]:text-[10px] [&>input]:text-[#ddd0ed] [&>input]:min-w-0 [&>input::placeholder]:text-[#756582]
          [&>button]:w-[29px] [&>button]:h-[29px] [&>button]:rounded-[5px] [&>button]:bg-[#b793ec]
          [&>button]:text-[#190e29] [&>button]:grid [&>button]:place-items-center [&>button:disabled]:opacity-[0.35]
          [@media(max-width:_760px)]:[&>input]:text-[9px]
        `}
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
      <p
        className={`ai-disclosure text-[7px] text-center text-[#786887] mt-[10px]`}
      >
        A scripted preview, not a live AI model. Your text stays here.
      </p>
    </div>
  );
}
