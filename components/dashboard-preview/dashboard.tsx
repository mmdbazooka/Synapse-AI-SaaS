"use client";
import { useId, useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Sparkles,
  Shapes,
  Search,
  Bell,
  ChevronDown,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  Calendar,
  FileText,
  MessageSquare,
  Database,
  Check,
} from "lucide-react";
import { BrandMark } from "@/components/ui/shared";
import { initialTasks } from "@/data/demo";
import { AIDemo } from "./ai-demo";
const tabs = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Tasks", icon: CheckSquare },
  { name: "Insights", icon: BarChart3 },
  { name: "AI Assistant", icon: Sparkles },
  { name: "Integrations", icon: Shapes },
];
export function ProductivityChart({ period = "week" }: { period?: string }) {
  const id = useId();
  return (
    <div className="productivity-chart">
      <svg
        viewBox="0 0 650 180"
        role="img"
        aria-label={
          period === "week"
            ? "Weekly productivity rises from 35 to 88 percent, Monday through Sunday"
            : "Monthly productivity rises from 42 to 94 percent across four weeks"
        }
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#9d7afa" stopOpacity=".28" />
            <stop offset="1" stopColor="#9d7afa" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 65, 105, 145].map((y, i) => (
          <g key={y}>
            <line
              x1="34"
              x2="640"
              y1={y}
              y2={y}
              stroke="#ffffff0c"
              strokeDasharray="3 5"
            />
            <text x="0" y={y + 4} fill="#888699" fontSize="9">
              {100 - i * 25}%
            </text>
          </g>
        ))}
        <path
          d={
            period === "week"
              ? "M35 126 C70 127 85 95 130 103 S195 136 230 84 S300 100 340 66 S415 92 450 52 S520 70 550 28 S610 38 640 20 L640 160H35Z"
              : "M35 136 C80 142 100 94 145 105 S225 63 270 80 S340 51 380 68 S450 47 490 53 S580 27 640 12 L640 160H35Z"
          }
          fill={`url(#${id})`}
        />
        <path
          d={
            period === "week"
              ? "M35 126 C70 127 85 95 130 103 S195 136 230 84 S300 100 340 66 S415 92 450 52 S520 70 550 28 S610 38 640 20"
              : "M35 136 C80 142 100 94 145 105 S225 63 270 80 S340 51 380 68 S450 47 490 53 S580 27 640 12"
          }
          fill="none"
          stroke="#a38af5"
          strokeWidth="2.5"
        />
        {(period === "week"
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          : ["Week 1", "Week 2", "Week 3", "Week 4"]
        ).map((x, i, a) => (
          <text
            key={x}
            x={38 + i * (588 / (a.length - 1))}
            y="178"
            textAnchor={
              i === 0 ? "start" : i === a.length - 1 ? "end" : "middle"
            }
            fill="#8d899f"
            fontSize="9"
          >
            {x}
          </text>
        ))}
      </svg>
    </div>
  );
}
export default function Dashboard() {
  const [tab, setTab] = useState("Overview");
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [period, setPeriod] = useState("week");
  const [notifications, setNotifications] = useState(false);
  const [integrations, setIntegrations] = useState(["Documents", "Calendar"]);
  const [adding, setAdding] = useState(false);
  const [newTask, setNewTask] = useState("");
  const visibleTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.project.toLowerCase().includes(query.toLowerCase()),
  );
  function addTask() {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.trim(),
        project: "My workspace",
        time: "Today",
        done: false,
        color: "#a58afa",
      },
    ]);
    setNewTask("");
    setAdding(false);
  }
  const taskList = (
    <div className="db-tasks">
      <div className="db-panel-heading">
        <h4>
          {tab === "Tasks" ? "Your task list" : "Your focus today"}
          <span>{tasks.filter((t) => !t.done).length}</span>
        </h4>
        <button
          aria-label="Add a task"
          className="db-icon-btn"
          onClick={() => setAdding(!adding)}
        >
          <Plus size={16} />
        </button>
      </div>
      {adding && (
        <form
          className="add-task"
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <input
            aria-label="Task title"
            placeholder="A meaningful next step…"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            maxLength={100}
            required
            autoFocus
          />
          <button type="submit">Add</button>
        </form>
      )}
      {visibleTasks.length ? (
        visibleTasks.map((t) => (
          <label className={`task-row ${t.done ? "task-done" : ""}`} key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() =>
                setTasks(
                  tasks.map((task) =>
                    task.id === t.id ? { ...task, done: !task.done } : task,
                  ),
                )
              }
            />
            <div>
              <span>{t.title}</span>
              <small>
                <i style={{ background: t.color }} />
                {t.project}
              </small>
            </div>
            <time>{t.time}</time>
          </label>
        ))
      ) : (
        <p className="db-empty">
          No tasks match “{query}”. Try another search.
        </p>
      )}
    </div>
  );
  return (
    <div className="dashboard-frame">
      <div className="window-chrome">
        <span>
          <i />
          <i />
          <i />
        </span>
        <p>
          <span className="mini-lock">◈</span> YOUR WORKSPACE, A LITTLE MORE
          CONNECTED
        </p>
        <span className="preview-badge">INTERACTIVE PREVIEW</span>
      </div>
      <div className="dashboard">
        <aside className="db-sidebar">
          <div className="db-workspace">
            <BrandMark brand="synapse" />
            <span>
              Studio workspace<small>Pro plan · Demo</small>
            </span>
            <ChevronDown size={12} />
          </div>
          <p className="db-group-label">WORKSPACE</p>
          <div className="db-tabs" role="tablist" aria-label="Dashboard views">
            {tabs.map((t) => (
              <button
                role="tab"
                aria-label={t.name}
                id={`db-tab-${t.name.replaceAll(" ", "-")}`}
                aria-selected={tab === t.name}
                aria-controls="db-content"
                tabIndex={0}
                key={t.name}
                onClick={() => setTab(t.name)}
              >
                <t.icon size={16} />
                <span>{t.name}</span>
                {t.name === "AI Assistant" && <small>NEW</small>}
              </button>
            ))}
          </div>
          <div className="db-sidebar-projects">
            <p className="db-group-label">YOUR SPACES</p>
            {["Product design", "Brand studio", "Engineering"].map((p, i) => (
              <button
                key={p}
                onClick={() => {
                  setTab("Tasks");
                  setQuery(p);
                }}
              >
                <i
                  style={{ background: ["#9d7afa", "#e9af83", "#72b7b7"][i] }}
                />
                {p}
              </button>
            ))}
          </div>
          <div className="db-plan">
            <Sparkles size={18} />
            <strong>Make room for more.</strong>
            <p>Explore the plans built for your next chapter.</p>
            <a href="#pricing">
              Explore Pro
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="db-person">
            <span>AM</span>
            <div>
              Alex Morgan<small>Personal workspace</small>
            </div>
          </div>
        </aside>
        <div className="db-main">
          <div className="db-topbar">
            <p>
              Workspace<span>/</span>
              {tab}
            </p>
            <div>
              <label className="db-search">
                <Search size={13} />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (tab !== "Overview" && tab !== "Tasks") setTab("Tasks");
                  }}
                  placeholder="Search tasks…"
                  aria-label="Search dashboard tasks"
                />
                <kbd>⌘ K</kbd>
              </label>
              <button
                className="db-icon-btn notification-button"
                aria-label="Toggle notifications"
                aria-expanded={notifications}
                onClick={() => setNotifications(!notifications)}
              >
                <Bell size={15} />
                <i />
              </button>
              <span className="db-avatar">A</span>
            </div>
            {notifications && (
              <div className="db-notifications">
                <strong>You’re all caught up.</strong>
                <p>
                  One little update: your weekly sample report is ready in
                  Insights.
                </p>
                <button
                  onClick={() => {
                    setTab("Insights");
                    setNotifications(false);
                  }}
                >
                  View report
                  <ArrowUpRight size={13} />
                </button>
              </div>
            )}
          </div>
          <div
            className="db-content"
            id="db-content"
            role="tabpanel"
            aria-labelledby={`db-tab-${tab.replaceAll(" ", "-")}`}
          >
            <div className="db-greeting">
              <div>
                <p>MONDAY, OCTOBER 26</p>
                <h3>
                  {tab === "Overview"
                    ? "A good day to make things happen."
                    : tab === "Tasks"
                      ? "A little focus goes a long way."
                      : tab === "Insights"
                        ? "Your work, in perspective."
                        : tab === "AI Assistant"
                          ? "Meet your thinking partner."
                          : "Your tools. Working together."}{" "}
                  <span>{tab === "Overview" ? "✳" : ""}</span>
                </h3>
                <p className="db-subtitle">
                  {tab === "Overview"
                    ? "You’ve got this, Alex. Here’s the bigger picture."
                    : "Sample workspace · All changes stay in this preview."}
                </p>
              </div>
              <button
                className="db-date"
                onClick={() => setPeriod(period === "week" ? "month" : "week")}
              >
                <Calendar size={12} />
                {period === "week" ? "This week" : "This month"}
                <ChevronDown size={12} />
              </button>
            </div>
            {(tab === "Overview" || tab === "Insights") && (
              <>
                <div className="db-kpis">
                  {[
                    {
                      label: "Tasks completed",
                      value: 160 + tasks.filter((t) => t.done).length,
                      unit: "",
                      change: "+12.8%",
                      icon: CheckSquare,
                    },
                    {
                      label: "Weekly productivity",
                      value: period === "week" ? 88 : 94,
                      unit: "%",
                      change: "+8.2%",
                      icon: BarChart3,
                    },
                    {
                      label: "Hours reclaimed",
                      value: period === "week" ? "24.8" : "92.4",
                      unit: "h",
                      change: "+18.6%",
                      icon: Sparkles,
                    },
                  ].map((k) => (
                    <div key={k.label}>
                      <p>
                        <k.icon size={13} />
                        {k.label}
                        <MoreHorizontal size={14} />
                      </p>
                      <strong>
                        {k.value}
                        <span>{k.unit}</span>
                      </strong>
                      <small>
                        <span>↗ {k.change}</span> vs. previous period
                      </small>
                    </div>
                  ))}
                </div>
                <div className="db-chart-panel">
                  <div className="db-panel-heading">
                    <h4>Productivity overview</h4>
                    <div>
                      <span className="chart-key" />
                      Focus score{" "}
                      <button
                        onClick={() =>
                          setPeriod(period === "week" ? "month" : "week")
                        }
                      >
                        {period === "week" ? "Weekly" : "Monthly"}
                        <ChevronDown size={11} />
                      </button>
                    </div>
                  </div>
                  <ProductivityChart period={period} />
                </div>
              </>
            )}
            {(tab === "Overview" || tab === "Tasks") && (
              <div className={tab === "Overview" ? "db-bottom-grid" : ""}>
                {taskList}
                {tab === "Overview" && (
                  <div className="db-activity">
                    <div className="db-panel-heading">
                      <h4>Around your workspace</h4>
                      <span className="live-dot" />
                    </div>
                    {[
                      {
                        initial: "JL",
                        name: "Jamie Lee",
                        text: "shared the new brand direction",
                        time: "12 min ago",
                        color: "#c798f0",
                      },
                      {
                        initial: "SK",
                        name: "Sam Kim",
                        text: "completed the API documentation",
                        time: "35 min ago",
                        color: "#81b9b7",
                      },
                      {
                        initial: "AI",
                        name: "Synapse AI",
                        text: "prepared your weekly summary",
                        time: "1 hour ago",
                        color: "#a38af5",
                      },
                    ].map((a) => (
                      <div className="activity-row" key={a.name}>
                        <span
                          style={{ background: a.color + "22", color: a.color }}
                        >
                          {a.initial}
                        </span>
                        <div>
                          <p>
                            <strong>{a.name}</strong> {a.text}
                          </p>
                          <small>{a.time}</small>
                        </div>
                      </div>
                    ))}
                    <button
                      className="db-ai-link"
                      onClick={() => setTab("AI Assistant")}
                    >
                      <Sparkles size={14} />
                      Get a little clarity
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
            {tab === "AI Assistant" && <AIDemo compact />}
            {tab === "Insights" && (
              <div className="insight-summary">
                <Sparkles />
                <div>
                  <h4>The space to do your best work.</h4>
                  <p>
                    Your sample focus score is up{" "}
                    {period === "week" ? "8.2" : "14.6"}%. Tuesday and Thursday
                    were your most productive days. Try protecting two hours for
                    deep work tomorrow.
                  </p>
                </div>
              </div>
            )}
            {tab === "Integrations" && (
              <div className="db-integrations">
                {[
                  {
                    name: "Calendar",
                    icon: Calendar,
                    text: "Make space for meaningful work.",
                  },
                  {
                    name: "Documents",
                    icon: FileText,
                    text: "All the context, in one place.",
                  },
                  {
                    name: "Team chat",
                    icon: MessageSquare,
                    text: "Keep the conversation connected.",
                  },
                  {
                    name: "Database",
                    icon: Database,
                    text: "Make your knowledge work harder.",
                  },
                ].map((i) => (
                  <div key={i.name}>
                    <i.icon size={22} />
                    <h4>{i.name}</h4>
                    <p>{i.text}</p>
                    <button
                      aria-pressed={integrations.includes(i.name)}
                      onClick={() =>
                        setIntegrations(
                          integrations.includes(i.name)
                            ? integrations.filter((x) => x !== i.name)
                            : [...integrations, i.name],
                        )
                      }
                    >
                      {integrations.includes(i.name) ? (
                        <>
                          <Check size={13} />
                          Connected
                        </>
                      ) : (
                        "Connect demo"
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard-footnote">
        <span className="live-dot" />
        Try it — switch views, complete a task, ask a question.
        <span>LOCAL DEMO / NO ACCOUNT NEEDED</span>
      </div>
    </div>
  );
}
