const Footer = () => (
  <footer className="border-t py-8">
    <div className="container text-sm text-muted-foreground flex items-center justify-between flex-col md:flex-row gap-3">
      <p>© {new Date().getFullYear()} Szkoła Amigos. Wszystkie prawa zastrzeżone.</p>
      <nav className="flex items-center gap-4">
        <a href="#aktualnosci" className="hover:text-primary">Aktualności</a>
        <a href="#zapisz" className="hover:text-primary">Zapisz dziecko</a>
      </nav>
    </div>
  </footer>
);

export default Footer;