import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, BookOpen, Shapes, Languages } from "lucide-react";

const items = [
  {
    title: "Hiszpański",
    Icon: Languages,
    desc: "Nauka poprzez zabawę, gry językowe i piosenki w radosnej atmosferze.",
    gradient: "from-primary to-accent",
  },
  {
    title: "Makrama",
    Icon: Shapes,
    desc: "Tworzenie pięknych dekoracji własnymi rękami – cierpliwość i koncentracja.",
    gradient: "from-accent to-primary",
  },
  {
    title: "Ceramika",
    Icon: Sparkles,
    desc: "Praca z gliną i malowanie – dzieci tworzą unikalne przedmioty i rozwijają wyobraźnię.",
    gradient: "from-primary to-accent",
  },
  {
    title: "Czytanie",
    Icon: BookOpen,
    desc: "Rozwój umiejętności czytania i interpretacji – wspólne odkrywanie świata książek.",
    gradient: "from-accent to-primary",
  },
];

const Classes = () => {
  return (
    <section id="zajecia" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center mb-12">Nasze zajęcia</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, Icon, desc, gradient }) => (
            <div key={title} className={`p-[1px] rounded-xl bg-gradient-to-r ${gradient}`}>
              <Card className="h-full rounded-[calc(var(--radius)+6px)]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                      <Icon className="text-primary" />
                    </span>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{desc}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;