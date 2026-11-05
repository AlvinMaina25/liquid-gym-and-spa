import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-gym.jpg";
import spa from "@/assets/spa.jpg";
import hike from "@/assets/hike.jpg";

const PHONE = "0759103994";
const WA = "https://wa.me/254759103994";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liquid Cash Gym & Spa | Thika Section 2" },
      { name: "description", content: "Gym, sauna, steam bath and community fitness events in Thika Section 2, behind Mathais Supermarket. Call 0759103994." },
      { property: "og:title", content: "Liquid Cash Gym & Spa, Thika" },
      { property: "og:description", content: "Your oasis of serenity in every visit — gym workouts, spa & wellness, and outdoor challenges." },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Gym Workouts", text: "Modern fitness machines and weight training areas, with high-energy live DJ workouts and pedal-to-the-beat indoor cycling.", img: hero },
  { title: "Spa & Wellness", text: "Recover and unwind in our sauna and steam bath — the perfect finish to every session.", img: spa },
  { title: "Outdoor & Community", text: "Local fitness challenges and group adventures, including regional hikes like Elephant Hills.", img: hike },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 border-b border-secondary-foreground/10 bg-secondary/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-secondary-foreground">
          <a href="#" className="font-display text-xl sm:text-2xl font-semibold tracking-wide">
            Liquid Cash <span className="text-gold">Gym & Spa</span>
          </a>
          <a href={`tel:${PHONE}`} className="hidden border border-gold/60 px-5 py-2 text-sm tracking-widest uppercase hover:bg-gold hover:text-accent-foreground transition sm:block">
            Call {PHONE}
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end pt-32 overflow-hidden bg-secondary">
        <img src={hero} alt="Liquid Cash Gym interior" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-20 text-secondary-foreground">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-secondary/70 px-4 py-2 text-xs tracking-[0.25em] uppercase text-gold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Thika · Section 2 · Behind Mathais Supermarket
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Your oasis of serenity in every visit.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-secondary-foreground/80">
            Train hard, recover well. A full gym, sauna and steam bath — all under one roof.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noreferrer" className="bg-gold px-8 py-4 text-sm font-bold tracking-widest uppercase text-accent-foreground hover:opacity-90 transition">
              Book a visit
            </a>
            <a href="#services" className="border border-secondary-foreground/40 px-8 py-4 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition">
              Our services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm tracking-[0.3em] uppercase text-primary">What we offer</p>
        <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Strength. Stillness. Community.</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 text-center sm:grid-cols-3">
          {[["717+", "Moments shared"], ["1,100+", "Community members"], ["Sauna & Steam", "After every session"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-semibold text-gold">{n}</div>
              <div className="mt-2 text-sm tracking-widest uppercase opacity-80">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-primary">Visit us</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Find us in Thika</h2>
          <p className="mt-6 text-lg text-muted-foreground">Section 2, behind Mathais Supermarket, Thika.</p>
          <div className="mt-8 space-y-3 text-lg">
            <p>📞 <a href={`tel:${PHONE}`} className="font-bold hover:text-primary">{PHONE}</a></p>
            <p>💬 <a href={WA} target="_blank" rel="noreferrer" className="font-bold hover:text-primary">Chat on WhatsApp</a></p>
          </div>
          <div className="mt-8 flex gap-6 text-sm tracking-widest uppercase">
            <a href="https://www.instagram.com/liquidcashgymthika" target="_blank" rel="noreferrer" className="border-b border-primary pb-1 hover:text-primary">Instagram</a>
            <a href="https://www.tiktok.com/@liquidcashgymthika" target="_blank" rel="noreferrer" className="border-b border-primary pb-1 hover:text-primary">TikTok</a>
          </div>
        </div>
        <iframe
          title="Map to Liquid Cash Gym & Spa"
          src="https://www.google.com/maps?q=Mathais+Supermarket+Section+2+Thika&output=embed"
          className="h-80 w-full border border-border md:h-full"
          loading="lazy"
        />
      </section>

      <footer className="bg-secondary py-8 text-center text-sm text-secondary-foreground/70">
        © {new Date().getFullYear()} Liquid Cash Gym & Spa · Thika
      </footer>
    </main>
  );
}
