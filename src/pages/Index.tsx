import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    id: "rules",
    label: "Правила",
    description: "Основные правила поведения в сообществе",
    icon: "BookOpen",
    path: "/rules",
  },
  {
    id: "bans",
    label: "Запреты",
    description: "Что категорически запрещено",
    icon: "ShieldOff",
    path: "/bans",
  },
  {
    id: "norms",
    label: "Нормы",
    description: "Стандарты общения и публикаций",
    icon: "Scale",
    path: "/norms",
  },
  {
    id: "anketa",
    label: "Анкета",
    description: "Заполните для вступления в сообщество",
    icon: "ClipboardList",
    path: "/anketa",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
            Онлайн-сообщество
          </p>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Правила и нормы
          </h1>
        </div>
      </header>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
            Ознакомьтесь с правилами нашего сообщества. Соблюдение этих норм
            помогает поддерживать комфортную атмосферу для всех участников.
          </p>

          <nav className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className="group flex items-center justify-between w-full px-6 py-5 bg-card border border-border text-left transition-all duration-200 hover:border-foreground hover:bg-accent animate-slide-up"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both", opacity: 0 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 flex items-center justify-center border border-border group-hover:border-foreground transition-colors">
                    <Icon name={section.icon} size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {section.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {section.description}
                    </div>
                  </div>
                </div>
                <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </nav>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground">
            Незнание правил не освобождает от ответственности.
          </p>
        </div>
      </footer>
    </div>
  );
}
