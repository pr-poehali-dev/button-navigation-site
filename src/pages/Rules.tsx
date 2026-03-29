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
      <div className="flex flex-col gap-px border border-border">
        {rules.map((rule) => (
          <div key={rule.num} className="flex gap-6 px-6 py-5 bg-card border-b border-border last:border-b-0 hover:bg-accent transition-colors">
            <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0 w-6">
              {rule.num}
            </span>
            <div>
              <h3 className="font-medium text-sm text-foreground mb-1">
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
