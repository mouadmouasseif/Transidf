"use client";

import Image from "next/image";
import { ShieldCheck, Truck, Timer, AlarmClock, Calendar } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const valeurs = [
    {
      icon: <Timer className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />,
      title: "RAPIDITÉ",
      desc: "Livraison rapide",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "SÉCURITÉ",
      desc: "Protection garantie",
    },
    {
      icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "EFFICACITÉ",
      desc: "Performance assurée",
    },
    {
      icon: <AlarmClock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "24h/24",
      desc: "Toujours disponible",
    },
    {
      icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "7j/7",
      desc: "Sans interruption",
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        await controls.start({ x: "-50%", transition: { duration: 10, ease: "linear" } });
        await controls.start({ x: "0%", transition: { duration: 0 } });
      }
    };
    animateScroll();
  }, [controls]);

  return (
    <section
      className="
        relative w-full 
        min-h-[70vh] sm:min-h-[85vh] md:min-h-screen
        flex items-center justify-center overflow-hidden
      "
    >
      {/* ==== IMAGE DE FOND ==== */}
      <div className="absolute inset-0">
        <Image
          src="/image/he.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* ==== CONTENU ==== */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 w-full max-w-7xl">
        {/* ==== TITRE ==== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-white leading-tight"
        >
          TRANS<span className="text-orange-500">IDF</span> LOGISTIQUE
        </motion.h2>

        {/* ==== SOUS-TITRE ==== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 mb-2 text-sm sm:text-lg md:text-xl"
        >
          VOTRE PARTENAIRE DE TRANSPORT ET LOGISTIQUE
        </motion.p>

        {/* ==== TEXTE SECONDAIRE ==== */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-orange-500 mb-8 sm:mb-10 text-xs sm:text-lg md:text-xl"
        >
          en FRANCE, en EUROPE <span className="text-white">et maintenant</span> au MAROC
        </motion.p>

        {/* ==== VALEURS CLÉS ==== */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-6 sm:gap-8 md:gap-10 text-white justify-center w-max md:w-full md:justify-center"
          >
            {[...valeurs, ...valeurs].map((val, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center text-center space-y-2 cursor-pointer group min-w-[100px] sm:min-w-[140px]"
              >
                <div className="p-3 sm:p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-orange-500/80 transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="font-semibold text-xs sm:text-base tracking-widest text-white group-hover:text-orange-400 transition">
                  {val.title}
                </h3>
                <p className="text-gray-400 text-[9px] sm:text-xs uppercase">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
