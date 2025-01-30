"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-neutral-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/sea-logo-1.png"
              alt="Seafood Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="/" pathname={pathname}>
              Home
            </NavLink>
            <NavLink href="/about" pathname={pathname}>
              About Us
            </NavLink>
            <NavLink href="/process" pathname={pathname}>
              Process
            </NavLink>
            <NavLink href="/products" pathname={pathname}>
              Products
            </NavLink>
            <NavLink href="/faqs" pathname={pathname}>
              FAQs
            </NavLink>
            <NavLink href="/contact" pathname={pathname}>
              Contact Us
            </NavLink>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          </div>

          {/* Mobile Menu (ShadCN Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4">
                  <NavLink href="/" pathname={pathname} mobile>
                    Home
                  </NavLink>
                  <NavLink href="/about" pathname={pathname} mobile>
                    About Us
                  </NavLink>
                  <NavLink href="/process" pathname={pathname} mobile>
                    Process
                  </NavLink>
                  <NavLink href="/products" pathname={pathname} mobile>
                    Products
                  </NavLink>
                  <NavLink href="/faqs" pathname={pathname} mobile>
                    FAQs
                  </NavLink>
                  <NavLink href="/contact" pathname={pathname} mobile>
                    Contact Us
                  </NavLink>
                  <Link href="/login">
                    <Button className="w-full mt-2">Login</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper Component for Active Link Highlight
interface NavLinkProps {
  href: string;
  pathname: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ href, pathname, children, mobile }: NavLinkProps) => {
  const isActive = pathname === href;

  return (
    <Link href={href} className={`text-lg ${mobile ? "block py-2" : ""} ${isActive ? "text-secondary border-b-2 border-secondary" : "text-neutral-light hover:text-secondary"}`}>
      {children}
    </Link>
  );
};

export default Navbar;
