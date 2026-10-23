import { useState } from "react";
import type { FormEvent } from "react";
import wavyBg from "../../assets/ticket-bg-pattern.png";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `email` to your newsletter service here
    setEmail("");
  };

  return (
    <section className="relative w-full min-h-100 lg:min-h-156 bg-black overflow-hidden flex items-center justify-center py-16 lg:py-0">
      {/* wavy background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url(${wavyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="font-sans text-white text-center font-normal text-2xl sm:text-4xl lg:text-[47.59px] leading-[1.25] max-w-245">
          Subscribe to our newsletter to be the first to know about our upcoming
          events.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-6 lg:mt-10 w-full max-w-206 flex h-14 sm:h-20 lg:h-28.75"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="flex-1 min-w-0 bg-white text-black font-sans text-base sm:text-xl lg:text-[30px] px-4 sm:px-6 lg:px-7 rounded-l-[11.86px] outline-none placeholder:text-[#E6DBE1]"
          />

          <button
            type="submit"
            className="shrink-0 w-32 sm:w-44 lg:w-61.25 bg-primary-magenta hover:bg-primary-dark-pink transition-colors duration-300 text-white font-sans font-medium text-base sm:text-xl lg:text-[30.41px] rounded-r-[11.86px] cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
