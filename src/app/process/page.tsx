"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Process() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary text-center text-3xl font-bold">
            Our Process
          </CardTitle>
        </CardHeader>
        <CardContent className="text-neutral-dark space-y-4 text-lg">
          <p>
            At **Seafood Haven**, we follow a **five-step process** to ensure
            you get the freshest and highest-quality seafood:
          </p>

          <Separator />

          <ul className="space-y-2">
            <li>
              <strong>🦐 1. Sourcing:</strong> We work with sustainable
              fisheries worldwide.
            </li>
            <li>
              <strong>🐟 2. Catching:</strong> Our seafood is responsibly caught
              or farmed.
            </li>
            <li>
              <strong>🚚 3. Processing:</strong> Freshly caught seafood is
              **cleaned, packed, and quality-checked**.
            </li>
            <li>
              <strong>❄️ 4. Cold Chain:</strong> Our advanced **cold storage**
              ensures optimal freshness.
            </li>
            <li>
              <strong>🏠 5. Delivery:</strong> We deliver **straight to your
              doorstep** while maintaining peak freshness.
            </li>
          </ul>

          <p>
            This process ensures **taste, freshness, and sustainability** every
            time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
