"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SkipForward } from 'lucide-react';
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* ==== IMAGE DE FOND ==== */}
      <Image
        src="/image/he.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* ==== OVERLAY SOMBRE ==== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* ==== CONTENU ==== */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 gap-10">
        {/* ==== LOGO ET TITRE ==== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full md:w-1/2"
        >
          <Image
            src="/image/logo.png"
            alt="Logo TransIDF"
            width={160}
            height={160}
            className="mb-6"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            DÉCOUVREZ <span className="text-orange-500">NOTRE HISTOIRE</span>
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mb-6"></div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
            Depuis <span className="text-white font-semibold">2016</span>,{" "}
            <span className="text-orange-500 font-semibold">TRANS IDF</span> livre sur
            toute la <span className="text-white">France</span>, dans toute{" "}
            <span className="text-white">l’Europe</span> et désormais au{" "}
            <span className="text-white">Maroc</span>.  
            Spécialiste reconnu du transport interrégional et international, nous
            offrons des services rapides, fiables et sécurisés à nos partenaires.
          </p>
 <Link href="/about">
      <Button
        variant="outline"
        className="mt-8 text-orange-400 bg-white/30 border-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300"
      >
        Voir Plus <SkipForward />
      </Button>
    </Link>
        </motion.div>

        {/* ==== IMAGE ILLUSTRATION ==== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/image/h1.jpg"
              alt="Camion TransIDF"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-2xl"
            />
            
          </div>
            
        </motion.div>
      </div>
    </section>
  );
}
