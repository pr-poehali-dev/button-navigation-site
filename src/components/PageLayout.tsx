import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, icon, children }: PageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-6 py-5 sticky top-0 bg-background z-10">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Icon name="ArrowLeft" size={14} />
            Назад
          </button>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <Icon name={icon} size={14} className="text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-10 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
              {subtitle}
            </p>
            <h1 className="text-2xl font-semibold text-foreground tracking-tight">
              {title}
            </h1>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
