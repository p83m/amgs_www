const Testimonials = () => (
  <section id="opinie" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-center mb-12">Co mówią rodzice</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote:
              "Moja córka uwielbia chodzić na zajęcia hiszpańskiego! Atmosfera jest fantastyczna, a prowadząca naprawdę umie zainteresować dzieci.",
            author: "Mama Zosi, 8 lat",
          },
          {
            quote:
              "Syn wraca z ceramiki zawsze uśmiechnięty i dumny ze swoich prac. To było świetne odkrycie dla naszej rodziny!",
            author: "Papa Kubusia, 9 lat",
          },
          {
            quote:
              "Dzięki zajęciom z czytania moja córka pokochała książki. Teraz sama prosi o nowe historie do przeczytania!",
            author: "Mama Ani, 7 lat",
          },
        ].map((t) => (
          <figure key={t.author} className="space-y-4">
            <blockquote className="italic text-foreground/80">“{t.quote}”</blockquote>
            <figcaption className="text-sm text-muted-foreground">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;