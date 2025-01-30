"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-light mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1️⃣ Logo Section */}
        <div className="flex flex-col items-start">
          <Image
            src="/sea-logo-1.png"
            alt="Seafood Logo"
            width={60}
            height={60}
            className="w-16 h-16"
          />
          <p className="mt-2 text-neutral-light">
            Fresh seafood delivered to your doorstep with care and quality.
          </p>
        </div>

        {/* 2️⃣ Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Process", href: "/process" },
              { name: "Products", href: "/products" },
              { name: "FAQs", href: "/faqs" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Button
                  asChild
                  variant="link"
                  className="text-neutral-light px-0"
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Location Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Location</h4>
          <p className="text-neutral-light">
            🏢 123 Ocean Avenue, Seafood City
            <br />
            🌍 Ocean State, Country
            <br />
            📞 +1 234 567 890
            <br />
            ✉️ info@seafoodstore.com
          </p>
        </div>

        {/* 4️⃣ Developer Sign */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold mb-3">Developed By</h4>
          <p className="text-neutral-light">
            👨‍💻 Developed by{" "}
            <Link
              href="https://linkedin.com/in/askhan963"
              target="_blank"
              className="hover:text-secondary font-medium"
            >
              Awais Khan
            </Link>
          </p>
          <p className="text-neutral-light mt-2 text-sm">
            © {new Date().getFullYear()} Seafood Store. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Bar with Separator */}
      {/* <Separator className="bg-neutral-700" />
      <div className="bg-primary-dark text-center py-2 mt-4">
        <p className="text-sm text-neutral-light">
          © {new Date().getFullYear()} Seafood Store. All Rights Reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
