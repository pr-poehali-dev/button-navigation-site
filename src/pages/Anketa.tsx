import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Icon from "@/components/ui/icon";

const initialForm = {
  name: "",
  age: "",
  about: "",
  rules: false,
  source: "",
};

export default function Anketa() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isValid = form.name.trim() && form.age.trim() && form.about.trim() && form.rules;

  if (submitted) {
    return (
      <PageLayout title="Анкета" subtitle="Раздел 4 из 4" icon="ClipboardList">
        <div className="flex flex-col items-start py-12 gap-5 animate-fade-in">
          <div className="text-4xl">🎉</div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Отлично, анкета отправлена!</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Мы скоро её посмотрим и напишем тебе. Обычно это занимает немного времени.
            </p>
          </div>
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); }}
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Заполнить ещё раз
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Анкета" subtitle="Раздел 4 из 4" icon="ClipboardList">
      <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
        Пара вопросов — и мы познакомимся. Всё просто 😊
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">
            Как тебя называть
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Имя или никнейм"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">
            Сколько тебе лет
          </label>
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="Полных лет"
            min="13"
            max="100"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">
            Откуда узнал о нас
          </label>
          <input
            type="text"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            placeholder="Соцсеть, друг, случайно нашёл..."
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">
            Немного о себе
          </label>
          <textarea
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            placeholder="Чем занимаешься, почему хочешь к нам..."
            rows={4}
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors resize-none"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer group mt-1">
          <div
            onClick={() => setForm({ ...form, rules: !form.rules })}
            className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 cursor-pointer rounded-sm ${
              form.rules
                ? "bg-foreground border-foreground"
                : "bg-transparent border-border group-hover:border-foreground/40"
            }`}
          >
            {form.rules && <Icon name="Check" size={11} className="text-background" />}
          </div>
          <span className="text-sm text-muted-foreground leading-relaxed">
            Я прочитал правила и обязуюсь их соблюдать — честно 🤝
          </span>
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-4 bg-foreground text-background text-sm font-semibold transition-all duration-200 hover:opacity-85 disabled:opacity-25 disabled:cursor-not-allowed mt-2"
        >
          Отправить анкету
        </button>
      </form>
    </PageLayout>
  );
}
