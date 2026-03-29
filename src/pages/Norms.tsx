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
      <div className="flex flex-col gap-6">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
              {cat.category}
            </h2>
            <div className="flex flex-col gap-px">
              {cat.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3.5 bg-card border border-border hover:bg-accent transition-colors">
                  <span className="text-muted-foreground mt-0.5 text-xs font-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
