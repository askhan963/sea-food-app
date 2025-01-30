"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 lg:p-16 font-sans">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Discover the Wonders of Colorful Fish in the Ocean
          </h1>
          <p className="text-neutral-dark text-md md:text-lg">
            Know about their habitats, behaviors, and how to appreciate their
            role in the ocean&apos;s delicate ecosystem.
          </p>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary-dark text-neutral-light"
          >
            <Link href="/about">Learn More</Link>
          </Button>

          {/* Aquarium Fish Thumbnails */}
          <div className="flex space-x-4 mt-6">
            {["/image-4.png", "/image-5.png", "/image-6.png"].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Fish ${index + 1}`}
                  width={60}
                  height={60}
                  className="rounded-md shadow-md"
                />
              )
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 text-neutral-dark">
            <Link href="https://facebook.com">
              <Facebook className="w-6 h-6 hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com">
              <Linkedin className="w-6 h-6 hover:text-primary" />
            </Link>
            <Link href="https://instagram.com">
              <Instagram className="w-6 h-6 hover:text-primary" />
            </Link>
            <Link href="https://youtube.com">
              <Youtube className="w-6 h-6 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 lg:mt-0">
          {["/image-1.png", "/image-2.png", "/image-3.png"].map(
            (src, index) => (
              <AspectRatio
                key={index}
                ratio={1 / 1.5}
                className="rounded-md overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`Ocean Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </AspectRatio>
            )
          )}
        </div>
      </div>
    </div>
  );
}
