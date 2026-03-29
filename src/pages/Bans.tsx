import PageLayout from "@/components/PageLayout";
import Icon from "@/components/ui/icon";

const bans = [
  {
    title: "Обзывалки и травля",
    text: "Никакого буллинга, никаких систематических нападок. Если кто-то раздражает — просто не общайся с ним.",
  },
  {
    title: "Ненависть к людям",
    text: "Высказывания, которые унижают людей по полу, нации, религии или другим признакам — не наш формат.",
  },
  {
    title: "Спам и реклама",
    text: "Не рассылай одно и то же по кругу и не рекламируй себя без спроса. Хочешь поделиться — сначала спроси.",
  },
  {
    title: "Провокации",
    text: "Специально лезть на конфликт, раздувать скандал из ничего — это утомительно для всех. Пожалуйста, не надо.",
  },
  {
    title: "Контент 18+",
    text: "Материалы для взрослых — не здесь. Если не уверен, подходит ли контент — скорее всего не подходит.",
  },
  {
    title: "Обман и мошенничество",
    text: "Никаких схем, фишинга и подозрительных ссылок. За это блокируем сразу и без разговоров.",
  },
];

export default function Bans() {
  return (
    <PageLayout title="Запреты" subtitle="Раздел 2 из 4" icon="ShieldOff">
      <div className="flex items-start gap-3 mb-8 p-4 rounded-sm bg-orange-50 border border-orange-100">
        <Icon name="AlertTriangle" size={14} className="text-orange-400 mt-0.5 shrink-0" />
        <p className="text-sm text-foreground/70 leading-relaxed">
          За нарушение этих пунктов мы блокируем сразу — без предупреждений. Просто чтобы ты знал.
        </p>
      </div>

      <div className="flex flex-col">
        {bans.map((ban, i) => (
          <div
            key={i}
            className="flex items-start gap-5 py-7 border-b border-border last:border-b-0 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", opacity: 0 }}
          >
            <div className="w-2 h-2 rounded-full bg-orange-300 shrink-0 mt-2" />
            <div>
              <h3 className="font-semibold text-base text-foreground mb-1.5">
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
