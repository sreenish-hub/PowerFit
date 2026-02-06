import { motion } from "framer-motion"
import logo from "./assets/logo-powerfit.jpg"
import hero from "./assets/hero-red.jpg"
import gym from "./assets/gym-modern.jpg"

const container = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.14, duration: 0.7 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
}

const programs = [
  {
    title: "Strength Architecture",
    desc: "Barbell foundations, progressive overload, and athletic strength built on measurable milestones.",
  },
  {
    title: "Metabolic Cut",
    desc: "High-output conditioning with precise nutrition targets for accelerated fat loss.",
  },
  {
    title: "Athlete Engine",
    desc: "Explosiveness, speed, and endurance combined with on-field movement prep.",
  },
  {
    title: "Hypertrophy Lab",
    desc: "Muscle-building cycles with volume control, recovery mapping, and form audits.",
  },
  {
    title: "Personal Coaching",
    desc: "Weekly 1:1 coaching, performance tracking, and customized training blocks.",
  },
  {
    title: "Combat Conditioning",
    desc: "Fight-ready conditioning, agility, and core power for functional strength.",
  },
]

const coaches = [
  {
    name: "Aarav Menon",
    role: "Head Performance Coach",
    certs: "NASM, Olympic L2",
  },
  {
    name: "Siya Kulkarni",
    role: "Strength & Mobility",
    certs: "CSCS, FRC",
  },
  {
    name: "Rehan Qureshi",
    role: "Body Composition",
    certs: "ISSN, Precision Nutrition",
  },
  {
    name: "Nisha Rao",
    role: "Conditioning & HIIT",
    certs: "ACE, TRX",
  },
]

const testimonials = [
  {
    name: "Karthik R.",
    detail: "Dropped 12kg in 14 weeks",
    quote:
      "Best coaching system I have experienced. Everything is tracked and the results show up fast.",
  },
  {
    name: "Meera S.",
    detail: "Gained 6kg lean mass",
    quote:
      "The program was structured, realistic, and surprisingly fun. Coaches are elite.",
  },
  {
    name: "Varun P.",
    detail: "Hyrox athlete",
    quote:
      "We mapped my race training week by week. Performance jumped within a month.",
  },
]

const plans = [
  {
    name: "Essential",
    price: "INR 1,999",
    desc: "Full gym access, baseline onboarding, and monthly check-ins.",
    perks: ["Gym access", "Body scan", "Monthly check-in"],
  },
  {
    name: "Pro",
    price: "INR 4,999",
    desc: "Coach-built plan, nutrition map, and weekly progress tracking.",
    perks: ["Gym + studio", "Nutrition plan", "Weekly tracking"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "INR 9,999",
    desc: "Private training, recovery suite, and concierge scheduling.",
    perks: ["Private sessions", "Recovery lounge", "Priority booking"],
  },
]

const schedule = [
  { day: "Mon", time: "6:00 AM", className: "Strength Architecture" },
  { day: "Tue", time: "7:30 AM", className: "Metabolic Cut" },
  { day: "Wed", time: "6:30 PM", className: "Athlete Engine" },
  { day: "Thu", time: "7:00 PM", className: "Combat Conditioning" },
  { day: "Fri", time: "6:00 AM", className: "Hypertrophy Lab" },
  { day: "Sat", time: "9:00 AM", className: "Coach-led Mobility" },
]

export default function App() {
  return (
    <div className="font-body overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_15%_-10%,rgba(182,255,0,0.16),transparent),radial-gradient(900px_600px_at_90%_20%,rgba(255,0,80,0.12),transparent)]" />

      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PowerFit logo" className="h-11 w-11 rounded-full glow-ring object-cover" />
            <div className="leading-tight">
              <p className="font-display text-2xl tracking-wide">PowerFit</p>
              <p className="text-xs text-white/60">Elite Performance Club</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-primary transition" href="#programs">Programs</a>
            <a className="hover:text-primary transition" href="#facility">Facility</a>
            <a className="hover:text-primary transition" href="#coaches">Coaches</a>
            <a className="hover:text-primary transition" href="#plans">Plans</a>
            <a className="hover:text-primary transition" href="#contact">Contact</a>
          </nav>
          <button className="bg-primary text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Join Now
          </button>
        </div>
      </header>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_75%_20%,rgba(182,255,0,0.18),transparent)]" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 py-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="text-white/70 tracking-[0.4em] uppercase text-xs" variants={item}>
            High Performance Training
          </motion.p>
          <motion.h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none mt-4" variants={item}>
            UNLEASH YOUR
            <span className="text-primary block">POWER</span>
          </motion.h1>
          <motion.p className="mt-6 text-white/70 max-w-xl text-base sm:text-lg" variants={item}>
            Private coaching, world-class equipment, and an atmosphere engineered for serious transformation.
          </motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" variants={item}>
            <button className="bg-primary text-black px-8 py-4 font-bold rounded-xl hover:scale-105 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Book a Tour
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-xl hover:border-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Free Trial
            </button>
          </motion.div>

          <motion.div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6" variants={item}>
            {[
              { label: "Members", value: "2.8K+" },
              { label: "Coaches", value: "32" },
              { label: "Studios", value: "6" },
              { label: "Success Rate", value: "94%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="programs">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 className="font-display text-4xl sm:text-5xl" variants={item}>
            Signature Programs
          </motion.h2>
          <motion.p className="text-white/60 mt-4 max-w-2xl" variants={item}>
            Precision-built paths for strength, aesthetics, and performance. Everything is customized and data-driven.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {programs.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card/80 border border-white/10 rounded-2xl p-8 hover:border-primary transition soft-shadow"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-white/60 mt-3">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black" id="facility">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.p className="text-xs tracking-[0.4em] uppercase text-white/60" variants={item}>
              Facility
            </motion.p>
            <motion.h2 className="font-display text-4xl sm:text-5xl mt-4" variants={item}>
              Designed For Elite Focus
            </motion.h2>
            <motion.p className="text-white/70 mt-6" variants={item}>
              Premium lighting, dedicated studios, and a curated flow that keeps energy high and distractions low.
            </motion.p>
            <motion.ul className="mt-8 grid gap-4 text-sm text-white/70" variants={item}>
              <li>Laser-cut strength zones</li>
              <li>Private recovery lounge</li>
              <li>Smart metrics and tracking</li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl" />
            <img src={gym} alt="PowerFit gym interior" className="relative rounded-3xl soft-shadow" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="coaches">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 className="font-display text-4xl sm:text-5xl" variants={item}>
            Meet The Coaches
          </motion.h2>
          <motion.p className="text-white/60 mt-4" variants={item}>
            Specialists in strength, conditioning, and elite performance.
          </motion.p>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <motion.div
              key={coach.name}
              initial="hidden"
              whileInView="show"
              variants={item}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-card/70 p-6"
            >
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
                {coach.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{coach.name}</h3>
              <p className="text-sm text-white/60">{coach.role}</p>
              <p className="text-xs text-white/50 mt-2">{coach.certs}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black" id="schedule">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 className="font-display text-4xl sm:text-5xl" initial="hidden" whileInView="show" variants={fadeIn} viewport={{ once: true }}>
            Weekly Studio Schedule
          </motion.h2>
          <p className="text-white/60 mt-4">Limited batch classes for peak performance.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {schedule.map((slot) => (
              <motion.div
                key={`${slot.day}-${slot.className}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-card/70 rounded-2xl p-6"
              >
                <p className="text-sm text-white/60">{slot.day}</p>
                <p className="text-2xl font-semibold mt-2">{slot.time}</p>
                <p className="text-white/70 mt-3">{slot.className}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="testimonials">
        <motion.h2 className="font-display text-4xl sm:text-5xl text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Transformation Stories
        </motion.h2>
        <p className="text-white/60 mt-4 text-center">Real people. Real results.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((story) => (
            <motion.div
              key={story.name}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-card/70 p-8"
            >
              <p className="text-sm text-primary uppercase tracking-wide">{story.detail}</p>
              <p className="mt-4 text-white/70">"{story.quote}"</p>
              <p className="mt-6 text-sm text-white/50">{story.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black" id="plans">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 className="font-display text-4xl sm:text-5xl text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Membership Plans
          </motion.h2>
          <p className="text-white/60 mt-4 text-center">Flexible plans engineered for serious results.</p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 border ${
                  plan.highlight
                    ? "bg-primary text-black border-primary"
                    : "bg-card/80 text-white border-white/10"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-4xl font-bold mt-6">{plan.price}</p>
                <p className={`mt-3 ${plan.highlight ? "text-black/70" : "text-white/60"}`}>
                  {plan.desc}
                </p>
                <ul className={`mt-6 text-sm grid gap-2 ${plan.highlight ? "text-black/80" : "text-white/70"}`}>
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 rounded-xl font-bold transition ${plan.highlight ? "bg-black text-white" : "bg-primary text-black"}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl sm:text-5xl">Ready to Start?</h2>
            <p className="text-white/70 mt-4">
              Book a private tour and get a personalized performance audit with our head coach.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-black px-7 py-3 rounded-xl font-bold">Schedule Visit</button>
              <button className="border border-white/20 px-7 py-3 rounded-xl">Call Us</button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/60">
              <div>
                <p className="text-white/50">Phone</p>
                <p className="mt-2 text-white">+91 90000 00000</p>
              </div>
              <div>
                <p className="text-white/50">Email</p>
                <p className="mt-2 text-white">hello@powerfit.com</p>
              </div>
              <div>
                <p className="text-white/50">Location</p>
                <p className="mt-2 text-white">Banjara Hills, Hyderabad</p>
              </div>
              <div>
                <p className="text-white/50">Hours</p>
                <p className="mt-2 text-white">Mon - Sun, 5:00 AM - 11:00 PM</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-card/80 border border-white/10 rounded-3xl p-8">
              <p className="text-sm text-white/60">Membership Inquiry</p>
              <div className="mt-6 grid gap-4">
                <input className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Full name" />
                <input className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Email" />
                <input className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Phone" />
                <select className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary">
                  <option>Preferred Program</option>
                  <option>Strength Architecture</option>
                  <option>Metabolic Cut</option>
                  <option>Athlete Engine</option>
                  <option>Hypertrophy Lab</option>
                </select>
                <button className="bg-primary text-black py-3 rounded-xl font-bold">Request Callback</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-4">(c) 2026 PowerFit Gym. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Contact Us</a>
            <a href="#" className="hover:text-primary transition">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
