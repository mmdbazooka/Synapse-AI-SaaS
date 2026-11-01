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
        <section className="synapse-hero">
          <div className="synapse-grid" />
          <motion.div
            className="synapse-aura"
            animate={
              reduced ? {} : { opacity: [0.65, 1, 0.65], scale: [1, 1.05, 1] }
            }
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg
            className="hero-orbits"
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
          <div className="synapse-hero-copy">
            <a className="announcement" href="#ai-demo">
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
            <div className="button-row">
              <button
                className="button primary"
                onClick={() => setModal("Make room for your best work.")}
              >
                Start building for free
                <ArrowRight size={16} />
              </button>
              <a className="button ghost" href="#product">
                Explore the product
                <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="hero-fineprint">
              <Check size={11} />
              Free to explore <span>·</span> No credit card <span>·</span> A
              little less friction
            </p>
          </div>
        </section>
        <section id="product" className="product-section">
          <Dashboard />
        </section>
        <section className="social-proof">
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
        <section id="solutions" className="section solutions">
          <div className="section-head">
            <div>
              <p className="eyebrow">
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
          <div className="synapse-bento">
            <article className="bento-focus reveal-block">
              <div>
                <span className="feature-icon">
                  <Sparkles size={19} />
                </span>
                <h3>From scattered to sorted.</h3>
                <p>
                  Turn a week of updates into a minute of clarity.
                  <br />
                  Your next step is already in sight.
                </p>
              </div>
              <div className="summary-mini">
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
              <span className="feature-icon">
                <GitBranch size={19} />
              </span>
              <h3>Know what matters.</h3>
              <p>
                The right thing. At the right time.
                <br />
                Smart priorities that move with you.
              </p>
              <div className="priority-mini">
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
            <article className="bento-flow reveal-block">
              <div className="flow-mini">
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
            <article className="bento-insights reveal-block">
              <div>
                <span className="feature-icon">
                  <Zap size={19} />
                </span>
                <h3>Progress you can feel.</h3>
                <p>Insights that tell a story, not just a number.</p>
              </div>
              <div className="insights-mini">
                <strong>
                  88<span>%</span>
                </strong>
                <span>↗ 8.2% this week</span>
                <ProductivityChart />
              </div>
            </article>
          </div>
        </section>
        <section id="ai-demo" className="section ai-section">
          <div className="ai-section-copy">
            <p className="eyebrow">
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
            <span className="micro">TRY THE INTERACTIVE PREVIEW →</span>
          </div>
          <AIDemo />
        </section>
        <section className="section how-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">SMALL STEPS. MEANINGFUL MOMENTUM.</p>
              <h2>From idea to in motion.</h2>
            </div>
          </div>
          <div className="how-steps">
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
                <div className="step-top">
                  <s.icon size={23} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="integrations" className="section integrations-section">
          <div className="integration-stage">
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
            <div className="integration-core">
              <BrandMark brand="synapse" />
            </div>
            {categories.map((c, i) => (
              <button
                key={c.name}
                className={`orbit-app orbit-${i} ${integration === i ? "selected" : ""}`}
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
            <p className="eyebrow">BETTER, TOGETHER</p>
            <h2>
              Your tools.
              <br />
              <span>A new connection.</span>
            </h2>
            <p>
              Keep the tools you love. Connect the dots between them.
              <br />A workspace that fits the way you work.
            </p>
            <div className="integration-description" aria-live="polite">
              <span>{categories[integration].name}</span>
              <p>{categories[integration].desc}</p>
            </div>
            <a className="text-link" href="#product">
              Try the integration switches
              <Arrow />
            </a>
          </div>
        </section>
        <section id="pricing" className="section pricing-section">
          <div className="pricing-heading">
            <p className="eyebrow">ROOM TO GROW</p>
            <h2>
              A little more possibility.
              <br />
              <span>At every stage.</span>
            </h2>
            <p>Simple, illustrative pricing. Choose your next chapter.</p>
            <div className="segmented" aria-label="Billing period">
              <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button aria-pressed={annual} onClick={() => setAnnual(true)}>
                Yearly <span>Save up to 26%</span>
              </button>
            </div>
          </div>
          <div className="pricing-grid">
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
                className={`price-card ${i === 1 ? "featured" : ""}`}
                key={p.name}
              >
                {i === 1 && (
                  <span className="popular-label">
                    <Sparkles size={11} />A LITTLE MORE POWER
                  </span>
                )}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="price">
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
                  className={`button ${i === 1 ? "primary" : "ghost"}`}
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
        <section className="section synapse-faq">
          <div>
            <p className="eyebrow">A LITTLE MORE CLARITY</p>
            <h2>
              Good questions.
              <br />
              Honest answers.
            </h2>
            <button
              className="text-link"
              onClick={() => setModal("Let’s start a conversation.")}
            >
              Still curious?
              <Arrow />
            </button>
          </div>
          <FAQ items={faq} />
        </section>
        <section className="section synapse-finale">
          <div className="finale-orbit" />
          <BrandMark brand="synapse" />
          <h2>
            Your next great idea
            <br />
            deserves a little <span>Synapse.</span>
          </h2>
          <p>Make room for the work that matters.</p>
          <button
            className="button primary"
            onClick={() => setModal("Make room for your best work.")}
          >
            Find your flow, for free
            <ArrowRight size={16} />
          </button>
          <button className="sign-in-link" onClick={() => setModal("signin")}>
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
