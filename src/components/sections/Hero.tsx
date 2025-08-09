import heroImage from "@/assets/hero-amigos.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spot-x", `${x}px`);
    e.currentTarget.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <section id="hero" onMouseMove={onMouseMove} className="relative overflow-hidden">
      {/* Spotlight effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), hsl(var(--accent) / 0.12), transparent 60%)",
        }}
      />

      <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="relative z-10 space-y-6">
          <h1 className="leading-tight">
            <span className="text-gradient">Kreatywna nauka</span> dla ciekawych
            świata dzieci!
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Hiszpański, makrama, ceramika i czytanie w przyjaznej atmosferze małych
            grup. Uczymy przez zabawę, rozwijając odwagę i wyobraźnię.
          </p>
          <div className="flex gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#zapisz">Zapisz dziecko na zajęcia</a>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <a href="#zajecia">Poznaj zajęcia</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <img
            src={heroImage}
            alt="Dzieci uczące się i tworzące – ilustracja dla Szkoły Amigos"
            className="w-full h-auto rounded-xl shadow-[var(--shadow-elevated)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;