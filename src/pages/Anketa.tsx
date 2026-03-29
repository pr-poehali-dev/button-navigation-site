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
        <div className="flex flex-col items-center text-center py-16 gap-4 animate-fade-in">
          <div className="w-12 h-12 border border-border flex items-center justify-center">
            <Icon name="Check" size={20} className="text-foreground" />
          </div>
          <h2 className="font-semibold text-foreground">Анкета отправлена</h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.
          </p>
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); }}
            className="mt-4 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Отправить ещё раз
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Анкета" subtitle="Раздел 4 из 4" icon="ClipboardList">
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
        Заполните анкету для вступления в сообщество. Все поля обязательны.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Имя / никнейм
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как вас называть"
            className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Возраст
          </label>
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="Полных лет"
            min="13"
            max="100"
            className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Откуда узнали о нас
          </label>
          <input
            type="text"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            placeholder="Социальная сеть, знакомый, поиск..."
            className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Расскажите о себе
          </label>
          <textarea
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            placeholder="Чем занимаетесь, почему хотите вступить в сообщество..."
            rows={4}
            className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div
            onClick={() => setForm({ ...form, rules: !form.rules })}
            className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 transition-colors cursor-pointer ${
              form.rules ? "bg-foreground border-foreground" : "bg-card border-border group-hover:border-foreground"
            }`}
          >
            {form.rules && <Icon name="Check" size={10} className="text-background" />}
          </div>
          <span className="text-sm text-muted-foreground leading-relaxed">
            Я ознакомился с правилами, запретами и нормами сообщества и обязуюсь их соблюдать
          </span>
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-3.5 bg-foreground text-background text-sm font-medium transition-all duration-200 hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed mt-2"
        >
          Отправить анкету
        </button>
      </form>
    </PageLayout>
  );
}
