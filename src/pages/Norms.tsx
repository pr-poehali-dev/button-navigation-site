import PageLayout from "@/components/PageLayout";

const categories = [
  {
    category: "Как писать",
    items: [
      "Старайся писать грамотно — это помогает тебя понять",
      "Капслок воспринимается как крик, лучше без него",
      "Цитируй собеседника, если отвечаешь на что-то конкретное",
      "Не дублируй одно сообщение несколько раз — его заметят",
    ],
  },
  {
    category: "Как постить",
    items: [
      "Давай понятные заголовки — так людям легче найти нужное",
      "Ставь теги — это мелочь, но очень помогает",
      "Если ссылаешься на данные — укажи откуда",
      "Длинный текст лучше разбить на абзацы",
    ],
  },
  {
    category: "Как общаться",
    items: [
      "Если тебе написали напрямую — постарайся ответить",
      "Лайк или «спасибо» — мелочь, а человеку приятно",
      "Увидел нарушение — напиши модератору, не разжигай публично",
      "Помоги новенькому освоиться — ты тоже когда-то был новым",
    ],
  },
];

export default function Norms() {
  return (
    <PageLayout title="Нормы" subtitle="Раздел 3 из 4" icon="Scale">
      <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
        Это не жёсткие правила, а скорее небольшие привычки, которые делают общение приятнее для всех.
      </p>
      <div className="flex flex-col gap-10">
        {categories.map((cat, ci) => (
          <div key={cat.category}>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-4">
              {cat.category}
            </h2>
            <div className="flex flex-col">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-border last:border-b-0 animate-slide-up"
                  style={{ animationDelay: `${(ci * 4 + i) * 50}ms`, animationFillMode: "both", opacity: 0 }}
                >
                  <span className="text-xs font-mono text-muted-foreground/25 mt-0.5 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
