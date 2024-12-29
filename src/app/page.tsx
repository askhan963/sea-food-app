'use client';

import Image from 'next/image';
import Link from 'next/link';

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
            Know about their habitats, behaviors, and how to appreciate their role in the ocean's delicate ecosystem.
          </p>
          <Link href="/about">
            <button className="bg-secondary hover:bg-secondary-dark text-neutral-light px-6 py-2 rounded-md font-medium">
              Learn More
            </button>
          </Link>
          
          {/* Aquarium Fish Thumbnails */}
          <div className="flex space-x-4 mt-6">
            <Image src="/image-4.png" alt="Fish 1" width={60} height={60} className="rounded-md shadow-md" />
            <Image src="/image-5.png" alt="Fish 2" width={60} height={60} className="rounded-md shadow-md" />
            <Image src="/image-6.png" alt="Fish 3" width={60} height={60} className="rounded-md shadow-md" />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 text-neutral-dark">
            <Link href="https://facebook.com"><i className="fab fa-facebook text-xl hover:text-primary"></i></Link>
            <Link href="https://linkedin.com"><i className="fab fa-linkedin text-xl hover:text-primary"></i></Link>
            <Link href="https://instagram.com"><i className="fab fa-instagram text-xl hover:text-primary"></i></Link>
            <Link href="https://youtube.com"><i className="fab fa-youtube text-xl hover:text-primary"></i></Link>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 lg:mt-0">
          <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
            <Image src="/image-1.png" alt="Seahorse" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
            <Image src="/image-2.png" alt="Fish" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
            <Image src="/image-3.png" alt="Turtle" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
