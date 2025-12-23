"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function NotreFlotte() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden pt-26">
      {/* ==== HEADER ==== */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
          Notre Flotte
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Votre marchandise est sécurisée grâce à notre système de
          géolocalisation sur l’ensemble de nos véhicules et remorques.
          TRANSIDF assure un suivi constant garantissant le respect des
          températures et la propreté selon les normes françaises d’hygiène.
        </p>
      </motion.div>

      {/* ==== IMAGE + DESCRIPTION ==== */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 mb-20 px-6 md:px-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/image/truck-fleet.jpg"
            alt="Flotte Transidf"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 space-y-5 text-gray-300"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Nos véhicules sont équipés de systèmes de suivi GPS pour assurer une
            traçabilité complète de votre marchandise en temps réel.
          </p>
          <p>
            Nous disposons d’enregistreurs de températures (informations
            disponibles sur demande). Nos remorques et véhicules sont nettoyés
            et désinfectés selon les protocoles en vigueur.
          </p>

          
        </motion.div>
      </div>

      {/* ==== CONTACT ==== */}
      <motion.div
        className="text-center mb-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Pour toute demande d’information, contactez-nous :
        </h2>
      </motion.div>

      {/* ==== CONTACT CARDS ==== */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 mb-16">
        {[
          {
            country: "France",
            address: "10 Allée de la Connaissance, 77127 LIEUSAINT",
            phones: ["+33 9 79 3870 20"],
          },
          {
            country: "Maroc",
            address: "Rue Dakar IMM N5 APP 1, Océan, Rabat",
            phones: ["+212 5 37 86 65 13"],
          },
        ].map((office, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/30 backdrop-blur-md border border-gray-700 shadow-xl flex flex-col justify-between h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-orange-400 text-center text-2xl uppercase tracking-wide">
                  {office.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-200 text-center">
                <p>
                  <MapPin className="inline w-5 h-5 mr-2 text-orange-400" />
                  {office.address}
                </p>
                {office.phones.map((phone, j) => (
                  <p key={j}>
                    <Phone className="inline w-5 h-5 mr-2 text-orange-400" /> {phone}
                  </p>
                ))}
                <p>
                  <Mail className="inline w-5 h-5 mr-2 text-orange-400" />
                  <a
                    href="mailto:exploitation@transidf.com"
                    className="underline hover:text-blue-400"
                  >
                    exploitation@transidf.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
