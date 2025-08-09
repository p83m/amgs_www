import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  childName: z.string().min(2, "Podaj imię i nazwisko dziecka"),
  age: z.string().min(1, "Wybierz wiek"),
  course: z.string().min(1, "Wybierz zajęcia"),
  parentName: z.string().min(2, "Podaj imię i nazwisko rodzica"),
  phone: z.string().min(6, "Podaj telefon"),
  email: z.string().email("Podaj poprawny email"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const EnrollmentForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Zgłoszenie – Szkoła Amigos");
    const body = encodeURIComponent(
      `Dziecko: ${data.childName}\nWiek: ${data.age}\nZajęcia: ${data.course}\nRodzic: ${data.parentName}\nTelefon: ${data.phone}\nEmail: ${data.email}\n\nDodatkowe informacje:\n${data.message ?? "-"}`
    );
    const mailto = `mailto:kontakt@amigos-szkola.pl?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    toast({ title: "Dziękujemy!", description: "Otworzyliśmy wiadomość email z danymi zgłoszenia." });
    reset();
  };

  return (
    <section id="zapisz" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center mb-8">Zapisz dziecko na zajęcia</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-gradient rounded-xl p-6 md:p-8">
          <div className="grid gap-5">
            <div>
              <Label htmlFor="childName">Imię i nazwisko dziecka</Label>
              <Input id="childName" {...register("childName")} aria-invalid={!!errors.childName} />
              {errors.childName && (<p className="text-sm text-destructive mt-1">{errors.childName.message}</p>)}
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="age">Wiek dziecka</Label>
                <Input id="age" placeholder="np. 7" {...register("age")} aria-invalid={!!errors.age} />
                {errors.age && (<p className="text-sm text-destructive mt-1">{errors.age.message}</p>)}
              </div>
              <div>
                <Label htmlFor="course">Wybierz zajęcia</Label>
                <Input id="course" placeholder="Hiszpański / Makrama / Ceramika / Czytanie" {...register("course")} aria-invalid={!!errors.course} />
                {errors.course && (<p className="text-sm text-destructive mt-1">{errors.course.message}</p>)}
              </div>
            </div>
            <div>
              <Label htmlFor="parentName">Imię i nazwisko rodzica</Label>
              <Input id="parentName" {...register("parentName")} aria-invalid={!!errors.parentName} />
              {errors.parentName && (<p className="text-sm text-destructive mt-1">{errors.parentName.message}</p>)}
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
                {errors.phone && (<p className="text-sm text-destructive mt-1">{errors.phone.message}</p>)}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                {errors.email && (<p className="text-sm text-destructive mt-1">{errors.email.message}</p>)}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Dodatkowe informacje</Label>
              <Textarea id="message" rows={4} placeholder="Napisz coś o swoim dziecku, jego zainteresowaniach..." {...register("message")} />
            </div>
            <div>
              <Button type="submit" size="lg" variant="hero" disabled={isSubmitting}>
                Wyślij zgłoszenie
              </Button>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Wysyłając formularz, wyrażasz zgodę na przetwarzanie Twoich danych osobowych w celu kontaktu i realizacji zapisu na zajęcia.
          </p>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;