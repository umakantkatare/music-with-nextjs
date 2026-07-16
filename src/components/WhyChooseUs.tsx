"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-xl font-bold">
        Music Journey
      </div>
    ),
  },
  {
    title: "Personalized Learning Experience",
    description:
      "Learn at your own pace with expert guidance and customized lessons designed for every skill level.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl font-bold">
        Personalized Learning
      </div>
    ),
  },
  {
    title: "Expert Music Instructors",
    description:
      "Get trained by experienced musicians who help you master instruments and music theory.",
    content: (
      <div className="relative h-full w-full">
        <Image
          src="/images/courseImages/obbilder-electric-guitar-1736291_1920.jpg"
          alt="Music Class"
          fill
          className="object-cover h-full w-full"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-xl font-bold">
        Live Feedback
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated with the latest music education trends.",
    content: (
      <div className="relative h-full w-full">
        <Image
          src="/images/courseImages/wal_172619-piano-5353974_1920.jpg"
          alt="Curriculum"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "Explore an extensive library of courses and resources to keep improving your musical skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xl font-bold">
        Limitless Learning
      </div>
    ),
  },
];
export function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
