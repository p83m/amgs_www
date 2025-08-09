import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/70 border-b">
      <nav className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2" aria-label="Szkoła Amigos – Strona główna">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span className="font-bold text-lg">Szkoła Amigos</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#zajecia" className="hover:text-primary transition-colors">Zajęcia</a>
          <a href="#o-nas" className="hover:text-primary transition-colors">O nas</a>
          <a href="#nauczyciele" className="hover:text-primary transition-colors">Nauczyciele</a>
          <a href="#opinie" className="hover:text-primary transition-colors">Opinie</a>
          <a href="#aktualnosci" className="hover:text-primary transition-colors">Aktualności</a>
          <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm">
            <a href="#zapisz">Zapisz dziecko</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;