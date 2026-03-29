import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    id: "rules",
    label: "Правила",
    description: "Как мы общаемся друг с другом",
    icon: "BookOpen",
    path: "/rules",
    num: "01",
  },
  {
    id: "bans",
    label: "Запреты",
    description: "Что у нас не приветствуется",
    icon: "ShieldOff",
    path: "/bans",
    num: "02",
  },
  {
    id: "norms",
    label: "Нормы",
    description: "Маленькие привычки хорошего общения",
    icon: "Scale",
    path: "/norms",
    num: "03",
  },
  {
    id: "anketa",
    label: "Анкета",
    description: "Хочешь к нам? Заполни пару строк",
    icon: "ClipboardList",
    path: "/anketa",
    num: "04",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-8 pt-16 pb-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Онлайн-сообщество
          </p>
          <h1 className="text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            Добро пожаловать 👋
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Здесь всё, что нужно знать, чтобы чувствовать себя как дома. Займёт буквально пару минут.
          </p>
        </div>
      </header>

      <main className="flex-1 px-8 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className="group flex items-center justify-between w-full px-6 py-5 bg-card border border-border text-left transition-all duration-200 hover:border-foreground/30 hover:shadow-sm animate-slide-up"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "both",
                  opacity: 0,
                }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-200">
                    <Icon name={section.icon} size={16} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {section.label}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {section.description}
                    </div>
                  </div>
                </div>
                <Icon
                  name="ChevronRight"
                  size={16}
                  className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="px-8 py-6 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground/60 text-center">
            Спасибо, что читаешь — это уже здорово 🙌
          </p>
        </div>
      </footer>
    </div>
  );
}
