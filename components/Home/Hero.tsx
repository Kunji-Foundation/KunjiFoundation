import Link from "next/link";
import Image from "next/image";
import { HomeHeroBanner } from "../../constants/images";

export default function Hero() {
  return (
    <section className="hero-section py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="home-hero-section flex">
          <div className="hero-section-img pr-16">
            <Image
              src={HomeHeroBanner}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="hero-section-content max-w-2xl self-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              For every student, every classroom. Real results.
            </h1>
            <p className="mb-8">
              We’re a nonprofit with the mission to provide a free, world-class
              education for anyone, anywhere.
            </p>
            <div className="hero-section-cta">
              <Link
                href="/"
                className="mr-8 rounded border-4 border-primary bg-primary px-5 py-2.5 text-white"
              >
                Start Learning
              </Link>
              <Link
                href="/"
                className="mr-8 rounded border-4 border-primary px-5 py-2.5 hover:border-secondary hover:bg-secondary"
              >
                Find a Mentor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
