import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="w-full scroll-smooth">

      {/* TOP NAV */}
      <nav className="fixed top-0 w-full z-50">
        <div className="container flex justify-end items-center py-6">
          <a
            href="#features"
            className="flex items-center gap-2 text-lg font-medium hover:text-blue-400"
          >
            ☰ Try the app
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="section flex items-center justify-center text-center">
        <div className="container">
          <h1 className="text-[96px] leading-none font-semibold mb-6">
            STUDY<br />PLANNER
          </h1>

          <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-16">
            A calm, visual study system to organise exams, plan your time,
            and stay focused without burnout.
          </p>

          {/* FEATURE LINKS */}
          <div className="flex justify-center gap-10 text-lg">
            <a href="#exams" className="hover:text-blue-400">
              Exams
            </a>
            <a href="#planning" className="hover:text-blue-400">
              Planning
            </a>
            <a href="#focus" className="hover:text-blue-400">
              Focus
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div id="features">

        {/* EXAMS */}
        <Feature
          id="exams"
          title="Track every exam clearly"
          text="See all your modules, exam dates, and countdowns in one simple view."
        >
          <Phone>
            <Item>Maths — 12 days</Item>
            <Item>Physics — 18 days</Item>
            <Item>CS — 25 days</Item>
          </Phone>
        </Feature>

        {/* PLANNING */}
        <Feature
          id="planning"
          reverse
          title="Plan your time visually"
          text="Understand your week before it overwhelms you."
        >
          <Phone>
            <Item>Mon · Maths · 2h</Item>
            <Item>Wed · CS · 3h</Item>
            <Item>Fri · Physics · 1h</Item>
          </Phone>
        </Feature>

        {/* FOCUS */}
        <Feature
          id="focus"
          title="Focus without burning out"
          text="Short, intentional sessions designed for consistency."
        >
          <Phone center>
            <span className="text-6xl font-semibold text-blue-400">25:00</span>
          </Phone>
        </Feature>

      </div>

      {/* FINAL CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="text-5xl font-semibold mb-8">
            Ready to try it for real?
          </h2>
          <p className="text-xl text-gray-300 mb-14">
            Start using your personal study planner today.
          </p>
          <Link
            to="/app"
            className="px-14 py-5 rounded-full bg-blue-500 text-lg font-medium hover:bg-blue-400"
          >
            Open the app
          </Link>
        </div>
      </section>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Feature({ id, title, text, reverse, children }) {
  return (
    <section id={id} className="section">
      <div
        className={`container flex items-center gap-32 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="max-w-xl">
          <h3 className="text-4xl font-semibold mb-6">{title}</h3>
          <p className="text-xl text-gray-300">{text}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function Phone({ children, center }) {
  return (
    <div
      className={`glass w-[360px] h-[680px] p-6 flex flex-col gap-4 ${
        center ? "items-center justify-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Item({ children }) {
  return <div className="glass p-4 text-lg">{children}</div>;
}
