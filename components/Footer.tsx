"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-10 border-t border-gray-800 mt-12 bg-black/40 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* === Logo TransIDF === */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <Image
            src="/image/logo.png"
            alt="TransIDF"
            width={120}
            height={120}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-white mt-2 md:mt-0">TransIDF</h1>
        </div>

        {/* === Liens légaux === */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">
            Politique de confidentialité
          </a>
          <a href="/terms-of-service" className="hover:text-orange-400 transition-colors">
            Conditions d'utilisation
          </a>
        </div>

        {/* === Développement === */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>Développé par</span>
          <a
            href="https://www.linkedin.com/company/made-forweb/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <Image
              src="/image/logo_v1.png"
              alt="Made For Web"
              width={28}
              height={28}
              className="rounded object-contain"
            />
            <span className="font-semibold">Made for Web</span>
          </a>
        </div>
      </div>

      {/* === Bas de page === */}
      <p className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} TransIDF &nbsp;|&nbsp; Développé par{" "}
        <a
          href="https://www.linkedin.com/company/made-forweb/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          Made for Web
        </a>
        . Tous droits réservés.
      </p>
    </footer>
  );
}
