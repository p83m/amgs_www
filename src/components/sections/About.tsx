import { CheckCircle2, Users, ShieldCheck, Wand2 } from "lucide-react";

const About = () => {
  return (
    <section id="o-nas" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="mb-6">O naszej szkole</h2>
          <p className="text-muted-foreground leading-relaxed">
            Szkoła kreatywno‑językowa Amigos to miejsce, gdzie dzieci rozwijają swoje
            talenty w przyjaznej, rodzinnej atmosferze. Łączymy naukę języka obcego z
            kreatywnymi warsztatami, tworząc przestrzeń do nauki i zabawy.
          </p>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Wand2, text: "Kreatywność i wyobraźnia" },
            { icon: CheckCircle2, text: "Rozwój przez zabawę" },
            { icon: Users, text: "Małe grupy i indywidualne podejście" },
            { icon: ShieldCheck, text: "Przyjazna i bezpieczna atmosfera" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                <Icon className="h-4 w-4 text-primary" />
              </span>
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;