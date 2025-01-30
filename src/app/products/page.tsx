"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const products = [
  {
    name: "Salmon",
    image: "/image-1.png",
    description: "Fresh wild-caught salmon.",
  },
  {
    name: "Lobster",
    image: "/image-2.png",
    description: "Premium Atlantic lobsters.",
  },
  {
    name: "Shrimp",
    image: "/image-3.png",
    description: "Juicy, wild-caught shrimp.",
  },
  {
    name: "Crab",
    image: "/image-4.png",
    description: "Soft-shell and king crabs available.",
  },
];

export default function Products() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary text-center text-3xl font-bold">
            Our Products
          </CardTitle>
        </CardHeader>
        <CardContent className="text-neutral-dark space-y-4">
          <p>
            Explore our **wide range of fresh seafood**, sourced responsibly and
            delivered with care.
          </p>

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
