import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Classes from "@/components/sections/Classes";
import About from "@/components/sections/About";
import Teachers from "@/components/sections/Teachers";
import Testimonials from "@/components/sections/Testimonials";
import SocialFeed from "@/components/sections/SocialFeed";
import EnrollmentForm from "@/components/sections/EnrollmentForm";
import ContactMap from "@/components/sections/ContactMap";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div>
      {/* SEO: single H1 is inside Hero */}
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <About />
        <Teachers />
        <Testimonials />
        <SocialFeed />
        <EnrollmentForm />
        <ContactMap />
      </main>
      <Footer />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "Szkoła Amigos",
            description:
              "Szkoła kreatywno‑językowa dla dzieci w Biłgoraju: hiszpański, makrama, ceramika i czytanie.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ul. Przykładowa 123",
              addressLocality: "Biłgoraj",
              addressCountry: "PL",
            },
            url: "/",
            telephone: "+48 123 456 789",
          }),
        }}
      />
    </div>
  );
};

export default Index;