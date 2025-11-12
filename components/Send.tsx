"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NextImage from "next/image"; // ⬅️ renommé pour éviter le conflit

export default function Sendemail() {
  const [background, setBackground] = useState("/image/back2.jpg");

  useEffect(() => {
    // Vérifie si back2.jpg existe, sinon fallback sur back.jpg
    const img = new window.Image(); // ⬅️ utiliser l'objet natif du navigateur
    img.src = "/image/back2.jpg";
    img.onload = () => setBackground("/image/back2.jpg");
    img.onerror = () => setBackground("/image/back.jpg");
  }, []);

  return (
    <section
      className="
        relative w-full 
        min-h-full sm:min-h-full md:min-h-screen
        flex items-center justify-center overflow-hidden bg-gray-900
      "
    >
      {/* ==== Image de fond ==== */}
      <div className="absolute inset-0">
        <NextImage
          src={background}
          alt="Arrière-plan"
          fill
          priority
          className="object-cover object-center brightness-75 transition-opacity duration-500"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* ==== CONTENU ==== */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 w-full max-w-md bg-black/50">
        <NextImage
          src="/image/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain mb-6"
        />
        <h2 className="text-2xl font-semibold text-orange-400 mb-6">
          Envoyez-nous un message
        </h2>

        <form className="space-y-4 w-full ">
          <Input
            type="text"
            placeholder="Votre nom"
            className="bg-black/60 border-gray-600 text-white placeholder-gray-400"
          />
          <Input
            type="email"
            placeholder="Votre email"
            className="bg-black/60 border-gray-600 text-white placeholder-gray-400"
          />
          <Textarea
            placeholder="Votre message..."
            className="bg-black/60 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
          />
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
}
