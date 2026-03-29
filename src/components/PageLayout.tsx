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
      <header className="px-8 py-5 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Icon name="ArrowLeft" size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Назад</span>
          </button>
          <div className="flex items-center gap-2 text-muted-foreground/60">
            <Icon name={icon} size={13} />
            <span className="text-xs font-medium tracking-wide uppercase">{subtitle}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-8 pt-14 pb-16 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground tracking-tight leading-tight">
              {title}
            </h1>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
