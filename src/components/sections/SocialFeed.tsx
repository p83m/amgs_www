import { Instagram, Facebook, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/",
    text: "Kolorowa makrama na dzisiejszych zajęciach – dzieci stworzyły piękne bransoletki!",
    date: "Wczoraj",
  },
  {
    id: 2,
    platform: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/",
    text: "Nowa grupa początkujących z hiszpańskiego od marca. Zapisy otwarte!",
    date: "3 dni temu",
  },
  {
    id: 3,
    platform: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/",
    text: "Czytamy wspólnie ulubione bajki – jakie tytuły polecacie?",
    date: "Tydzień temu",
  },
];

const SocialFeed = () => (
  <section id="aktualnosci" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-center mb-12">Aktualności</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => {
          const Icon = p.icon;
          return (
            <Card key={p.id}>
              <CardHeader className="flex-row items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <CardTitle className="text-lg">{p.platform}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{p.text}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{p.date}</span>
                  <a className="inline-flex items-center gap-1 text-primary hover:underline" href={p.url} target="_blank" rel="noreferrer">
                    Zobacz <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialFeed;