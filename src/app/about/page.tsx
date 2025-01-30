"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary text-center text-3xl font-bold">
            About Us
          </CardTitle>
        </CardHeader>
        <CardContent className="text-neutral-dark text-lg space-y-4">
          <p>
            Welcome to **Seafood Haven**, your trusted source for the freshest
            seafood. We are passionate about bringing you high-quality,
            sustainably sourced seafood straight from the ocean to your plate.
          </p>
          <p>
            Our commitment is to provide not only **freshness** but also
            **responsible fishing** practices that protect marine life and
            maintain a healthy ocean ecosystem.
          </p>
          <p>
            Join us on this journey of **flavor, freshness, and
            sustainability**!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
