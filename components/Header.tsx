"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Float", href: "/Float" },
    { name: "Service", href: "/Service" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b  border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* === LOGO === */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>

        {/* === NAVIGATION DESKTOP === */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative text-gray-200 hover:text-orange-400 transition"
            >
              {link.name}
              {/* Animation soulignement */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* === BOUTON MENU (MOBILE) === */}
        <Button
          variant="outline"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-orange-500 bg-black text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          {menuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {/* === MENU MOBILE === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-orange-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
