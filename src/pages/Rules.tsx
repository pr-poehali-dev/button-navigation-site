import PageLayout from "@/components/PageLayout";

const rules = [
  {
    num: "01",
    title: "Уважение к участникам",
    text: "Общайтесь вежливо и корректно. Не допускайте оскорблений, унижений и грубости в адрес других участников, вне зависимости от ситуации.",
  },
  {
    num: "02",
    title: "Соответствие тематике",
    text: "Публикуйте материалы, соответствующие тематике сообщества. Офтопик, спам и нерелевантный контент удаляются без предупреждения.",
  },
  {
    num: "03",
    title: "Достоверность информации",
    text: "Проверяйте информацию перед публикацией. Распространение заведомо ложных сведений является нарушением правил сообщества.",
  },
  {
    num: "04",
    title: "Авторские права",
    text: "При использовании чужих материалов указывайте источник. Нарушение авторских прав влечёт немедленное удаление контента.",
  },
  {
    num: "05",
    title: "Конфиденциальность",
    text: "Не публикуйте персональные данные других людей без их явного согласия. Уважайте приватность участников сообщества.",
  },
  {
    num: "06",
    title: "Решение конфликтов",
    text: "При возникновении разногласий обращайтесь к модераторам. Самостоятельное выяснение отношений в публичном пространстве не приветствуется.",
  },
];

export default function Rules() {
  return (
    <PageLayout title="Правила" subtitle="Раздел 1 из 4" icon="BookOpen">
      <div className="flex flex-col">
        {rules.map((rule, i) => (
          <div
            key={rule.num}
            className="group grid grid-cols-[2rem_1fr] gap-6 py-8 border-b border-border last:border-b-0 hover:bg-accent/40 transition-colors px-1 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", opacity: 0 }}
          >
            <span className="text-xs font-mono text-muted-foreground/40 pt-1">
              {rule.num}
            </span>
            <div>
              <h3 className="font-semibold text-base text-foreground mb-2 tracking-tight">
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
