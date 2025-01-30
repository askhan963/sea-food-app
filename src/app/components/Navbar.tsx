"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavLinkProps {
  href: string;
  pathname: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ href, pathname, children, mobile }: NavLinkProps) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        ${mobile ? "block w-full py-3 px-4 hover:bg-gray-800" : ""}
        ${
          isActive
            ? "text-secondary border-b-2 border-secondary"
            : "text-neutral-light hover:text-secondary"
        }
        transition-colors duration-200
      `}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-neutral-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/sea-logo-1.png"
              alt="Seafood Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <Button variant="secondary" className="px-6">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-neutral-light hover:bg-gray-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] sm:w-[350px] bg-primary text-neutral-light"
              >
                <SheetHeader>
                  <SheetTitle className="text-neutral-light">
                    Navigation Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6">
                  <div className="mb-8">
                    <Image
                      src="/sea-logo-1.png"
                      alt="Seafood Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
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
                  </div>
                  <div className="mt-8">
                    <Link href="/login">
                      <Button variant="secondary" className="w-full">
                        Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
