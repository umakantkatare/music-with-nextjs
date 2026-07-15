"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import CourseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
// import { IconAppWindow } from "@tabler/icons-react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const data = CourseData.courses.filter((course: Course) => course.isFeatured);
//   console.log("image", data);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-teal-400">
            Featured Courses
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Learn From the Best
          </h2>

          <p className="mt-4 text-gray-400">
            Master in-demand skills with expertly crafted courses designed to
            accelerate your career.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((course: Course) => (
            <BackgroundGradient
              key={course.id}
              className="group overflow-hidden rounded-3xl bg-zinc-900/70 backdrop-blur border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <h3 className="text-2xl font-semibold text-white line-clamp-2">
                  {course.title}
                </h3>

                <p className="mt-3 flex-grow text-gray-400 line-clamp-3">
                  {course.description}
                </p>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-teal-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30"
                >
                  Learn More →
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/courses"
            className="rounded-full border border-teal-500 px-8 py-3 font-medium text-teal-400 transition-all duration-300 hover:bg-teal-500 hover:text-white"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
