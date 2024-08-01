import React from "react";
import Link from "next/link";
import Image from "next/image";

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to EventFinder</h1>
        <p>Discover and register for amazing events near you!</p>
      </header>

      <main>
        <div className="hero">
          <Image
            src="/hero.svg"
            alt="Event Discovery Illustration"
            width={800}
            height={400}
            priority
          />
        </div>
        <section className="cta">
          <Link href="/login" className="btn">
            Login
          </Link>
          <Link href="/events" className="btn btn-secondary">
            Find Events
          </Link>
        </section>

        <section className="features">
          <h2>Why Choose EventFinder?</h2>
          <ul>
            <li>Easy event discovery</li>
            <li>Simple registration process</li>
            <li>Wide range of events</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 EventFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
