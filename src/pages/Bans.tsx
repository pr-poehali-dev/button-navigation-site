import PageLayout from "@/components/PageLayout";
import Icon from "@/components/ui/icon";

const bans = [
  {
    title: "Оскорбления и травля",
    text: "Любые форм моббинга, буллинга, систематических нападок на участника сообщества.",
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
      <div className="mb-6 px-4 py-3 bg-destructive/5 border border-destructive/20 flex items-start gap-3">
        <Icon name="AlertTriangle" size={14} className="text-destructive mt-0.5 shrink-0" />
        <p className="text-xs text-foreground/70 leading-relaxed">
          Нарушение любого из перечисленных пунктов влечёт немедленную блокировку аккаунта без предупреждения.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {bans.map((ban, i) => (
          <div key={i} className="flex items-start gap-4 px-6 py-4 bg-card border border-border hover:border-foreground/30 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
            <div>
              <h3 className="font-medium text-sm text-foreground mb-1">
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
