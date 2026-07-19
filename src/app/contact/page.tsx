"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React, { useState, SubmitEvent } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-28 pb-20">
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 sm:text-sm">
                Contact Us
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's Create
                <span className="block text-teal-400">
                  Beautiful Music Together
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
                Have questions about our music courses, workshops, or upcoming
                events? We'd love to hear from you. Fill out the form and our
                team will get back to you as soon as possible.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300 lg:justify-start">
                <div>📍 New Delhi, India</div>
                <div>✉ info@musicschool.com</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <form  onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    Your Message
                  </label>

                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-teal-600 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default page;
