"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    link: "/courses/understanding-music-theory",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    link: "/courses/the-art-of-songwriting",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "/courses/mastering-your-instrument",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    link: "/courses/music-production-essentials",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "/courses/live-performance-techniques",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "/courses/digital-music-marketing",
  },
];

const UpcomingWebinars = () => {
  return (
    <section className="bg-gray-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 sm:text-sm">
            Featured Webinars
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Enhance Your Musical Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore our expert-led webinars designed to improve your musical
            skills, creativity, and performance—from beginners to professionals.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <HoverEffect items={featuredWebinars} />
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href={"/webinar"}
            className="inline-flex items-center justify-center rounded-full border border-teal-500 px-6 py-3 text-sm font-medium text-teal-400 transition-all duration-300 hover:scale-105 hover:bg-teal-500 hover:text-white sm:px-8 sm:text-base"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
