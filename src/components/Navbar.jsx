import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Martial Arts", href: "#martial-arts" },
  { name: "Contact", href: "#contact" },
  { name: "Get Resume", href: "https://drive.google.com/file/d/1iBCGsrfeCLN7jSjKgMw5GPL3zMSVv6FC/view?usp=drive_link" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpened) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
    return;
  }, [isMenuOpened]);

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-sm shadow-sm"
          : "py-5 bg-background/60 backdrop-blur-none"
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold text-primary flex items-center"
        >
          <span className="text-glow text-foreground">Armish Rehan</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-wrap md:justify-end md:gap-x-6 md:gap-y-2 lg:gap-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="hover:text-primary transition-colors duration-300 text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpened ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    {/* Slide-in Mobile Menu (rendered outside the nav so it can overlay correctly) */}
    <div
      className={cn(
        "fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background/90 backdrop-blur-sm flex flex-col items-start justify-start gap-4 text-lg transform transition-transform duration-300 md:hidden shadow-md z-60 overflow-y-auto p-6 pt-16",
        isMenuOpened ? "translate-x-0" : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button inside the menu so it's always visible */}
      <button
        onClick={() => setIsMenuOpened(false)}
        aria-label="Close Menu"
        className="absolute top-4 right-4 p-2 z-[9999] text-foreground"
      >
        <X size={24} />
      </button>
      {navItems.map((item, key) => (
        <a
          href={item.href}
          key={key}
          className="w-full text-center py-3 hover:text-primary transition-colors duration-300"
          onClick={() => setIsMenuOpened(false)}
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Background Overlay */}
    {isMenuOpened && (
      <div
        className="fixed inset-0 bg-black/40 md:hidden z-50 transition-opacity duration-300"
        onClick={() => setIsMenuOpened(false)}
      ></div>
    )}
    </>
  );
};
