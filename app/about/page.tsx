"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-800 to-black text-white overflow-hidden">
      {/* ==== SECTION HEADER ==== */}
      <div className="relative z-10 px-6 md:px-16 lg:px-32 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            À PROPOS DE <span className="text-orange-500">TRANS IDF</span>
          </h1>

          <Image
            src="/image/logo.png"
            alt="Logo Trans IDF"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-xl"
          />

          <p className="text-gray-300 text-lg leading-relaxed">
            Fondée en 2016, <strong className="text-orange-400">TRANS IDF</strong> est une société spécialisée dans la livraison de marchandises, colis et documents en <strong>France</strong>, à travers <strong>l’Europe</strong> et désormais au <strong>Maroc</strong>.  
            Nous mettons un point d’honneur à garantir un service fiable, rapide et sécurisé.
          </p>

          <p className="text-gray-300 text-lg mt-4">
            Grâce à notre expertise logistique et à un réseau solide, nous accompagnons nos clients dans leurs besoins de transport — qu’il s’agisse de livraisons urgentes, de gestion de flux ou de logistique internationale.
          </p>
        </motion.div>

        {/* ==== IMAGE SLIDER (Maroc / France / Europe) ==== */}
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="relative h-64 rounded-2xl overflow-hidden shadow-lg flex space-x-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[
              "/image/team.jpg",
              "/image/france.jpg",
              "/image/truck.jpg",
              "/image/maroc.jpg",
              "/image/warehouse.jpg",
              "/image/europe.jpg",
              "/image/tracki.jpg",
              "/image/service1.jpg",
              "/image/service2.jpg",
              "/image/service3.jpg",
              "/image/service4.jpg",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="TransIDF destinations"
                width={250}
                height={250}
                className="rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform"
              />
            ))}
          </motion.div>
        </div>

        {/* ==== GALERIE ====*/}
       
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <Card className="bg-black/30 text-white backdrop-blur-md border border-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-400 text-xl">Une Demande Urgente</CardTitle>
              <CardDescription className="text-blue-300">
               contactez nous :
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-base">
                <p>

                </p>
              <p>
                <Phone className="inline w-5 h-5 mr-2 text-orange-400" />
                <strong className="text-orange-400">France :</strong> +33 1 56 32 45 84/ +33 6 20 60 73 60
              </p>
              <p>
                <Phone className="inline w-5 h-5 mr-2 text-orange-400" />
                <strong className="text-orange-400">Maroc :</strong> +212 537 86 65 13 / +212 669 47 68 78
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 text-white backdrop-blur-md border border-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-400 text-xl">Nos Adresses</CardTitle>
              <CardDescription className="text-blue-300">
                Retrouvez-nous en France et au Maroc.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-base">
              <p>
                <MapPin className="inline w-5 h-5 mr-2 text-orange-400" />
                <strong className="text-orange-400">France :</strong> 1 Place de l'Europe, 77610 Fontenay-Trésigny
              </p>
              <p>
                <MapPin className="inline w-5 h-5 mr-2 text-orange-400" />
                <strong className="text-orange-400">Maroc :</strong> Rue Dakar IMM N°5 APP 1, Océan - Rabat
              </p>
            </CardContent>
          </Card>
        </div>
        {/* ==== CONTACTS ==== */}
       {/* ==== CONTACTS ==== */}
<div className="w-full overflow-hidden mt-20">
  {/* ====== VERSION DESKTOP ====== */}
  <div className="hidden md:flex justify-center gap-6 flex-wrap">
    {[
      {
        title: "Président",
        desc: "Pour les partenariats et la gestion stratégique.",
        avatar: "/image/avatar-president.png",
        name: "Mounir Qhaicha",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Qhaicha.mounir@transidf.com",
            href: "mailto:Qhaicha.mounir@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 71 30 21 24",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 84 45 05 37",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 612 00 81 91",
          },
        ],
      },
      {
        title: "Exploitation & International Flow Coordinator",
        desc: "Suivi des livraisons France & Maroc.",
        avatar: "/image/avatar-commercial.jpg",
        name: "Rim Badauoi",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "exploitation@transidf.com",
            href: "mailto:exploitation@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 56 32 45 84",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 20 60 73 60",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 669 47 68 78",
          },
        ],
      },
      {
        title: "Ressources Humaines",
        desc: "Pour les candidatures et opportunités de carrière.",
        avatar: "/image/avatar-rh.jpg",
        name: "Hatice Bozkus",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "rh@transidf.com",
            href: "mailto:rh@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 71 30 21 24",
          },
        ],
      },
      {
        title: "Comptabilité",
        desc: "Pour les questions liées à la facturation et aux paiements.",
        avatar: "/image/avatar-compta.jpg",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "compta@transidf.com",
            href: "mailto:compta@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 56 32 45 84",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 20 60 73 60",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 669 47 68 78",
          },
        ],
      },
    ].map((info, i) => (
      <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Card className="bg-gray-900/50 text-white backdrop-blur-md border border-gray-800 shadow-xl w-[320px] h-[520px] flex flex-col justify-between text-center">
          <CardHeader className="flex flex-col items-center space-y-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src={info.avatar} alt={info.title} />
              <AvatarFallback>{info.title.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-orange-400 text-xl">{info.title}</CardTitle>
            <CardDescription className="text-blue-300">{info.desc}</CardDescription>
            {info.name && (
              <p className="text-lg font-semibold text-white">{info.name}</p>
            )}
          </CardHeader>

          <CardContent className="text-sm space-y-2">
            {info.contact.map((c, j) => (
              <p key={j}>
                {c.icon}
                {c.href ? (
                  <a href={c.href} className="underline hover:text-blue-300 ml-1">
                    {c.text}
                  </a>
                ) : (
                  <span className="ml-1">{c.text}</span>
                )}
              </p>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>

  {/* ====== VERSION MOBILE (défilement horizontal fluide) ====== */}
  <div className="md:hidden flex overflow-x-auto space-x-4 px-4 py-6 snap-x snap-mandatory scrollbar-hide">

 {[
      {
        title: "Président",
        desc: "Pour les partenariats et la gestion stratégique.",
        avatar: "/image/avatar-president.png",
        name: "Mounir Qhaicha",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Qhaicha.mounir@transidf.com",
            href: "mailto:Qhaicha.mounir@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 71 30 21 24",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 84 45 05 37",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 612 00 81 91",
          },
        ],
      },
      {
        title: "Exploitation & International Flow Coordinator",
        desc: "Suivi des livraisons France & Maroc.",
        avatar: "/image/avatar-commercial.jpg",
        name: "Rim Badauoi",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "exploitation@transidf.com",
            href: "mailto:exploitation@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 56 32 45 84",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 20 60 73 60",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 669 47 68 78",
          },
        ],
      },
      {
        title: "Ressources Humaines",
        desc: "Pour les candidatures et opportunités de carrière.",
        avatar: "/image/avatar-rh.jpg",
        name: "Hatice Bozkus",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "rh@transidf.com",
            href: "mailto:rh@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 71 30 21 24",
          },
        ],
      },
      {
        title: "Comptabilité",
        desc: "Pour les questions liées à la facturation et aux paiements.",
        avatar: "/image/avatar-compta.jpg",
        contact: [
          {
            icon: <Mail className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "compta@transidf.com",
            href: "mailto:compta@transidf.com",
          },
          { text: "France :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +33 1 56 32 45 84",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +33 6 20 60 73 60",
          },
          { text: "Maroc :" },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Tel : +212 537 86 65 13",
          },
          {
            icon: <Phone className="inline w-5 h-5 mr-2 text-orange-400" />,
            text: "Mob : +212 669 47 68 78",
          },
        ],
        },

       ].map((info, i) => (
      <motion.div
        key={i}
        whileTap={{ scale: 0.97 }}
        className="snap-center flex-shrink-0 w-[280px]"
      >
        <Card className="bg-gray-900/50 text-white backdrop-blur-md border border-gray-800 shadow-xl h-[400px] flex flex-col items-center text-center">
          <CardHeader className="flex flex-col items-center space-y-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src={info.avatar} alt={info.title} />
              <AvatarFallback>{info.title.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-orange-400 text-xl">{info.title}</CardTitle>
            <CardDescription className="text-blue-300">{info.desc}</CardDescription>
            {info.name && (
              <p className="text-lg font-semibold text-white">{info.name}</p>
            )}
          </CardHeader>

          <CardContent className="text-sm space-y-2">
            {info.contact.map((c, j) => (
              <p key={j}>
                {c.icon}
                {c.href ? (
                  <a href={c.href} className="underline hover:text-blue-300 ml-1">
                    {c.text}
                  </a>
                ) : (
                  <span className="ml-1">{c.text}</span>
                )}
              </p>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</div>
 <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {[
            { src: "/image/team.jpg", alt: "Équipe Trans IDF" },
            { src: "/image/truck.jpg", alt: "Camion Trans IDF" },
            { src: "/image/warehouse.jpg", alt: "Entrepôt logistique" },
          ].map((img, i) => (
            <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover brightness-90 hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </motion.div>

        
      </div>
    </main>
  );
}
