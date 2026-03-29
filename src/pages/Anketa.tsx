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
        <div className="flex flex-col items-start py-16 gap-6 animate-fade-in">
          <div className="w-14 h-14 border border-border flex items-center justify-center">
            <Icon name="Check" size={22} className="text-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-3">Анкета отправлена</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.
            </p>
          </div>
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); }}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Отправить ещё раз
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Анкета" subtitle="Раздел 4 из 4" icon="ClipboardList">
      <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
        Заполните анкету для вступления в сообщество. Все поля обязательны.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Имя / никнейм
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как вас называть"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Возраст
          </label>
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="Полных лет"
            min="13"
            max="100"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Откуда узнали о нас
          </label>
          <input
            type="text"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            placeholder="Социальная сеть, знакомый, поиск..."
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Расскажите о себе
          </label>
          <textarea
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            placeholder="Чем занимаетесь, почему хотите вступить в сообщество..."
            rows={4}
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none"
          />
        </div>

        <label className="flex items-start gap-4 cursor-pointer group mt-2">
          <div
            onClick={() => setForm({ ...form, rules: !form.rules })}
            className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 cursor-pointer ${
              form.rules
                ? "bg-foreground border-foreground"
                : "bg-transparent border-border group-hover:border-foreground/60"
            }`}
          >
            {form.rules && <Icon name="Check" size={11} className="text-background" />}
          </div>
          <span className="text-sm text-muted-foreground leading-relaxed">
            Я ознакомился с правилами, запретами и нормами сообщества и обязуюсь их соблюдать
          </span>
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-4 bg-foreground text-background text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-85 disabled:opacity-25 disabled:cursor-not-allowed mt-4"
        >
          Отправить анкету
        </button>
      </form>
    </PageLayout>
  );
}
