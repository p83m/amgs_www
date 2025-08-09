import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teachers = [
  {
    name: "Zuza",
    roles: "Hiszpański & Makrama",
    bio: "Bardzo fajna, z 8‑letnim doświadczeniem w pracy z dziećmi. Uwielbia łączyć naukę z zabawą.",
  },
  {
    name: "Nie Zuza",
    roles: "Czytanie & Ceramika",
    bio: "Pasjonatka rękodzieła. Specjalizuje się w rozwijaniu kreatywności u najmłodszych.",
  },
  {
    name: "Fela",
    roles: "Fajny piesek",
    bio: "Biega, szczeka i gryzie skarpetki – poprawia humor wszystkim kursantom!",
  },
];

const Teachers = () => (
  <section id="nauczyciele" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-center mb-12">Poznaj naszych nauczycieli</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <Card key={t.name} className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
            <CardHeader>
              <CardTitle className="text-xl">{t.name}</CardTitle>
              <CardDescription className="font-medium text-foreground/80">{t.roles}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Teachers;