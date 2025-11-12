"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    title: "Enlèvement de vos marchandises",
    description:
      "Nous programmons avec vous l’enlèvement le jour « J » de vos plis et colis urgents, par la route sans rupture de charge.",
    image: "/image/service1.jpg",
  },
  {
    title: "Livraison de vos marchandises",
    description: "Nous sommes en capacité de vous livrer dès le lendemain.",
    image: "/image/service2.jpg",
  },
  {
    title: "Équipes de Travail Jour/Nuit",
    description:
      "Nous mettons à votre disposition une équipe de chauffeurs qualifiés et expérimentés.",
    image: "/image/service3.jpg",
  },
  {
    title: "Livraison nationale et internationale",
    description:
      "Des services de transport efficaces en France, en Europe et au Maroc.",
    image: "/image/service4.jpg",
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black/50 text-white py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
          NOS <span className="text-orange-500">SERVICES</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Découvrez nos prestations de transport et logistique.
        </p>
      </div>

      {/* ==== Responsive Grid ==== */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)} // tactile
          >
            {/* ==== IMAGE ==== */}
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={600}
              className="object-cover w-full h-80 md:h-100 opacity-90 transition-all duration-300 group-hover:scale-105"
            />

            {/* ==== GRADIENT OVERLAY ==== */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-all duration-500" />

            {/* ==== TEXT CONTAINER ==== */}
            <div
              className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700 ease-out ${
                activeIndex === index
                  ? "translate-y-0"
                  : "translate-y-20 group-hover:translate-y-0"
              }`}
            >
              {/* ==== TITLE ==== */}
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y:
                    activeIndex === index
                      ? 0
                      : 0, // reste visible
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold uppercase tracking-wide text-white"
              >
                {service.title}
              </motion.h3>

              {/* ==== DESCRIPTION + BUTTON ==== */}
              <motion.div
                className={`mt-3 transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-fit border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  Voir plus
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
