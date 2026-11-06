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
    <div
      className={`productivity-chart w-full overflow-hidden [&>svg]:block [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[175px]`}
    >
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
    <div
      className={`
      db-tasks [border:1px_solid_var(--line)] rounded-[6px] p-[15px] bg-[#12121d]
      [@media(max-width:_1100px)]:p-[12px] [@media(max-width:_760px)]:[&_.db-panel-heading_h4]:text-[10px]
    `}
    >
      <div
        className={`
        db-panel-heading flex items-center justify-between gap-[10px] mb-[10px]
        [&_h4]:font-[family-name:var(--font-body)] [&_h4]:text-[10px] [&_h4]:tracking-normal [&_h4]:font-medium [&_h4]:flex
        [&_h4]:gap-[8px] [&_h4]:items-center [&_h4>span]:text-[7px] [&_h4>span]:bg-[#ffffff0a]
        [&_h4>span]:text-[#a89abb] [&_h4>span]:py-[2px] [&_h4>span]:px-[5px] [&_h4>span]:rounded-[3px] [&>div]:flex
        [&>div]:items-center [&>div]:gap-[5px] [&>div]:text-[#9d91ac] [&>div]:text-[7px]
        [&_button:not(.db-icon-btn)]:flex [&_button:not(.db-icon-btn)]:items-center
        [&_button:not(.db-icon-btn)]:gap-[10px] [&_button:not(.db-icon-btn)]:bg-[#ffffff04]
        [&_button:not(.db-icon-btn)]:text-[#b0a2c3] [&_button:not(.db-icon-btn)]:[border:1px_solid_#ffffff0d]
        [&_button:not(.db-icon-btn)]:text-[7px] [&_button:not(.db-icon-btn)]:rounded-[3px]
        [&_button:not(.db-icon-btn)]:py-[4px] [&_button:not(.db-icon-btn)]:px-[6px]
        [&_button:not(.db-icon-btn)]:ml-[10px] [@media(max-width:_1100px)]:[&_h4]:text-[9px]
        [@media(max-width:_760px)]:[&_h4]:text-[10px] [@media(max-width:_760px)]:[&>div]:text-[7px]
        [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:gap-[4px]
        [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:ml-[2px]
        [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:text-[7px]
        [@media(min-width:_761px)]:[&_h4]:text-[12px] [@media(min-width:_761px)]:[&>div]:text-[9px]
        [@media(min-width:_761px)]:[&_button:not(.db-icon-btn)]:text-[9px]
        [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_h4]:text-[10px]
      `}
      >
        <h4>
          {tab === "Tasks" ? "Your task list" : "Your focus today"}
          <span>{tasks.filter((t) => !t.done).length}</span>
        </h4>
        <button
          aria-label="Add a task"
          className={`db-icon-btn p-0 grid place-items-center text-[#9b90b2] bg-[transparent] w-[25px] h-[25px]`}
          onClick={() => setAdding(!adding)}
        >
          <Plus size={16} />
        </button>
      </div>
      {adding && (
        <form
          className={`
            add-task flex gap-[5px] mb-[10px] [&_input]:bg-[#ffffff06] [&_input]:[border:1px_solid_#ac8cf744]
            [&_input]:rounded-[3px] [&_input]:text-[9px] [&_input]:text-[white] [&_input]:p-[8px] [&_input]:w-full
            [&_input]:min-w-0 [&_button]:bg-[#b79bee] [&_button]:text-[#1e1235] [&_button]:rounded-[3px]
            [&_button]:py-[4px] [&_button]:px-[8px] [&_button]:text-[9px]
          `}
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
          <label
            className={`
            task-row flex items-center gap-[9px] py-[10px] px-0 [border-bottom:1px_solid_#ffffff07] cursor-pointer
            [&:last-child]:[border:0] [&_input]:appearance-none [&_input]:w-[11px] [&_input]:h-[11px]
            [&_input]:[border:1px_solid_#72648066] [&_input]:bg-[#13101f] [&_input]:rounded-[3px] [&_input]:shrink-0
            [&_input]:grid [&_input]:place-items-center [&_input]:m-0 [&_input:checked]:bg-[#ac8be9]
            [&_input:checked]:[border-color:#ac8be9] [&_input:checked::before]:[content:'✓']
            [&_input:checked::before]:text-[8px] [&_input:checked::before]:text-[#161023] [&>div]:min-w-0
            [&>div>span]:block [&>div>span]:text-[8px] [&>div>span]:whitespace-nowrap [&>div>span]:overflow-hidden
            [&>div>span]:text-ellipsis [&>div>span]:max-w-[230px] [&.task-done>div>span]:[text-decoration:line-through]
            [&.task-done>div>span]:text-[#786e88] [&_small]:flex [&_small]:gap-[4px] [&_small]:items-center
            [&_small]:text-[#756c86] [&_small]:text-[6px] [&_small]:mt-[4px] [&_small>i]:w-[3px] [&_small>i]:h-[3px]
            [&_small>i]:rounded-[1px] [&_time]:text-[6px] [&_time]:text-[#897f99] [&_time]:ml-auto
            [&_time]:whitespace-nowrap [@media(min-width:_1450px)]:[&>div>span]:text-[9px]
            [@media(max-width:_1100px)]:[&>div>span]:max-w-[140px] [@media(max-width:_1100px)]:[&>div>span]:text-[7px]
            [@media(max-width:_760px)]:[&>div>span]:text-[11px] [@media(max-width:_760px)]:[&>div>span]:max-w-[220px]
            [@media(max-width:_760px)]:[&_small]:text-[8px] [@media(max-width:_760px)]:gap-[9px]
            [@media(max-width:_760px)]:py-[12px] [@media(max-width:_760px)]:px-0
            [@media(max-width:_760px)]:[&_time]:text-[8px] [@media(min-width:_761px)]:[&>div>span]:text-[11px]
            [@media(min-width:_761px)]:[&>div>span]:max-w-[230px] [@media(min-width:_761px)]:[&_small]:text-[8px]
            [@media(min-width:_761px)]:[&_time]:text-[8px] [@media(min-width:_761px)]:py-[13px]
            [@media(min-width:_761px)]:px-0 [@media(min-width:_761px)_and_(max-width:_1100px)]:[&>div>span]:text-[9px]
            [@media(min-width:_761px)_and_(max-width:_1100px)]:[&>div>span]:max-w-[145px]
            [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_small]:text-[7px]
            [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_time]:text-[7px]
          ${t.done ? "task-done" : ""}`}
            key={t.id}
          >
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
        <p
          className={`db-empty text-[11px] text-[var(--muted)] py-[25px] px-0`}
        >
          No tasks match “{query}”. Try another search.
        </p>
      )}
    </div>
  );
  return (
    <div
      className={`
      dashboard-frame bg-[#101019] [border:1px_solid_#bba2ff2b] rounded-[12px]
      [box-shadow:0_0_0_5px_#ffffff03,_0_-4px_60px_#9969ed0f,_0_25px_80px_#0006] overflow-hidden
      [@media(max-width:_760px)]:rounded-[8px]
    `}
    >
      <div
        className={`
        window-chrome h-[35px] bg-[#14141f] flex items-center gap-[15px] py-0 px-[16px]
        [border-bottom:1px_solid_var(--line)] [&>span:first-child]:flex [&>span:first-child]:gap-[5px] [&_i]:w-[6px]
        [&_i]:h-[6px] [&_i]:rounded-full [&_i]:bg-[#4a4658] [&_i]:block [&_i:first-child]:bg-[#b86d78]
        [&_i:nth-child(2)]:bg-[#ac9963] [&_i:nth-child(3)]:bg-[#679d84] [&>p]:text-[7px] [&>p]:tracking-[0.1em]
        [&>p]:text-[#9b93ac] [&>p]:m-auto [@media(max-width:_760px)]:h-[27px] [@media(max-width:_760px)]:py-0
        [@media(max-width:_760px)]:px-[10px] [@media(max-width:_760px)]:[&>p]:mr-0
        [@media(max-width:_760px)]:[&>p]:text-[6px] [@media(max-width:_760px)]:[&>p]:tracking-[0.02em]
        [@media(max-width:_760px)]:[&_i]:w-[4px] [@media(max-width:_760px)]:[&_i]:h-[4px]
        [@media(min-width:_761px)]:[&>p]:text-[8px]
      `}
      >
        <span>
          <i />
          <i />
          <i />
        </span>
        <p>
          <span className={`mini-lock text-[#ad92dd] mr-[5px]`}>◈</span> YOUR
          WORKSPACE, A LITTLE MORE CONNECTED
        </p>
        <span
          className={`preview-badge text-[6px] tracking-[0.1em] text-[#8d839e] [@media(max-width:_760px)]:hidden`}
        >
          INTERACTIVE PREVIEW
        </span>
      </div>
      <div
        className={`
        dashboard grid [grid-template-columns:174px_1fr] min-h-[590px]
        [@media(min-width:_1450px)]:[grid-template-columns:190px_1fr]
        [@media(max-width:_1100px)]:[grid-template-columns:150px_1fr] [@media(max-width:_760px)]:flex
        [@media(max-width:_760px)]:flex-col [@media(max-width:_760px)]:min-h-0
        [@media(min-width:_761px)]:[grid-template-columns:190px_1fr]
        [@media(min-width:_761px)_and_(max-width:_1100px)]:[grid-template-columns:160px_1fr]
      `}
      >
        <aside
          className={`
          db-sidebar flex flex-col [border-right:1px_solid_var(--line)] bg-[#12121d] pt-[19px] px-[11px] pb-[15px]
          [@media(max-width:_760px)]:[border-right:0] [@media(max-width:_760px)]:[border-bottom:1px_solid_var(--line)]
          [@media(max-width:_760px)]:p-[10px]
        `}
        >
          <div
            className={`
            db-workspace flex items-center gap-[8px] py-0 px-[4px] mb-[32px] [&>.brand-mark]:w-[22px]
            [&>.brand-mark]:h-[22px] [&>.brand-mark]:text-[#b197ee] [&>span]:text-[9px] [&>span]:font-semibold
            [&>span]:whitespace-nowrap [&_small]:block [&_small]:text-[7px] [&_small]:text-[#7f7a93] [&_small]:font-normal
            [&_small]:mt-[4px] [&>svg:last-child]:ml-auto [&>svg:last-child]:text-[#918b9e]
            [@media(min-width:_1450px)]:[&>span]:text-[10px] [@media(max-width:_1100px)]:[&>svg:last-child]:hidden
            [@media(max-width:_1100px)]:[&>span]:text-[8px] [@media(max-width:_1100px)]:[&>.brand-mark]:w-[20px]
            [@media(max-width:_760px)]:hidden [@media(min-width:_761px)]:[&>span]:text-[10px]
            [@media(min-width:_761px)]:[&_small]:text-[8px]
            [@media(min-width:_761px)_and_(max-width:_1100px)]:[&>span]:text-[9px]
          `}
          >
            <BrandMark brand="synapse" />
            <span>
              Studio workspace<small>Pro plan · Demo</small>
            </span>
            <ChevronDown size={12} />
          </div>
          <p
            className={`
            db-group-label text-[7px] tracking-[0.12em] text-[#81798f] pl-[10px] mb-[10px]
            [@media(max-width:_760px)]:hidden [@media(min-width:_761px)]:text-[8px]
          `}
          >
            WORKSPACE
          </p>
          <div
            className={`
            db-tabs flex flex-col gap-[5px] [&>button]:flex [&>button]:items-center [&>button]:gap-[10px] [&>button]:w-full
            [&>button]:py-[10px] [&>button]:px-[11px] [&>button]:text-[#9b95ad] [&>button]:text-[9px] [&>button]:text-left
            [&>button]:bg-[transparent] [&>button]:rounded-[5px] [&>button[aria-selected="true"]]:bg-[#ad8bfc19]
            [&>button[aria-selected="true"]]:text-[#d5bfff] [&_small]:ml-auto [&_small]:text-[5px]
            [&_small]:[border:1px_solid_#ae83f544] [&_small]:rounded-[3px] [&_small]:py-[2px] [&_small]:px-[3px]
            [&_small]:tracking-[0.04em] [@media(min-width:_1450px)]:[&>button]:text-[10px]
            [@media(max-width:_760px)]:flex-row [@media(max-width:_760px)]:overflow-x-auto
            [@media(max-width:_760px)]:gap-[4px] [@media(max-width:_760px)]:pb-[2px]
            [@media(max-width:_760px)]:[scrollbar-width:thin]
            [@media(max-width:_760px)]:[scrollbar-color:#b595eb33_transparent]
            [@media(max-width:_760px)]:[&>button]:shrink-0 [@media(max-width:_760px)]:[&>button]:w-auto
            [@media(max-width:_760px)]:[&>button]:gap-[6px] [@media(max-width:_760px)]:[&>button]:text-[10px]
            [@media(max-width:_760px)]:[&>button]:p-[10px] [@media(max-width:_760px)]:[&>button>svg]:w-[12px]
            [@media(max-width:_760px)]:[&>button>svg]:h-[12px] [@media(max-width:_760px)]:[&_small]:hidden
            [@media(min-width:_761px)]:[&>button]:text-[11px]
            [@media(min-width:_761px)_and_(max-width:_1100px)]:[&>button]:text-[10px]
          `}
            role="tablist"
            aria-label="Dashboard views"
          >
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
          <div
            className={`
            db-sidebar-projects mt-[25px] [&>button]:flex [&>button]:items-center [&>button]:gap-[9px]
            [&>button]:text-[#9690a6] [&>button]:bg-[transparent] [&>button]:py-[9px] [&>button]:px-[12px]
            [&>button]:text-[9px] [&_i]:w-[6px] [&_i]:h-[6px] [&_i]:[border:1px_solid_#ffffff33] [&_i]:rounded-[2px]
            [@media(max-width:_760px)]:hidden [@media(min-width:_761px)]:[&>button]:text-[10px]
          `}
          >
            <p
              className={`
              db-group-label text-[7px] tracking-[0.12em] text-[#81798f] pl-[10px] mb-[10px]
              [@media(max-width:_760px)]:hidden [@media(min-width:_761px)]:text-[8px]
            `}
            >
              YOUR SPACES
            </p>
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
          <div
            className={`
            db-plan mt-[30px] mx-0 mb-[25px] py-[14px] px-[11px] bg-[image:linear-gradient(120deg,_#a97cec13,_#a97cec03)]
            [border:1px_solid_#b59aec17] rounded-[6px] [&>svg]:text-[#bc9ef4] [&>strong]:block [&>strong]:text-[9px]
            [&>strong]:mt-[9px] [&>strong]:mx-0 [&>strong]:mb-[7px] [&>strong]:font-medium [&>p]:text-[8px]
            [&>p]:text-[#9990ad] [&>p]:leading-[1.7] [&>a]:flex [&>a]:justify-between [&>a]:items-center [&>a]:pt-[7px]
            [&>a]:px-0 [&>a]:pb-0 [&>a]:text-[#cfb8fb] [&>a]:text-[8px] [&>a]:mt-[8px] [@media(max-width:_760px)]:hidden
            [@media(min-width:_761px)]:[&>strong]:text-[11px] [@media(min-width:_761px)]:[&>p]:text-[9px]
            [@media(min-width:_761px)]:[&>a]:text-[9px]
          `}
          >
            <Sparkles size={18} />
            <strong>Make room for more.</strong>
            <p>Explore the plans built for your next chapter.</p>
            <a href="#pricing">
              Explore Pro
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div
            className={`
            db-person flex items-center gap-[8px] mt-auto pt-[12px] [border-top:1px_solid_var(--line)] [&>span]:grid
            [&>span]:place-items-center [&>span]:w-[25px] [&>span]:h-[25px] [&>span]:rounded-full [&>span]:bg-[#ac88dc2d]
            [&>span]:text-[#d3bbf6] [&>span]:text-[8px] [&>div]:text-[8px] [&_small]:block [&_small]:text-[#7d768e]
            [&_small]:text-[7px] [&_small]:mt-[3px] [@media(max-width:_760px)]:hidden
            [@media(min-width:_761px)]:[&>div]:text-[10px] [@media(min-width:_761px)]:[&_small]:text-[8px]
          `}
          >
            <span>AM</span>
            <div>
              Alex Morgan<small>Personal workspace</small>
            </div>
          </div>
        </aside>
        <div className={`db-main min-w-0 bg-[#0e0e18]`}>
          <div
            className={`
            db-topbar h-[51px] flex items-center justify-between [border-bottom:1px_solid_var(--line)] py-0 px-[22px]
            relative [&>p]:text-[8px] [&>p]:text-[#d6cfe4] [&>p>span]:text-[#60596d] [&>p>span]:my-0 [&>p>span]:mx-[8px]
            [&>div:not(.db-notifications)]:flex [&>div:not(.db-notifications)]:items-center
            [&>div:not(.db-notifications)]:gap-[14px] [@media(max-width:_1100px)]:py-0
            [@media(max-width:_1100px)]:px-[15px] [@media(max-width:_760px)]:h-[40px] [@media(max-width:_760px)]:py-0
            [@media(max-width:_760px)]:px-[14px] [@media(max-width:_760px)]:[&>p]:text-[7px]
            [@media(max-width:_760px)]:[&>div:not(.db-notifications)]:gap-[9px]
            [@media(min-width:_761px)]:[&>p]:text-[10px]
          `}
          >
            <p>
              Workspace<span>/</span>
              {tab}
            </p>
            <div>
              <label
                className={`
                db-search flex items-center gap-[7px] bg-[#ffffff03] [border:1px_solid_var(--line)] rounded-[4px] py-[6px]
                px-[9px] text-[#898094] [&_input]:w-[90px] [&_input]:text-[#c8c0d6] [&_input]:text-[8px] [&_input]:[border:0]
                [&_input]:bg-[transparent] [&_input]:[outline:none] [&_kbd]:font-[family-name:inherit] [&_kbd]:text-[6px]
                [&_kbd]:text-[#6c647c] [&_kbd]:[border:1px_solid_#ffffff12] [&_kbd]:py-[1px] [&_kbd]:px-[4px]
                [@media(max-width:_1100px)]:hidden [@media(min-width:_761px)]:[&_input]:text-[9px]
                [@media(min-width:_761px)]:[&_input]:w-[105px]
              `}
              >
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
                className={`
                  db-icon-btn p-0 grid place-items-center text-[#9b90b2] bg-[transparent] w-[25px] h-[25px] notification-button
                  relative [&_i]:w-[3px] [&_i]:h-[3px] [&_i]:bg-[#b491ff] [&_i]:absolute [&_i]:top-[3px] [&_i]:right-[4px]
                  [&_i]:rounded-full
                `}
                aria-label="Toggle notifications"
                aria-expanded={notifications}
                onClick={() => setNotifications(!notifications)}
              >
                <Bell size={15} />
                <i />
              </button>
              <span
                className={`
                db-avatar grid place-items-center rounded-full bg-[#ac88dc2d] text-[#d3bbf6] text-[8px] w-[22px] h-[22px]
                [@media(max-width:_760px)]:w-[19px] [@media(max-width:_760px)]:h-[19px] [@media(max-width:_760px)]:text-[6px]
              `}
              >
                A
              </span>
            </div>
            {notifications && (
              <div
                className={`
                db-notifications absolute z-[5] top-[43px] right-[35px] w-[235px] bg-[#222033] [border:1px_solid_#be9bf43d]
                rounded-[6px] p-[16px] [box-shadow:0_15px_30px_#0009] [&>strong]:text-[12px] [&>p]:text-[10px]
                [&>p]:text-[var(--muted)] [&>p]:my-[8px] [&>p]:mx-0 [&_button]:flex [&_button]:items-center
                [&_button]:gap-[9px] [&_button]:bg-[transparent] [&_button]:text-[10px] [&_button]:text-[var(--accent)]
                [&_button]:pt-[8px] [&_button]:px-0 [&_button]:pb-0 [@media(max-width:_760px)]:right-[15px]
                [@media(max-width:_760px)]:top-[35px]
              `}
              >
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
            className={`
              db-content py-[24px] px-[22px] [@media(min-width:_1450px)]:p-[28px] [@media(max-width:_1100px)]:py-[20px]
              [@media(max-width:_1100px)]:px-[15px] [@media(max-width:_760px)]:py-[20px] [@media(max-width:_760px)]:px-[13px]
            `}
            id="db-content"
            role="tabpanel"
            aria-labelledby={`db-tab-${tab.replaceAll(" ", "-")}`}
          >
            <div
              className={`
              db-greeting flex justify-between items-center gap-[15px] mb-[21px] [&>div>p:first-child]:text-[6px]
              [&>div>p:first-child]:tracking-[0.11em] [&>div>p:first-child]:text-[#8e829e] [&>div>p:first-child]:mb-[8px]
              [&_h3]:text-[20px] [&_h3]:tracking-[-0.04em] [&_h3]:leading-[1.2] [&_h3>span]:text-[#c4a2f6]
              [&_h3>span]:text-[21px] [&_h3>span]:ml-[5px] [&_.db-subtitle]:text-[8px] [&_.db-subtitle]:text-[#8e859e]
              [&_.db-subtitle]:mt-[8px] [@media(max-width:_1100px)]:[&_h3]:text-[16px] [@media(max-width:_760px)]:items-start
              [@media(max-width:_760px)]:mb-[19px] [@media(max-width:_760px)]:[&>div>p:first-child]:text-[6px]
              [@media(max-width:_760px)]:[&_h3]:leading-[1.25] [@media(max-width:_760px)]:[&_h3]:max-w-[230px]
              [@media(max-width:_760px)]:[&_h3]:text-[18px] [@media(max-width:_760px)]:[&_h3>span]:text-[16px]
              [@media(max-width:_760px)]:[&_.db-subtitle]:max-w-[215px]
              [@media(max-width:_760px)]:[&_.db-subtitle]:leading-[1.7]
              [@media(max-width:_760px)]:[&_.db-subtitle]:text-[9px] [@media(min-width:_761px)]:[&_h3]:text-[23px]
              [@media(min-width:_761px)]:[&>div>p:first-child]:text-[8px]
              [@media(min-width:_761px)]:[&_.db-subtitle]:text-[10px] [@media(min-width:_761px)]:gap-[12px]
              [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_h3]:text-[20px]
              [@media(max-width:_760px)]:[&_.db-date]:text-[7px]
            `}
            >
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
                className={`
                  db-date flex items-center gap-[7px] whitespace-nowrap bg-[#ffffff03] [border:1px_solid_var(--line)] py-[8px]
                  px-[9px] rounded-[4px] text-[7px] text-[#b6acc8] [@media(max-width:_1100px)]:text-[6px]
                  [@media(max-width:_1100px)]:p-[7px] [@media(max-width:_760px)]:text-[6px] [@media(max-width:_760px)]:gap-[4px]
                  [@media(max-width:_760px)]:whitespace-nowrap [@media(max-width:_760px)]:[&>svg:first-child]:hidden
                  [@media(min-width:_761px)]:text-[9px]
                `}
                onClick={() => setPeriod(period === "week" ? "month" : "week")}
              >
                <Calendar size={12} />
                {period === "week" ? "This week" : "This month"}
                <ChevronDown size={12} />
              </button>
            </div>
            {(tab === "Overview" || tab === "Insights") && (
              <>
                <div
                  className={`
                  db-kpis grid [grid-template-columns:repeat(3,_1fr)] gap-[11px] [&>div]:p-[15px]
                  [&>div]:bg-[image:linear-gradient(110deg,_#1b182b,_#14131f)] [&>div]:[border:1px_solid_#bb9bea17]
                  [&>div]:rounded-[6px] [&>div>p]:flex [&>div>p]:items-center [&>div>p]:gap-[7px] [&>div>p]:text-[#b1a6c3]
                  [&>div>p]:text-[8px] [&>div>p>svg:last-child]:ml-auto [&>div>p>svg:last-child]:text-[#615969]
                  [&_strong]:font-[family-name:var(--font-display)] [&_strong]:text-[29px] [&_strong]:font-medium
                  [&_strong]:block [&_strong]:mt-[12px] [&_strong]:mx-0 [&_strong]:mb-[7px] [&_strong]:tracking-[-0.05em]
                  [&_strong>span]:text-[19px] [&_strong>span]:ml-[2px] [&_strong>span]:text-[#b9b0c9] [&_small]:text-[#766d87]
                  [&_small]:text-[6px] [&_small>span]:text-[#8cc4ab] [&_small>span]:mr-[5px]
                  [@media(min-width:_1450px)]:[&>div>p]:text-[9px] [@media(max-width:_1100px)]:[&>div]:p-[12px]
                  [@media(max-width:_1100px)]:[&_small]:text-[5px] [@media(max-width:_760px)]:gap-[7px]
                  [@media(max-width:_760px)]:[&>div]:py-[10px] [@media(max-width:_760px)]:[&>div]:px-[8px]
                  [@media(max-width:_760px)]:[&>div>p]:gap-[4px] [@media(max-width:_760px)]:[&>div>p]:leading-[1.5]
                  [@media(max-width:_760px)]:[&>div>p]:text-[8px] [@media(max-width:_760px)]:[&>div>p>svg]:w-[9px]
                  [@media(max-width:_760px)]:[&>div>p>svg]:h-[9px] [@media(max-width:_760px)]:[&>div>p>svg:last-child]:hidden
                  [@media(max-width:_760px)]:[&_strong]:text-[25px] [@media(max-width:_760px)]:[&_strong]:mt-[10px]
                  [@media(max-width:_760px)]:[&_strong]:mx-0 [@media(max-width:_760px)]:[&_strong]:mb-[5px]
                  [@media(max-width:_760px)]:[&_strong>span]:text-[16px] [@media(max-width:_760px)]:[&_small]:block
                  [@media(max-width:_760px)]:[&_small]:leading-[1.8] [@media(max-width:_760px)]:[&_small]:text-[6px]
                  [@media(max-width:_760px)]:[&_small>span]:block [@media(max-width:_760px)]:[&_small>span]:text-[7px]
                  [@media(min-width:_761px)]:[&>div>p]:text-[10px] [@media(min-width:_761px)]:[&_strong]:text-[34px]
                  [@media(min-width:_761px)]:[&_small]:text-[8px]
                  [@media(min-width:_761px)_and_(max-width:_1100px)]:[&>div>p]:text-[8px]
                  [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_small]:text-[6px]
                `}
                >
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
                <div
                  className={`
                  db-chart-panel [border:1px_solid_var(--line)] bg-[#12121e] mt-[15px] rounded-[6px] pt-[15px] px-[16px] pb-[9px]
                  [@media(max-width:_760px)]:pt-[12px] [@media(max-width:_760px)]:px-[9px] [@media(max-width:_760px)]:pb-[9px]
                  [@media(max-width:_760px)]:mt-[11px]
                `}
                >
                  <div
                    className={`
                    db-panel-heading flex items-center justify-between gap-[10px] mb-[10px]
                    [&_h4]:font-[family-name:var(--font-body)] [&_h4]:text-[10px] [&_h4]:tracking-normal [&_h4]:font-medium [&_h4]:flex
                    [&_h4]:gap-[8px] [&_h4]:items-center [&_h4>span]:text-[7px] [&_h4>span]:bg-[#ffffff0a]
                    [&_h4>span]:text-[#a89abb] [&_h4>span]:py-[2px] [&_h4>span]:px-[5px] [&_h4>span]:rounded-[3px] [&>div]:flex
                    [&>div]:items-center [&>div]:gap-[5px] [&>div]:text-[#9d91ac] [&>div]:text-[7px]
                    [&_button:not(.db-icon-btn)]:flex [&_button:not(.db-icon-btn)]:items-center
                    [&_button:not(.db-icon-btn)]:gap-[10px] [&_button:not(.db-icon-btn)]:bg-[#ffffff04]
                    [&_button:not(.db-icon-btn)]:text-[#b0a2c3] [&_button:not(.db-icon-btn)]:[border:1px_solid_#ffffff0d]
                    [&_button:not(.db-icon-btn)]:text-[7px] [&_button:not(.db-icon-btn)]:rounded-[3px]
                    [&_button:not(.db-icon-btn)]:py-[4px] [&_button:not(.db-icon-btn)]:px-[6px]
                    [&_button:not(.db-icon-btn)]:ml-[10px] [@media(max-width:_1100px)]:[&_h4]:text-[9px]
                    [@media(max-width:_760px)]:[&_h4]:text-[10px] [@media(max-width:_760px)]:[&>div]:text-[7px]
                    [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:gap-[4px]
                    [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:ml-[2px]
                    [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:text-[7px]
                    [@media(min-width:_761px)]:[&_h4]:text-[12px] [@media(min-width:_761px)]:[&>div]:text-[9px]
                    [@media(min-width:_761px)]:[&_button:not(.db-icon-btn)]:text-[9px]
                    [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_h4]:text-[10px]
                  `}
                  >
                    <h4>Productivity overview</h4>
                    <div>
                      <span
                        className={`chart-key w-[4px] h-[4px] bg-[#aa86f1] rounded-full ml-[5px]`}
                      />
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
              <div
                className={
                  tab === "Overview"
                    ? `
                db-bottom-grid grid [grid-template-columns:1.3fr_1fr] gap-[15px] mt-[15px]
                [@media(max-width:_1100px)]:[grid-template-columns:1.15fr_1fr] [@media(max-width:_1100px)]:gap-[10px]
                [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:mt-[11px]
                [@media(max-width:_760px)]:gap-[11px]
              `
                    : ""
                }
              >
                {taskList}
                {tab === "Overview" && (
                  <div
                    className={`
                    db-activity [border:1px_solid_var(--line)] rounded-[6px] p-[15px] bg-[#12121d]
                    [@media(max-width:_1100px)]:p-[12px] [@media(max-width:_760px)]:[&_.db-panel-heading_h4]:text-[10px]
                    [@media(max-width:_760px)]:hidden
                  `}
                  >
                    <div
                      className={`
                      db-panel-heading flex items-center justify-between gap-[10px] mb-[10px]
                      [&_h4]:font-[family-name:var(--font-body)] [&_h4]:text-[10px] [&_h4]:tracking-normal [&_h4]:font-medium [&_h4]:flex
                      [&_h4]:gap-[8px] [&_h4]:items-center [&_h4>span]:text-[7px] [&_h4>span]:bg-[#ffffff0a]
                      [&_h4>span]:text-[#a89abb] [&_h4>span]:py-[2px] [&_h4>span]:px-[5px] [&_h4>span]:rounded-[3px] [&>div]:flex
                      [&>div]:items-center [&>div]:gap-[5px] [&>div]:text-[#9d91ac] [&>div]:text-[7px]
                      [&_button:not(.db-icon-btn)]:flex [&_button:not(.db-icon-btn)]:items-center
                      [&_button:not(.db-icon-btn)]:gap-[10px] [&_button:not(.db-icon-btn)]:bg-[#ffffff04]
                      [&_button:not(.db-icon-btn)]:text-[#b0a2c3] [&_button:not(.db-icon-btn)]:[border:1px_solid_#ffffff0d]
                      [&_button:not(.db-icon-btn)]:text-[7px] [&_button:not(.db-icon-btn)]:rounded-[3px]
                      [&_button:not(.db-icon-btn)]:py-[4px] [&_button:not(.db-icon-btn)]:px-[6px]
                      [&_button:not(.db-icon-btn)]:ml-[10px] [@media(max-width:_1100px)]:[&_h4]:text-[9px]
                      [@media(max-width:_760px)]:[&_h4]:text-[10px] [@media(max-width:_760px)]:[&>div]:text-[7px]
                      [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:gap-[4px]
                      [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:ml-[2px]
                      [@media(max-width:_760px)]:[&_button:not(.db-icon-btn)]:text-[7px]
                      [@media(min-width:_761px)]:[&_h4]:text-[12px] [@media(min-width:_761px)]:[&>div]:text-[9px]
                      [@media(min-width:_761px)]:[&_button:not(.db-icon-btn)]:text-[9px]
                      [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_h4]:text-[10px]
                    `}
                    >
                      <h4>Around your workspace</h4>
                      <span
                        className={`live-dot inline-block w-[5px] h-[5px] rounded-full bg-[#a88bdf] [box-shadow:0_0_7px_#a88bdf44]`}
                      />
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
                      <div
                        className={`
                        activity-row flex gap-[9px] mt-[13px] [&>span]:w-[23px] [&>span]:h-[23px] [&>span]:text-[7px] [&>span]:grid
                        [&>span]:place-items-center [&>span]:rounded-full [&_p]:text-[7px] [&_p]:text-[#94899f] [&_p]:leading-[1.6]
                        [&_strong]:font-medium [&_strong]:text-[#c4b8d5] [&_small]:text-[6px] [&_small]:text-[#6a6179] [&_small]:block
                        [&_small]:mt-[2px] [@media(min-width:_1450px)]:[&_p]:text-[8px] [@media(min-width:_761px)]:[&_p]:text-[10px]
                        [@media(min-width:_761px)]:[&_small]:text-[8px] [@media(min-width:_761px)]:[&>span]:text-[8px]
                        [@media(min-width:_761px)]:[&>span]:w-[27px] [@media(min-width:_761px)]:[&>span]:h-[27px]
                        [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_p]:text-[8px]
                        [@media(min-width:_761px)_and_(max-width:_1100px)]:[&_small]:text-[6px]
                      `}
                        key={a.name}
                      >
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
                      className={`
                        db-ai-link flex items-center gap-[7px] text-[7px] text-[#c7b1ed] pt-[10px] px-0 pb-0 mt-[12px] w-full
                        [border-top:1px_solid_var(--line)] bg-[transparent] [&>svg:last-child]:ml-auto
                        [@media(min-width:_761px)]:text-[9px]
                      `}
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
              <div
                className={`
                insight-summary flex gap-[16px] bg-[#a585ed0c] [border:1px_solid_#a585ed22] rounded-[6px] p-[22px] mt-[20px]
                [&>svg]:text-[var(--accent)] [&>svg]:w-[18px] [&_h4]:text-[18px] [&_p]:text-[11px] [&_p]:text-[var(--muted)]
                [&_p]:mt-[8px]
              `}
              >
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
              <div
                className={`
                db-integrations grid [grid-template-columns:1fr_1fr] gap-[15px] [&>div]:py-[28px] [&>div]:px-[20px]
                [&>div]:[border:1px_solid_var(--line)] [&>div]:rounded-[6px] [&>div]:bg-[#ffffff03]
                [&>div>svg]:text-[var(--accent)] [&>div>svg]:mb-[18px] [&_h4]:text-[19px] [&_p]:text-[11px]
                [&_p]:text-[var(--muted)] [&_p]:mt-[8px] [&_p]:mx-0 [&_p]:mb-[18px] [&_button]:bg-[#ad8bf122]
                [&_button]:text-[#d1baf8] [&_button]:[border:1px_solid_#ad8bf133] [&_button]:rounded-[4px] [&_button]:py-[8px]
                [&_button]:px-[10px] [&_button]:text-[10px] [&_button]:flex [&_button]:gap-[7px] [&_button]:items-center
                [&_button[aria-pressed="true"]]:text-[#9bc5b3] [&_button[aria-pressed="true"]]:[border-color:#9bc5b333]
                [&_button[aria-pressed="true"]]:bg-[#9bc5b310] [@media(max-width:_760px)]:gap-[10px]
                [@media(max-width:_760px)]:[&>div]:py-[20px] [@media(max-width:_760px)]:[&>div]:px-[12px]
                [@media(max-width:_760px)]:[&_h4]:text-[17px] [@media(max-width:_760px)]:[&_p]:text-[9px]
                [@media(max-width:_760px)]:[&_button]:text-[9px]
              `}
              >
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
      <div
        className={`
        dashboard-footnote [border-top:1px_solid_var(--line)] text-[8px] text-[#afa1c1] py-[12px] px-[22px] flex
        items-center gap-[8px] bg-[#17131f] [&>span:last-child]:ml-auto [&>span:last-child]:text-[6px]
        [&>span:last-child]:tracking-[0.08em] [&>span:last-child]:text-[#807289] [@media(max-width:_760px)]:py-[11px]
        [@media(max-width:_760px)]:px-[12px] [@media(max-width:_760px)]:gap-[6px]
        [@media(max-width:_760px)]:leading-[1.6] [@media(max-width:_760px)]:text-[8px]
        [@media(max-width:_760px)]:[&>span:last-child]:hidden [@media(min-width:_761px)]:text-[9px]
      `}
      >
        <span
          className={`live-dot inline-block w-[5px] h-[5px] rounded-full bg-[#a88bdf] [box-shadow:0_0_7px_#a88bdf44]`}
        />
        Try it — switch views, complete a task, ask a question.
        <span>LOCAL DEMO / NO ACCOUNT NEEDED</span>
      </div>
    </div>
  );
}
