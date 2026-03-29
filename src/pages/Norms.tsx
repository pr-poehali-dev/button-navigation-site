import PageLayout from "@/components/PageLayout";

const categories = [
  {
    category: "Общение",
    items: [
      "Пишите грамотно, используйте знаки препинания",
      "Избегайте капслока — это воспринимается как крик",
      "Цитируйте собеседника, чтобы ответ был понятен в контексте",
      "Не дублируйте сообщения и не редактируйте их без причины",
    ],
  },
  {
    category: "Публикации",
    items: [
      "Давайте содержательные заголовки своим постам",
      "Используйте теги для удобной навигации",
      "Прикрепляйте источники при цитировании данных или фактов",
      "Соблюдайте разумный объём — длинные посты форматируйте",
    ],
  },
  {
    category: "Взаимодействие",
    items: [
      "Не игнорируйте вопросы, адресованные вам напрямую",
      "Благодарите за помощь и полезный контент",
      "Сообщайте о нарушениях модераторам, не реагируйте публично",
      "Помогайте новичкам освоиться в сообществе",
    ],
  },
];

export default function Norms() {
  return (
    <PageLayout title="Нормы" subtitle="Раздел 3 из 4" icon="Scale">
      <div className="flex flex-col gap-12">
        {categories.map((cat, ci) => (
          <div key={cat.category}>
            <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground/60 mb-5">
              {cat.category}
            </h2>
            <div className="flex flex-col">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 py-5 border-b border-border last:border-b-0 hover:bg-accent/40 transition-colors px-1 animate-slide-up"
                  style={{ animationDelay: `${(ci * 4 + i) * 50}ms`, animationFillMode: "both", opacity: 0 }}
                >
                  <span className="text-xs font-mono text-muted-foreground/30 mt-0.5 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
