'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname(); // Get current route for active link highlighting
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-neutral-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/sea-logo-1.png"
                alt="Seafood Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="/" currentPath={pathname}>Home</NavLink>
            <NavLink href="/about" currentPath={pathname}>About Us</NavLink>
            <NavLink href="/process" currentPath={pathname}>Process</NavLink>
            <NavLink href="/products" currentPath={pathname}>Products</NavLink>
            <NavLink href="/faqs" currentPath={pathname}>FAQs</NavLink>
            <NavLink href="/contact" currentPath={pathname}>Contact Us</NavLink>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <button className="bg-secondary text-neutral-light px-4 py-2 rounded-md hover:bg-secondary-dark">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-neutral-light focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" currentPath={pathname} mobile>Home</NavLink>
            <NavLink href="/about" currentPath={pathname} mobile>About Us</NavLink>
            <NavLink href="/process" currentPath={pathname} mobile>Process</NavLink>
            <NavLink href="/products" currentPath={pathname} mobile>Products</NavLink>
            <NavLink href="/faqs" currentPath={pathname} mobile>FAQs</NavLink>
            <NavLink href="/contact" currentPath={pathname} mobile>Contact Us</NavLink>
          </div>
          <div className="p-2">
            <Link href="/login">
              <button className="w-full bg-secondary text-neutral-light py-2 rounded-md hover:bg-secondary-dark">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper Component for Active Link Highlight
interface NavLinkProps {
  href: string;
  currentPath: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ href, currentPath, children, mobile }: NavLinkProps) => {
  const isActive = currentPath === href;

  return (
    <Link href={href}>
      <span
        className={`block ${
          mobile ? 'px-3 py-2 rounded-md text-base' : 'text-lg'
        } ${
          isActive ? 'text-secondary border-b-2 border-secondary' : 'text-neutral-light'
        } hover:text-secondary`}
      >
        {children}
      </span>
    </Link>
  );
};

export default Navbar;
