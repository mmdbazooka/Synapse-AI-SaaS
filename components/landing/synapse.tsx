"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Calendar,
  FileText,
  MessageSquare,
  Database,
  Layers,
  GitBranch,
  Zap,
} from "lucide-react";
import {
  SiteHeader,
  ScrollEffects,
  ContactModal,
  Footer,
  FAQ,
  BrandMark,
  Arrow,
} from "@/components/ui/shared";
import Dashboard, {
  ProductivityChart,
} from "@/components/dashboard-preview/dashboard";
import { AIDemo } from "@/components/dashboard-preview/ai-demo";
import { faq } from "@/data/demo";
const categories = [
  {
    name: "Calendar",
    icon: Calendar,
    desc: "A little more space in your schedule.",
  },
  {
    name: "Documents",
    icon: FileText,
    desc: "Every idea, with the context it deserves.",
  },
  {
    name: "Team chat",
    icon: MessageSquare,
    desc: "Bring the conversation back to the work.",
  },
  {
    name: "Database",
    icon: Database,
    desc: "Your shared knowledge, beautifully connected.",
  },
];
export default function SynapseLanding() {
  const [modal, setModal] = useState<string | null>(null);
  const [annual, setAnnual] = useState(false);
  const [integration, setIntegration] = useState(0);
  const reduced = useReducedMotion();
  return (
    <>
      <ScrollEffects />
      <SiteHeader
        brand="synapse"
        links={[
          { label: "Product", href: "#product" },
          { label: "Solutions", href: "#solutions" },
          { label: "Integrations", href: "#integrations" },
          { label: "Pricing", href: "#pricing" },
        ]}
        action="Start for free"
        onSecondary={() => setModal("signin")}
        onAction={() => setModal("A little more possibility.")}
      />
      <main id="main">
        <section
          className={`
          synapse-hero relative isolate text-center overflow-hidden pt-[165px] px-[var(--gutter)] pb-[60px]
          [&_h1]:text-[length:clamp(58px,_7.3vw,_108px)] [&_h1]:leading-[1.03] [&_h1]:tracking-[-0.065em]
          [&_h1]:font-medium [&_h1]:mt-[29px] [&_h1]:mx-auto [&_h1]:mb-[24px]
          [&_h1>span]:bg-[image:linear-gradient(100deg,_#f7f7fb_10%,_#d2bdfd_55%,_#b19af1)] [&_h1>span]:bg-clip-text
          [&_h1>span]:text-[transparent] [&_.button-row]:justify-center [&_.button-row]:mt-[29px]
          [&_.button-row]:gap-[12px] [@media(max-width:_1100px)]:pt-[160px]
          [@media(max-width:_1100px)]:[&_h1]:text-[82px] [@media(max-width:_760px)]:pt-[132px]
          [@media(max-width:_760px)]:px-[20px] [@media(max-width:_760px)]:pb-[42px]
          [@media(max-width:_760px)]:[&_h1]:text-[length:clamp(49px,_12.5vw,_79px)]
          [@media(max-width:_760px)]:[&_h1]:leading-[1.07] [@media(max-width:_760px)]:[&_h1]:mt-[27px]
          [@media(max-width:_760px)]:[&_.button-row]:gap-[10px] [@media(max-width:_760px)]:[&_.button-row]:mt-[25px]
          [@media(max-width:_760px)]:[&_.button]:text-[9px] [@media(max-width:_760px)]:[&_.button]:gap-[12px]
          [@media(max-width:_760px)]:[&_.button]:py-[12px] [@media(max-width:_760px)]:[&_.button]:px-[13px]
          [@media(max-width:_760px)]:[&_.button]:min-h-[42px]
        `}
        >
          <div
            className={`
            synapse-grid absolute inset-0 z-[-2]
            [background-image:linear-gradient(#a98aff09_1px,_transparent_1px),_linear-gradient(90deg,_#a98aff09_1px,_transparent_1px)]
            [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,_#000,_transparent_70%)]
          `}
          />
          <motion.div
            className={`
              synapse-aura absolute w-[1000px] h-[700px] top-[50px] left-[50%] ml-[-500px]
              bg-[image:radial-gradient(ellipse_at_center,_#7746e233,_transparent_65%)] z-[-1] pointer-events-none
              [@media(max-width:_760px)]:top-[20px] [@media(max-width:_760px)]:w-[800px]
              [@media(max-width:_760px)]:ml-[-400px] [@media(max-width:_760px)]:h-[650px]
            `}
            animate={
              reduced ? {} : { opacity: [0.65, 1, 0.65], scale: [1, 1.05, 1] }
            }
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg
            className={`
              hero-orbits absolute inset-0 w-full h-full z-[-1] pointer-events-none [@media(max-width:_760px)]:w-[900px]
              [@media(max-width:_760px)]:max-w-none [@media(max-width:_760px)]:left-[50%]
              [@media(max-width:_760px)]:[transform:translateX(-50%)]
            `}
            viewBox="0 0 1440 760"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="720"
              cy="390"
              rx="620"
              ry="200"
              stroke="#b891f3"
              strokeOpacity=".11"
              transform="rotate(-14 720 390)"
            />
            <ellipse
              cx="720"
              cy="390"
              rx="550"
              ry="260"
              stroke="#b891f3"
              strokeOpacity=".07"
              transform="rotate(18 720 390)"
            />
            <circle cx="185" cy="460" r="4" fill="#ab8bf5" />
            <circle cx="1270" cy="280" r="3" fill="#ab8bf5" />
          </svg>
          <div
            className={`
            synapse-hero-copy [&>p:not(.hero-fineprint)]:text-[15px] [&>p:not(.hero-fineprint)]:text-[#a7a4bb]
            [&>p:not(.hero-fineprint)]:leading-[1.8] [@media(max-width:_1100px)]:[&>p:not(.hero-fineprint)]:text-[14px]
            [@media(max-width:_760px)]:[&>p:not(.hero-fineprint)]:text-[12px]
            [@media(max-width:_760px)]:[&>p:not(.hero-fineprint)]:leading-[1.9]
          `}
          >
            <a
              className={`
              announcement inline-flex items-center gap-[12px] [border:1px_solid_#ad87ec33] bg-[#b492ef09] pt-[7px] pr-[11px]
              pb-[7px] pl-[7px] text-[10px] rounded-[20px] text-[#d9c9f5] [&>span]:text-[8px] [&>span]:py-[3px]
              [&>span]:px-[8px] [&>span]:bg-[#ad87ec26] [&>span]:rounded-[15px] [&>span]:font-semibold
              [&>span]:tracking-[0.06em] [@media(max-width:_760px)]:text-[8px] [@media(max-width:_760px)]:gap-[9px]
              [@media(max-width:_760px)]:[&>span]:text-[6px]
            `}
              href="#ai-demo"
            >
              <span>NEW</span>Meet your next thinking partner
              <ArrowRight size={12} />
            </a>
            <h1>
              Your ideas.
              <br />
              <span>Amplified by AI.</span>
            </h1>
            <p>
              Less busywork. More brilliant work.
              <br />
              One intelligent workspace for everything you’re building.
            </p>
            <div
              className={`button-row flex gap-[15px] items-center flex-wrap`}
            >
              <button
                className={`
                  button py-[15px] px-[22px] inline-flex items-center justify-center gap-[25px] text-[12px] font-semibold
                  tracking-[0.015em] [border:1px_solid_var(--line)] bg-[transparent]
                  [transition:background_0.2s,_transform_0.2s,_border-color_0.2s] whitespace-nowrap rounded-[6px] min-h-[47px]
                  [&:hover]:[transform:translateY(-2px)] [&:hover]:[border-color:var(--text)] [&.primary]:text-[var(--bg)]
                  [&.primary]:[border-color:var(--accent)] [&.primary]:bg-[image:linear-gradient(180deg,_#c1a3ff,_#a387ec)]
                  [&.primary]:[box-shadow:0_2px_12px_#9a76ed23,_inset_0_1px_0_#ffffff55]
                  [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                  [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                  [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:text-[11px]
                  [@media(max-width:_760px)]:py-[14px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[20px]
                  primary
                `}
                onClick={() => setModal("Make room for your best work.")}
              >
                Start building for free
                <ArrowRight size={16} />
              </button>
              <a
                className={`
                button py-[15px] px-[22px] inline-flex items-center justify-center gap-[25px] text-[12px] font-semibold
                tracking-[0.015em] [border:1px_solid_var(--line)] bg-[transparent]
                [transition:background_0.2s,_transform_0.2s,_border-color_0.2s] whitespace-nowrap rounded-[6px] min-h-[47px]
                [&:hover]:[transform:translateY(-2px)] [&:hover]:[border-color:var(--text)] [&.primary]:text-[var(--bg)]
                [&.primary]:[border-color:var(--accent)] [&.primary]:bg-[image:linear-gradient(180deg,_#c1a3ff,_#a387ec)]
                [&.primary]:[box-shadow:0_2px_12px_#9a76ed23,_inset_0_1px_0_#ffffff55]
                [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:text-[11px]
                [@media(max-width:_760px)]:py-[14px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[20px]
                ghost
              `}
                href="#product"
              >
                Explore the product
                <ArrowUpRight size={16} />
              </a>
            </div>
            <p
              className={`
              hero-fineprint flex justify-center items-center gap-[8px] text-[9px] text-[#9690ab] mt-[19px] [&>span]:my-0
              [&>span]:mx-[5px] [&>span]:text-[#5c546e] [&>svg]:text-[#b49be6] [@media(max-width:_760px)]:text-[7px]
              [@media(max-width:_760px)]:gap-[5px] [@media(max-width:_760px)]:flex-wrap [@media(max-width:_760px)]:mt-[17px]
              [@media(max-width:_760px)]:[&>span]:my-0 [@media(max-width:_760px)]:[&>span]:mx-[1px]
            `}
            >
              <Check size={11} />
              Free to explore <span>·</span> No credit card <span>·</span> A
              little less friction
            </p>
          </div>
        </section>
        <section
          id="product"
          className={`
          product-section py-0 px-[var(--gutter)] relative max-w-[1320px] m-auto z-[3] [&::before]:content-['']
          [&::before]:absolute [&::before]:[inset:5%_4%_-7%] [&::before]:bg-[#8755ed30] [&::before]:[filter:blur(100px)]
          [&::before]:z-[-1] [&::before]:pointer-events-none [@media(max-width:_760px)]:py-0
          [@media(max-width:_760px)]:px-[14px]
        `}
        >
          <Dashboard />
        </section>
        <section
          className={`
          social-proof max-w-[1080px] m-auto pt-[65px] px-[var(--gutter)] pb-[30px] text-center [&>p]:text-[8px]
          [&>p]:tracking-[0.16em] [&>p]:text-[#8e859d] [&>div]:flex [&>div]:justify-between [&>div]:items-center
          [&>div]:mt-[28px] [&>div]:gap-[25px] [&>div>span]:flex [&>div>span]:items-center [&>div>span]:gap-[8px]
          [&>div>span]:font-[family-name:var(--font-display)] [&>div>span]:text-[25px] [&>div>span]:tracking-[-0.045em]
          [&>div>span]:text-[#a4a0af] [&>div>span]:font-semibold [&>small]:block [&>small]:text-[8px] [&>small]:mt-[25px]
          [&>small]:text-[#9b8cab] [@media(max-width:_1100px)]:[&>div>span]:text-[22px]
          [@media(max-width:_760px)]:pt-[45px] [@media(max-width:_760px)]:px-[25px] [@media(max-width:_760px)]:pb-[10px]
          [@media(max-width:_760px)]:[&>p]:text-[7px] [@media(max-width:_760px)]:[&>div]:flex-wrap
          [@media(max-width:_760px)]:[&>div]:gap-[23px] [@media(max-width:_760px)]:[&>div]:justify-center
          [@media(max-width:_760px)]:[&>div>span]:text-[21px] [@media(max-width:_760px)]:[&>small]:text-[7px]
        `}
        >
          <p>BIG IDEAS DESERVE GOOD COMPANY.</p>
          <div>
            {["Layers", "altitude", "Quotient", "⊕ Orbit", "morrow"].map(
              (b, i) => (
                <span key={b}>
                  {i === 0 ? (
                    <Layers size={22} />
                  ) : i === 1 ? (
                    <svg viewBox="0 0 28 24" width="24" aria-hidden="true">
                      <path
                        d="m2 22 12-20 12 20M8 22l6-10 6 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  ) : null}
                  {b}
                </span>
              ),
            )}
          </div>
          <small>
            Imaginary teams. Real possibilities. Sample brands for this concept.
          </small>
        </section>
        <section
          id="solutions"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] solutions pt-[90px] max-w-[1320px]
          [&_.section-head_h2]:text-[length:clamp(35px,_4vw,_58px)] [&_.section-head>p]:text-[12px]
          [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:[&_.section-head_h2]:text-[36px]
          [@media(max-width:_760px)]:[&_.section-head_.eyebrow]:text-[8px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(38px,_4.5vw,_68px)]
            [&_h2]:leading-[1.08] [&>p]:text-[var(--muted)] [&>p]:max-w-[340px] [&>p]:text-[14px] [&_.eyebrow]:mb-[18px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                <Sparkles size={13} />
                BUILT FOR YOUR BRIGHTEST IDEAS
              </p>
              <h2>
                Everything connected.
                <br />
                <span>Nothing holding you back.</span>
              </h2>
            </div>
            <p>
              Give your team a little less to juggle.
              <br />
              And a lot more room to think.
            </p>
          </div>
          <div
            className={`
            synapse-bento grid [grid-template-columns:1.2fr_1fr] gap-[16px] [&>article]:[border:1px_solid_#ae92ef1b]
            [&>article]:rounded-[12px] [&>article]:p-[30px]
            [&>article]:bg-[image:linear-gradient(140deg,_#161322,_#10101a)] [&>article]:overflow-hidden
            [&>article]:relative [&_h3]:text-[26px] [&_h3]:tracking-[-0.04em] [&_h3]:mt-[18px] [&_h3]:mx-0 [&_h3]:mb-[10px]
            [&_p]:text-[12px] [&_p]:text-[#9990aa] [&_p]:leading-[1.8] [@media(max-width:_1100px)]:[&_h3]:text-[24px]
            [@media(max-width:_1100px)]:[&>article]:p-[25px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[13px] [@media(max-width:_760px)]:[&>article]:p-[25px]
            [@media(max-width:_760px)]:[&_h3]:text-[25px] [@media(max-width:_760px)]:[&_p]:text-[11px]
          `}
          >
            <article className="bento-focus reveal-block">
              <div>
                <span
                  className={`
                  feature-icon grid place-items-center w-[35px] h-[35px] [border:1px_solid_#b190ec33] bg-[#b190ec0a]
                  rounded-[8px] text-[#c3a5f6]
                `}
                >
                  <Sparkles size={19} />
                </span>
                <h3>From scattered to sorted.</h3>
                <p>
                  Turn a week of updates into a minute of clarity.
                  <br />
                  Your next step is already in sight.
                </p>
              </div>
              <div
                className={`
                summary-mini bg-[image:linear-gradient(125deg,_#261b3b,_#191323)] [border:1px_solid_#c39bf230] p-[21px]
                mt-[32px] mr-0 mb-[-30px] ml-[24px] [border-radius:8px_8px_0_0] [box-shadow:-15px_20px_50px_#0004] [&>div]:flex
                [&>div]:items-center [&>div]:gap-[8px] [&>div]:text-[9px] [&>div]:text-[#c3a2f0] [&>div>span]:text-[6px]
                [&>div>span]:tracking-[0.08em] [&>div>span]:ml-auto [&>div>span]:text-[#8c709e] [&>h4]:text-[17px]
                [&>h4]:mt-[20px] [&>h4]:mx-0 [&>h4]:mb-[10px] [&>p]:text-[10px] [&>span]:flex [&>span]:items-center
                [&>span]:gap-[6px] [&>span]:text-[9px] [&>span]:my-[18px] [&>span]:mx-0 [&>span]:text-[#b8a6cf] [&>i]:block
                [&>i]:h-[4px] [&>i]:bg-[#be9ee61a] [&>i]:rounded-[3px] [&>i]:mt-[8px] [&>i]:w-[90%] [&>i:last-child]:w-[55%]
                [@media(max-width:_1100px)]:ml-0 [@media(max-width:_1100px)]:mb-[-25px] [@media(max-width:_760px)]:mt-[26px]
                [@media(max-width:_760px)]:mr-[-4px] [@media(max-width:_760px)]:mb-[-25px] [@media(max-width:_760px)]:ml-[12px]
                [@media(max-width:_760px)]:p-[20px] [@media(max-width:_760px)]:[&>p]:text-[9px]
                [@media(max-width:_760px)]:[&>h4]:text-[17px]
              `}
              >
                <div>
                  <Sparkles size={13} />
                  Your week, at a glance<span>JUST NOW</span>
                </div>
                <h4>Good things are taking shape.</h4>
                <p>
                  The team wrapped up 24 tasks. The next big thing?
                  <br />
                  Bringing the new onboarding flow to life.
                </p>
                <span>
                  <Check size={12} />3 clear priorities for next week
                </span>
                <i />
                <i />
                <i />
              </div>
            </article>
            <article className="bento-priority reveal-block">
              <span
                className={`
                feature-icon grid place-items-center w-[35px] h-[35px] [border:1px_solid_#b190ec33] bg-[#b190ec0a]
                rounded-[8px] text-[#c3a5f6]
              `}
              >
                <GitBranch size={19} />
              </span>
              <h3>Know what matters.</h3>
              <p>
                The right thing. At the right time.
                <br />
                Smart priorities that move with you.
              </p>
              <div
                className={`
                priority-mini mt-[27px] mr-[-10px] mb-[-8px] ml-0 [&>div]:flex [&>div]:items-center [&>div]:gap-[15px]
                [&>div]:bg-[#a080c307] [&>div]:[border:1px_solid_var(--line)] [&>div]:rounded-[6px] [&>div]:mt-[8px]
                [&>div]:py-[13px] [&>div]:px-[14px] [&>div>span:first-child]:h-[26px] [&>div>span:first-child]:w-[26px]
                [&>div>span:first-child]:grid [&>div>span:first-child]:place-items-center [&>div>span:first-child]:text-[14px]
                [&>div>span:first-child]:rounded-[5px] [&>div>span:first-child]:bg-[#df908b13]
                [&>div>span:first-child]:text-[#d295a9] [&>div:nth-child(2)>span:first-child]:bg-[#ccbb7813]
                [&>div:nth-child(2)>span:first-child]:text-[#d0bd7e] [&>div:nth-child(3)>span:first-child]:bg-[#8ab8a813]
                [&>div:nth-child(3)>span:first-child]:text-[#a1bfa4] [&&_p]:text-[10px] [&&_p]:text-[#d6cfe2] [&_small]:block
                [&_small]:text-[6px] [&_small]:tracking-[0.1em] [&_small]:text-[#7b708c] [&_small]:mt-[5px]
                [&>div>span:last-child]:text-[8px] [&>div>span:last-child]:text-[#61566f] [&>div>span:last-child]:ml-auto
                [@media(max-width:_760px)]:mr-0 [@media(max-width:_760px)]:mt-[25px]
                [@media(max-width:_760px)]:[&>div]:p-[12px] [@media(max-width:_760px)]:[&>div]:gap-[12px]
                [@media(max-width:_760px)]:[&&_p]:text-[9px] [@media(max-width:_760px)]:[&_small]:text-[6px]
              `}
              >
                {[
                  "Finalize the product direction",
                  "Review the next release",
                  "Make room for a new idea",
                ].map((t, i) => (
                  <div key={t}>
                    <span>{["↑", "−", "↓"][i]}</span>
                    <p>
                      {t}
                      <small>
                        {
                          ["HIGH PRIORITY", "IN PROGRESS", "WHEN YOU’RE READY"][
                            i
                          ]
                        }
                      </small>
                    </p>
                    <span>0{i + 1}</span>
                  </div>
                ))}
              </div>
            </article>
            <article
              className={`bento-flow [&>h3]:text-center [&>p]:text-center [&>p]:mb-[10px] reveal-block`}
            >
              <div
                className={`
                flow-mini flex items-center justify-center mt-[30px] mx-0 mb-[45px] [&>span]:grid [&>span]:place-items-center
                [&>span]:w-[52px] [&>span]:h-[52px] [&>span]:[border:1px_solid_#c1a5fa24] [&>span]:bg-[#a17ed90c]
                [&>span]:rounded-[11px] [&>span]:text-[#ad9cc4] [&_.flow-center]:w-[70px] [&_.flow-center]:h-[70px]
                [&_.flow-center]:[box-shadow:0_0_60px_#a06de629] [&_.flow-center]:text-[#c4a2ff]
                [&_.flow-center]:bg-[#8e5add22] [&>i]:h-[1px] [&>i]:[flex:1] [&>i]:max-w-[60px]
                [&>i]:bg-[image:linear-gradient(90deg,_#a685e133,_#a685e1aa)] [@media(max-width:_760px)]:mt-[20px]
                [@media(max-width:_760px)]:mx-0 [@media(max-width:_760px)]:mb-[35px]
              `}
              >
                <span>
                  <FileText size={22} />
                </span>
                <i />
                <span className="flow-center">
                  <BrandMark brand="synapse" />
                </span>
                <i />
                <span>
                  <MessageSquare size={22} />
                </span>
              </div>
              <h3>A place for the whole picture.</h3>
              <p>
                Your tools, notes and conversations.
                <br />
                Finally speaking the same language.
              </p>
            </article>
            <article
              className={`bento-insights flex flex-col justify-between [@media(max-width:_760px)]:min-h-[310px] reveal-block`}
            >
              <div>
                <span
                  className={`
                  feature-icon grid place-items-center w-[35px] h-[35px] [border:1px_solid_#b190ec33] bg-[#b190ec0a]
                  rounded-[8px] text-[#c3a5f6]
                `}
                >
                  <Zap size={19} />
                </span>
                <h3>Progress you can feel.</h3>
                <p>Insights that tell a story, not just a number.</p>
              </div>
              <div
                className={`
                insights-mini mt-[20px] [&>strong]:text-[46px] [&>strong]:font-[family-name:var(--font-display)]
                [&>strong]:font-medium [&>strong]:tracking-[-0.06em] [&>strong>span]:text-[23px] [&>strong>span]:text-[#a99bb9]
                [&>strong>span]:ml-[2px] [&>span]:text-[8px] [&>span]:text-[#9ccdb6] [&>span]:ml-[15px]
                [&_.productivity-chart]:h-[100px] [&_.productivity-chart]:mt-[8px] [&_.productivity-chart_svg]:h-[105px]
                [&_.productivity-chart_svg]:w-full
              `}
              >
                <strong>
                  88<span>%</span>
                </strong>
                <span>↗ 8.2% this week</span>
                <ProductivityChart />
              </div>
            </article>
          </div>
        </section>
        <section
          id="ai-demo"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-[70px]
          ai-section grid [grid-template-columns:1fr_1.1fr] gap-[80px] items-center max-w-[1320px]
          [&_h2]:text-[length:clamp(35px,_4vw,_58px)] [&_h2]:leading-[1.12] [@media(max-width:_1100px)]:gap-[45px]
          [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
          [@media(max-width:_760px)]:[&_h2]:text-[37px]
        `}
        >
          <div
            className={`
            ai-section-copy [&>.eyebrow]:text-[8px] [&>p:not(.eyebrow)]:text-[12px] [&>p:not(.eyebrow)]:text-[var(--muted)]
            [&>p:not(.eyebrow)]:mt-[25px] [&>ul]:p-0 [&>ul]:list-none [&>ul]:mt-[30px] [&>ul]:mx-0 [&>ul]:mb-[40px]
            [&_li]:flex [&_li]:gap-[10px] [&_li]:items-center [&_li]:text-[12px] [&_li]:text-[#bdb5ce] [&_li]:my-[15px]
            [&_li]:mx-0 [&_li_svg]:w-[14px] [&_li_svg]:text-[var(--accent)] [&>.micro]:text-[8px] [&>.micro]:text-[#b59ed8]
            [@media(max-width:_760px)]:[&>ul]:my-[25px] [@media(max-width:_760px)]:[&>ul]:mx-0
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              <span className="dot" />A LITTLE INTELLIGENCE. A BIG DIFFERENCE.
            </p>
            <h2>
              A thinking partner.
              <br />
              <span>On your wavelength.</span>
            </h2>
            <p>
              The blank page. The messy project. The Monday morning.
              <br />
              Find the thread that brings it all together.
            </p>
            <ul>
              <li>
                <Check />
                Less time finding the context.
              </li>
              <li>
                <Check />
                More time moving things forward.
              </li>
              <li>
                <Check />
                Clarity, without the extra tabs.
              </li>
            </ul>
            <span
              className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
            >
              TRY THE INTERACTIVE PREVIEW →
            </span>
          </div>
          <AIDemo />
        </section>
        <section
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] how-section max-w-[1320px] pt-[55px] [@media(max-width:_760px)]:pt-[20px]
          [@media(max-width:_760px)]:[&_.section-head_h2]:text-[35px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(38px,_4.5vw,_68px)]
            [&_h2]:leading-[1.08] [&>p]:text-[var(--muted)] [&>p]:max-w-[340px] [&>p]:text-[14px] [&_.eyebrow]:mb-[18px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                SMALL STEPS. MEANINGFUL MOMENTUM.
              </p>
              <h2>From idea to in motion.</h2>
            </div>
          </div>
          <div
            className={`
            how-steps grid [grid-template-columns:repeat(3,_1fr)] gap-[50px] [&_h3]:text-[23px] [&_h3]:tracking-[-0.04em]
            [&_h3]:mb-[13px] [&_p]:text-[12px] [&_p]:text-[var(--muted)] [&_p]:max-w-[280px]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
            [@media(max-width:_760px)]:[&_h3]:text-[24px] [@media(max-width:_760px)]:[&_p]:max-w-[330px]
            [@media(max-width:_760px)]:[&_p]:text-[12px]
          `}
          >
            {[
              {
                title: "Bring your world together.",
                text: "A home for your tools, your team and that idea you can’t stop thinking about.",
                icon: Layers,
              },
              {
                title: "Find your focus.",
                text: "Let the noise settle. See what matters and make your next move with confidence.",
                icon: Sparkles,
              },
              {
                title: "Make something meaningful.",
                text: "Less friction between the spark and the finished thing. More of your best work.",
                icon: ArrowUpRight,
              },
            ].map((s, i) => (
              <div key={s.title}>
                <div
                  className={`
                  step-top flex justify-between items-center [border-bottom:1px_solid_#aa87df2d] pb-[25px] mb-[28px]
                  text-[#ba9be6] [&>span]:font-[family-name:var(--font-display)] [&>span]:text-[12px] [&>span]:text-[#9b8cab]
                  [@media(max-width:_760px)]:pb-[15px] [@media(max-width:_760px)]:mb-[22px]
                `}
                >
                  <s.icon size={23} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="integrations"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pb-[70px] integrations-section
          [&_h2]:text-[length:clamp(35px,_4vw,_58px)] [&_h2]:leading-[1.12] grid [grid-template-columns:1.1fr_1fr]
          gap-[100px] items-center max-w-[1320px] [&>div:last-child>p:not(.eyebrow)]:text-[12px]
          [&>div:last-child>p:not(.eyebrow)]:text-[var(--muted)] [&>div:last-child>p:not(.eyebrow)]:my-[25px]
          [&>div:last-child>p:not(.eyebrow)]:mx-0 [&_.text-link]:text-[11px] [@media(max-width:_1100px)]:gap-[45px]
          [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
          [@media(max-width:_760px)]:pt-[20px] [@media(max-width:_760px)]:[&_h2]:text-[40px]
        `}
        >
          <div
            className={`
            integration-stage relative h-[350px] max-w-[480px] w-full
            bg-[image:radial-gradient(ellipse_at_center,_#945be321,_transparent_60%)] [&>svg]:w-full [&>svg]:h-full
            [@media(max-width:_760px)]:h-[300px] [@media(max-width:_760px)]:max-w-[390px] [@media(max-width:_760px)]:m-auto
            [@media(max-width:_760px)]:[&>svg]:h-[300px]
          `}
          >
            <svg viewBox="0 0 480 350" aria-hidden="true">
              <ellipse
                cx="240"
                cy="175"
                rx="195"
                ry="135"
                fill="none"
                stroke="#ab8bf522"
                strokeDasharray="3 6"
              />
              <path
                d="M100 80 240 175 380 80M100 270 240 175 380 270"
                stroke="#ab8bf530"
                fill="none"
              />
            </svg>
            <div
              className={`
              integration-core absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%)] w-[78px] h-[78px] grid
              place-items-center [border:1px_solid_#bc97ff55] rounded-[20px]
              bg-[image:linear-gradient(135deg,_#382054,_#251337)] [box-shadow:0_0_65px_#a066df24] [&_.brand-mark]:w-[42px]
              [&_.brand-mark]:h-[42px] [&_.brand-mark]:text-[#d3b1ff] [@media(max-width:_760px)]:w-[65px]
              [@media(max-width:_760px)]:h-[65px]
            `}
            >
              <BrandMark brand="synapse" />
            </div>
            {categories.map((c, i) => (
              <button
                key={c.name}
                className={`
                  orbit-app absolute w-[62px] h-[62px] flex items-center justify-center [border:1px_solid_#b797ea26]
                  rounded-[14px] bg-[#191222] text-[#ad91c4] [transition:border-color_0.3s,_background_0.3s] [&>span]:absolute
                  [&>span]:bottom-[-23px] [&>span]:text-[8px] [&>span]:whitespace-nowrap [&>span]:text-[#a191b2]
                  [&.selected]:[border-color:#b996f5aa] [&.selected]:bg-[#a785dd22] [&.selected]:text-[#e2c9ff]
                  [&:where(.orbit-0)]:top-[14%] [&:where(.orbit-0)]:left-[13%] [&:where(.orbit-1)]:top-[14%]
                  [&:where(.orbit-1)]:right-[13%] [&:where(.orbit-2)]:bottom-[14%] [&:where(.orbit-2)]:left-[13%]
                  [&:where(.orbit-3)]:bottom-[14%] [&:where(.orbit-3)]:right-[13%] [@media(max-width:_760px)]:w-[53px]
                  [@media(max-width:_760px)]:h-[53px] orbit-${i} ${integration === i ? "selected" : ""}`}
                onClick={() => setIntegration(i)}
                aria-pressed={integration === i}
                aria-label={`Explore ${c.name} integration`}
              >
                <c.icon size={26} />
                <span>{c.name}</span>
              </button>
            ))}
          </div>
          <div>
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              BETTER, TOGETHER
            </p>
            <h2>
              Your tools.
              <br />
              <span>A new connection.</span>
            </h2>
            <p>
              Keep the tools you love. Connect the dots between them.
              <br />A workspace that fits the way you work.
            </p>
            <div
              className={`
              integration-description [border-left:2px_solid_#b395df] pt-[4px] pr-0 pb-[4px] pl-[15px] mt-[30px] mx-0
              mb-[25px] [&>span]:text-[12px] [&>span]:text-[#cfb4eb] [&>p]:text-[11px] [&>p]:text-[#a08cb1] [&>p]:mt-[4px]
            `}
              aria-live="polite"
            >
              <span>{categories[integration].name}</span>
              <p>{categories[integration].desc}</p>
            </div>
            <a
              className={`
              text-link inline-flex items-center gap-[10px] text-[12px] py-[5px] px-0 [border-bottom:1px_solid_var(--line)]
              bg-[transparent] [transition:gap_0.2s] [&:hover]:gap-[16px]
            `}
              href="#product"
            >
              Try the integration switches
              <Arrow />
            </a>
          </div>
        </section>
        <section
          id="pricing"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pb-[70px] pricing-section max-w-[1320px]
          [@media(max-width:_760px)]:pt-[50px]
        `}
        >
          <div
            className={`
            pricing-heading text-center mb-[45px] [&>.eyebrow]:justify-center [&>h2]:text-[length:clamp(35px,_4.2vw,_60px)]
            [&>h2]:leading-[1.1] [&>p:not(.eyebrow)]:text-[var(--muted)] [&>p:not(.eyebrow)]:text-[12px]
            [&>p:not(.eyebrow)]:mt-[20px] [&>p:not(.eyebrow)]:mx-0 [&>p:not(.eyebrow)]:mb-[27px]
            [@media(max-width:_760px)]:[&>h2]:text-[37px] [@media(max-width:_760px)]:[&_.segmented_button]:text-[10px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              ROOM TO GROW
            </p>
            <h2>
              A little more possibility.
              <br />
              <span>At every stage.</span>
            </h2>
            <p>Simple, illustrative pricing. Choose your next chapter.</p>
            <div
              className={`
              segmented inline-flex [border:1px_solid_var(--line)] p-[4px] rounded-[8px] gap-[4px] bg-[#10101a]
              [&_button]:bg-[transparent] [&_button]:text-[var(--muted)] [&_button]:text-[11px] [&_button]:py-[10px]
              [&_button]:px-[16px] [&_button]:rounded-[5px] [&_button[aria-pressed="true"]]:[box-shadow:0_1px_8px_#0002]
              [&_button[aria-pressed="true"]]:bg-[#282036] [&_button[aria-pressed="true"]]:text-[#dbc9f7]
              [&_button[aria-selected="true"]]:bg-[var(--surface)] [&_button[aria-selected="true"]]:text-[var(--text)]
              [&_button[aria-selected="true"]]:[box-shadow:0_1px_8px_#0002] [&_button>span]:text-[7px]
              [&_button>span]:text-[#b29cce] [&_button>span]:ml-[6px]
            `}
              aria-label="Billing period"
            >
              <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button aria-pressed={annual} onClick={() => setAnnual(true)}>
                Yearly <span>Save up to 26%</span>
              </button>
            </div>
          </div>
          <div
            className={`
            pricing-grid grid [grid-template-columns:repeat(3,_1fr)] gap-[18px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[30px] [@media(max-width:_760px)]:max-w-[450px]
            [@media(max-width:_760px)]:m-auto
          `}
          >
            {[
              {
                name: "Starter",
                description: "For the first spark.",
                price: 0,
                yearly: 0,
                features: [
                  "Your personal workspace",
                  "Up to 3 projects",
                  "Essential task management",
                  "10 sample AI prompts",
                ],
              },
              {
                name: "Pro",
                description: "For your next big thing.",
                price: 19,
                yearly: 15,
                features: [
                  "Everything in Starter",
                  "Unlimited projects",
                  "Advanced insights",
                  "Unlimited concept AI prompts",
                  "Connected tools & workflows",
                ],
              },
              {
                name: "Teams",
                description: "For doing it together.",
                price: 39,
                yearly: 29,
                features: [
                  "Everything in Pro",
                  "Shared team workspaces",
                  "Team analytics",
                  "Flexible permissions",
                  "Priority support concept",
                ],
              },
            ].map((p, i) => (
              <article
                className={`
                  price-card bg-[image:linear-gradient(140deg,_#15121f,_#101019)] [border:1px_solid_#b796e926] rounded-[10px]
                  p-[30px] relative flex flex-col [&.featured]:[border-color:#ad87e970]
                  [&.featured]:[box-shadow:0_0_40px_#9e5ed713] [&.featured]:bg-[image:linear-gradient(140deg,_#21182e,_#151020)]
                  [&>h3]:text-[23px] [&>p]:text-[11px] [&>p]:text-[#9e90af] [&>p]:mt-[7px] [&>small]:text-[8px]
                  [&>small]:text-[#867796] [&>small]:mt-[7px] [&>small]:min-h-[15px] [&>.button]:w-full [&>.button]:my-[25px]
                  [&>.button]:mx-0 [&>.button]:text-[10px] [&>.button]:gap-[10px] [&>.button]:min-h-[41px]
                  [&>.button>svg]:ml-auto [&>ul]:list-none [&>ul]:m-0 [&>ul]:pt-[24px] [&>ul]:px-0 [&>ul]:pb-0
                  [&>ul]:[border-top:1px_solid_#ffffff0b] [&_li]:text-[11px] [&_li]:text-[#b3a6c2] [&_li]:flex [&_li]:gap-[10px]
                  [&_li]:items-center [&_li]:mb-[15px] [&_li>svg]:text-[#ae90d9] [@media(max-width:_1100px)]:p-[25px]
                  [@media(max-width:_1100px)]:[&_li]:text-[10px] [@media(max-width:_760px)]:p-[29px]
                  [@media(max-width:_760px)]:[&_li]:text-[12px] [@media(max-width:_760px)]:[&>small]:text-[9px]
                  [@media(max-width:_760px)]:[&>.button]:text-[12px] [@media(max-width:_760px)]:[&>p]:text-[12px]
                  [@media(max-width:_760px)]:[&>h3]:text-[26px]
                ${i === 1 ? "featured" : ""}`}
                key={p.name}
              >
                {i === 1 && (
                  <span
                    className={`
                    popular-label absolute top-[-13px] left-[50%] [transform:translateX(-50%)] whitespace-nowrap flex items-center
                    gap-[7px] bg-[#b794ed] text-[#26133d] text-[7px] font-semibold tracking-[0.07em] py-[6px] px-[13px]
                    rounded-[5px]
                  `}
                  >
                    <Sparkles size={11} />A LITTLE MORE POWER
                  </span>
                )}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div
                  className={`
                  price font-[family-name:var(--font-display)] text-[55px] tracking-[-0.07em] mt-[25px] leading-[1.2]
                  [&>span]:font-[family-name:var(--font-body)] [&>span]:text-[9px] [&>span]:tracking-normal [&>span]:text-[#9a8da8]
                  [&>span]:ml-[7px] [@media(max-width:_1100px)]:[&>span]:block [@media(max-width:_1100px)]:[&>span]:ml-0
                  [@media(max-width:_1100px)]:[&>span]:mt-[5px] [@media(max-width:_760px)]:text-[60px]
                  [@media(max-width:_760px)]:flex [@media(max-width:_760px)]:[align-items:baseline]
                  [@media(max-width:_760px)]:gap-[10px] [@media(max-width:_760px)]:[&>span]:[display:inline]
                  [@media(max-width:_760px)]:[&>span]:text-[10px]
                `}
                >
                  ${annual ? p.yearly : p.price}
                  <span>/ seat / month</span>
                </div>
                <small>
                  {p.price === 0
                    ? "Free to find your flow"
                    : annual
                      ? `$${p.yearly * 12} billed yearly · Sample price`
                      : "Billed monthly · Sample price"}
                </small>
                <button
                  className={`
                    button py-[15px] px-[22px] inline-flex items-center justify-center gap-[25px] text-[12px] font-semibold
                    tracking-[0.015em] [border:1px_solid_var(--line)] bg-[transparent]
                    [transition:background_0.2s,_transform_0.2s,_border-color_0.2s] whitespace-nowrap rounded-[6px] min-h-[47px]
                    [&:hover]:[transform:translateY(-2px)] [&:hover]:[border-color:var(--text)] [&.primary]:text-[var(--bg)]
                    [&.primary]:[border-color:var(--accent)] [&.primary]:bg-[image:linear-gradient(180deg,_#c1a3ff,_#a387ec)]
                    [&.primary]:[box-shadow:0_2px_12px_#9a76ed23,_inset_0_1px_0_#ffffff55]
                    [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                    [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                    [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:text-[11px]
                    [@media(max-width:_760px)]:py-[14px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[20px]
                  ${i === 1 ? "primary" : "ghost"}`}
                  onClick={() =>
                    setModal(`Your ${p.name} chapter starts here.`)
                  }
                >
                  {i === 0
                    ? "Start for free"
                    : i === 1
                      ? "Explore Pro"
                      : "Bring your team"}
                  <ArrowRight size={15} />
                </button>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] synapse-faq grid [grid-template-columns:1fr_1.4fr] gap-[90px]
          max-w-[1320px] pt-[70px] [&_h2]:text-[45px] [&_h2]:leading-[1.1] [&_.text-link]:mt-[26px]
          [&_.text-link]:text-[11px] [&_.faq-list_summary]:text-[13px] [&_.faq-list_summary]:py-[23px]
          [&_.faq-list_summary]:px-0 [&_.faq-list_p]:text-[12px] [@media(max-width:_1100px)]:gap-[45px]
          [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
          [@media(max-width:_760px)]:pt-[30px] [@media(max-width:_760px)]:[&_h2]:text-[40px]
        `}
        >
          <div>
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              A LITTLE MORE CLARITY
            </p>
            <h2>
              Good questions.
              <br />
              Honest answers.
            </h2>
            <button
              className={`
                text-link inline-flex items-center gap-[10px] text-[12px] py-[5px] px-0 [border-bottom:1px_solid_var(--line)]
                bg-[transparent] [transition:gap_0.2s] [&:hover]:gap-[16px]
              `}
              onClick={() => setModal("Let’s start a conversation.")}
            >
              Still curious?
              <Arrow />
            </button>
          </div>
          <FAQ items={faq} />
        </section>
        <section
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto synapse-finale relative isolate text-center
          overflow-hidden pt-[100px] pb-[110px] [&::before]:content-[''] [&::before]:absolute [&::before]:left-[10%]
          [&::before]:right-[10%] [&::before]:top-0 [&::before]:bottom-0
          [&::before]:bg-[image:radial-gradient(ellipse,_#9d62d91d,_transparent_70%)] [&::before]:z-[-1]
          [&>.brand-mark]:text-[#c3a0f7] [&>.brand-mark]:w-[38px] [&>.brand-mark]:h-[38px] [&>.brand-mark]:mt-0
          [&>.brand-mark]:mx-auto [&>.brand-mark]:mb-[30px] [&>h2]:text-[length:clamp(42px,_4.7vw,_68px)]
          [&>h2]:leading-[1.12] [&_h2>span]:text-[#c7aff2] [&>p]:text-[#a799b8] [&>p]:text-[13px] [&>p]:mt-[24px]
          [&>p]:mx-0 [&>p]:mb-[28px] [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-[70px]
          [@media(max-width:_760px)]:[&>h2]:text-[36px] [@media(max-width:_760px)]:[&>p]:text-[12px]
        `}
        >
          <div
            className={`
            finale-orbit absolute w-[1100px] h-[400px] left-[50%] top-[130px] [transform:translateX(-50%)_rotate(-12deg)]
            [border:1px_solid_#b68af712] rounded-full z-[-1]
          `}
          />
          <BrandMark brand="synapse" />
          <h2>
            Your next great idea
            <br />
            deserves a little <span>Synapse.</span>
          </h2>
          <p>Make room for the work that matters.</p>
          <button
            className={`
              button py-[15px] px-[22px] inline-flex items-center justify-center gap-[25px] text-[12px] font-semibold
              tracking-[0.015em] [border:1px_solid_var(--line)] bg-[transparent]
              [transition:background_0.2s,_transform_0.2s,_border-color_0.2s] whitespace-nowrap rounded-[6px] min-h-[47px]
              [&:hover]:[transform:translateY(-2px)] [&:hover]:[border-color:var(--text)] [&.primary]:text-[var(--bg)]
              [&.primary]:[border-color:var(--accent)] [&.primary]:bg-[image:linear-gradient(180deg,_#c1a3ff,_#a387ec)]
              [&.primary]:[box-shadow:0_2px_12px_#9a76ed23,_inset_0_1px_0_#ffffff55]
              [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
              [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
              [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:text-[11px]
              [@media(max-width:_760px)]:py-[14px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[20px]
              primary
            `}
            onClick={() => setModal("Make room for your best work.")}
          >
            Find your flow, for free
            <ArrowRight size={16} />
          </button>
          <button
            className={`
            sign-in-link block mt-[25px] mx-auto mb-0 bg-[transparent] text-[9px] text-[#9b87ac]
            [@media(max-width:_760px)]:text-[8px] [@media(max-width:_760px)]:leading-[1.7]
            [@media(max-width:_760px)]:max-w-[260px]
          `}
            onClick={() => setModal("signin")}
          >
            Already imagining your workspace? Try demo sign in
          </button>
        </section>
      </main>
      <Footer
        brand="synapse"
        links={[
          { label: "Product", href: "#product" },
          { label: "Pricing", href: "#pricing" },
          { label: "Try the AI", href: "#ai-demo" },
        ]}
      />
      <ContactModal
        open={!!modal}
        onClose={() => setModal(null)}
        title={modal === "signin" ? "A glimpse, not a login." : (modal ?? "")}
        kind={modal === "signin" ? "signin" : "interest"}
      />
    </>
  );
}
