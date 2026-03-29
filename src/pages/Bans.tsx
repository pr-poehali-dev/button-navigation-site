import PageLayout from "@/components/PageLayout";
import Icon from "@/components/ui/icon";

const bans = [
  {
    title: "Оскорбления и травля",
    text: "Любые формы моббинга, буллинга, систематических нападок на участника сообщества.",
  },
  {
    title: "Ненависть и дискриминация",
    text: "Высказывания, разжигающие ненависть по признаку расы, пола, религии, национальности или ориентации.",
  },
  {
    title: "Реклама и спам",
    text: "Несогласованная реклама, массовая рассылка сообщений, продвижение сторонних ресурсов без разрешения.",
  },
  {
    title: "Провокации и флейм",
    text: "Намеренные провокации, разжигание споров, использование запрещённых тем для дестабилизации обстановки.",
  },
  {
    title: "NSFW-контент",
    text: "Материалы сексуального характера, жестокость, контент не для всех возрастов без соответствующей маркировки.",
  },
  {
    title: "Мошенничество",
    text: "Любые схемы обмана, фишинг, распространение вредоносных ссылок и файлов.",
  },
];

export default function Bans() {
  return (
    <PageLayout title="Запреты" subtitle="Раздел 2 из 4" icon="ShieldOff">
      <div className="flex items-start gap-3 mb-10 p-4 border-l-2 border-destructive bg-destructive/5">
        <Icon name="AlertTriangle" size={14} className="text-destructive mt-0.5 shrink-0" />
        <p className="text-sm text-foreground/70 leading-relaxed">
          Нарушение любого из пунктов влечёт немедленную блокировку без предупреждения.
        </p>
      </div>

      <div className="flex flex-col">
        {bans.map((ban, i) => (
          <div
            key={i}
            className="group flex items-start gap-5 py-7 border-b border-border last:border-b-0 hover:bg-accent/40 transition-colors px-1 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", opacity: 0 }}
          >
            <div className="w-2 h-2 rounded-full bg-destructive/60 shrink-0 mt-2" />
            <div>
              <h3 className="font-semibold text-base text-foreground mb-2 tracking-tight">
                {ban.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ban.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
