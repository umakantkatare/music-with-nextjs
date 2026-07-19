"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Image from "next/image";

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

const page = () => {
  return (
    <main className="min-h-screen bg-black pt-35 pb-20 mt-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 sm:text-sm">
            Explore Courses
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            All Courses(
            <span className="font-semibold text-teal-400">
              {courseData.courses.length}
            </span>
            )
          </h1>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Browse our collection of expertly crafted music courses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {courseData.courses.map((course: Course) => (
            <CardContainer key={course.id} className="inter-var h-full">
              <CardBody className="group/card flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-teal-400/40 hover:shadow-2xl hover:shadow-teal-500/10">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {course.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-3 text-sm leading-6 text-gray-400"
                >
                  {course.description}
                </CardItem>

                <CardItem translateZ="100" className="mt-6">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={1000}
                    height={1000}
                    className="h-56 w-full rounded-xl object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                </CardItem>

                <div className="mt-auto flex items-center justify-between pt-8">
                  <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-teal-400 hover:text-teal-400">
                    Preview →
                  </button>

                  <button className="rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-600">
                    Enroll Now
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
