import { Mail, Phone, MapPin } from "lucide-react";

const ContactMap = () => (
  <section id="kontakt" className="py-16 md:py-24">
    <div className="container space-y-8">
      <div className="w-full h-80 rounded-xl overflow-hidden border">
        <iframe
          title="Mapa – Biłgoraj"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Bi%C5%82goraj&output=embed"
          className="w-full h-full"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Szkoła Amigos</h3>
          <p className="text-muted-foreground">Kreatywna nauka dla dzieci w Biłgoraju</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Szybkie linki</h3>
          <ul className="space-y-1 text-primary">
            <li><a href="#zajecia" className="hover:underline">Nasze zajęcia</a></li>
            <li><a href="#o-nas" className="hover:underline">O nas</a></li>
            <li><a href="#zapisz" className="hover:underline">Kontakt</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold mb-2">Kontakt</h3>
          <p className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> kontakt@amigos-szkola.pl</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> +48 123 456 789</p>
          <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> Biłgoraj, ul. Przykładowa 123</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMap;