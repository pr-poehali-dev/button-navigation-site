import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    id: "rules",
    label: "Правила",
    description: "Основные правила поведения",
    icon: "BookOpen",
    path: "/rules",
    num: "01",
  },
  {
    id: "bans",
    label: "Запреты",
    description: "Что категорически запрещено",
    icon: "ShieldOff",
    path: "/bans",
    num: "02",
  },
  {
    id: "norms",
    label: "Нормы",
    description: "Стандарты общения и публикаций",
    icon: "Scale",
    path: "/norms",
    num: "03",
  },
  {
    id: "anketa",
    label: "Анкета",
    description: "Заполните для вступления",
    icon: "ClipboardList",
    path: "/anketa",
    num: "04",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-8 pt-16 pb-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Онлайн-сообщество
          </p>
          <h1 className="text-6xl font-bold text-foreground leading-[1.0] tracking-tight mb-6">
            Правила<br />
            <span className="relative inline-block">
              и нормы
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground/15" />
            </span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Ознакомьтесь с правилами нашего сообщества — это основа комфортного общения для всех.
          </p>
        </div>
      </header>

      <main className="flex-1 px-8 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border mb-2" />
          <nav className="flex flex-col">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className="group relative flex items-center justify-between w-full py-6 border-b border-border text-left transition-all duration-300 hover:pl-4 animate-slide-up"
                style={{
                  animationDelay: `${index * 90}ms`,
                  animationFillMode: "both",
                  opacity: 0,
                }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-mono text-muted-foreground/50 w-6 shrink-0">
                    {section.num}
                  </span>
                  <div>
                    <div className="text-xl font-semibold text-foreground tracking-tight group-hover:text-foreground transition-colors">
                      {section.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 transition-colors">
                      {section.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 bg-foreground text-background">
                    <Icon name={section.icon} size={14} />
                  </div>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </button>
            ))}
          </nav>
        </div>
      </main>

      <footer className="px-8 py-8 border-t border-border">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-xs text-muted-foreground/60">
            Незнание правил не освобождает от ответственности.
          </p>
          <div className="text-xs font-mono text-muted-foreground/40">
            v1.0
          </div>
        </div>
      </footer>
    </div>
  );
}
