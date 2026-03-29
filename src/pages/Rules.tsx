import PageLayout from "@/components/PageLayout";

const rules = [
  {
    num: "01",
    title: "Уважай других",
    text: "Мы все разные, и это круто. Общайся так, как хотел бы, чтобы общались с тобой — без грубости и наездов.",
  },
  {
    num: "02",
    title: "Пиши по теме",
    text: "Старайся попадать в тему разговора. Если хочется поговорить о чём-то другом — найди подходящее место или создай новое.",
  },
  {
    num: "03",
    title: "Не распространяй фейки",
    text: "Прежде чем поделиться чем-то — убедись, что это правда. Никто не хочет случайно стать источником ложной информации.",
  },
  {
    num: "04",
    title: "Уважай чужой труд",
    text: "Если используешь чьи-то материалы — упомяни автора. Это занимает секунду, но значит очень много.",
  },
  {
    num: "05",
    title: "Береги личное",
    text: "Не публикуй личные данные других людей без их согласия. У каждого есть право на приватность.",
  },
  {
    num: "06",
    title: "Спорь культурно",
    text: "Разногласия — это нормально. Если совсем горячо — позови модератора, не разбирайся публично.",
  },
];

export default function Rules() {
  return (
    <PageLayout title="Правила" subtitle="Раздел 1 из 4" icon="BookOpen">
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
        Всего шесть пунктов — и все они про простое человеческое уважение.
      </p>
      <div className="flex flex-col">
        {rules.map((rule, i) => (
          <div
            key={rule.num}
            className="grid grid-cols-[2rem_1fr] gap-5 py-7 border-b border-border last:border-b-0 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", opacity: 0 }}
          >
            <span className="text-xs font-mono text-muted-foreground/30 pt-1">
              {rule.num}
            </span>
            <div>
              <h3 className="font-semibold text-base text-foreground mb-1.5">
                {rule.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rule.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
