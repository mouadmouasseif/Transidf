"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea"
export default function ContactCards() {
  const contacts = [
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
    ];

  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white pt-29">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
        Notre Équipe
      </h2>

      {/* 🖥️ Version desktop : grille 4 colonnes */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900/60 border border-orange-400/30 h-full rounded-2xl text-center shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
              <CardHeader className="flex flex-col items-center space-y-3">
                {/* Avatar stylisé */}
                <Avatar className="w-24 h-24 border-2 border-orange-500 shadow-lg shadow-orange-500/20">
                  <AvatarImage src={info.avatar} alt={info.title} />
                  <AvatarFallback>
                    {info.title.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <CardTitle className="text-orange-400 text-lg">
                  {info.title}
                </CardTitle>
                <CardDescription className="text-blue-300 text-sm">
                  {info.desc}
                </CardDescription>
                {info.name && (
                  <p className="text-base font-semibold text-white">
                    {info.name}
                  </p>
                )}
              </CardHeader>

              <CardContent className="text-sm space-y-2">
                {info.contact.map((c, j) => (
                  <p key={j} className="flex justify-center items-center">
                    {c.icon}
                    {c.href ? (
                      <a
                        href={c.href}
                        className="underline hover:text-orange-400 ml-1 text-yellow-50"
                      >
                        {c.text}
                      </a>
                    ) : (
                      <span className="ml-1 text-orange-50">{c.text}</span>
                    )}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 📱 Version mobile : défilement horizontal */}
      <div className="md:hidden flex overflow-x-auto space-x-4 px-4 py-6 snap-x snap-mandatory scrollbar-hide">
        {contacts.map((info, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.97 }}
            className="snap-center flex-shrink-0 w-[280px]"
          >
            <Card className="bg-gray-900/70 text-white backdrop-blur-md border h-full border-gray-800 shadow-xl flex flex-col items-center text-center p-4">
              <Avatar className="w-20 h-20 border-2 border-orange-500 shadow-md shadow-orange-500/20 mb-3">
                <AvatarImage src={info.avatar} alt={info.title} />
                <AvatarFallback>
                  {info.title.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-orange-400 text-lg">{info.title}</CardTitle>
              <CardDescription className="text-blue-300 text-sm mb-2">
                {info.desc}
              </CardDescription>
              {info.name && (
                <p className="text-sm font-semibold text-white mb-3">
                  {info.name}
                </p>
              )}

              <CardContent className="text-xs space-y-1">
                {info.contact.map((c, j) => (
                  <p key={j}>
                    {c.icon}
                    {c.href ? (
                      <a
                        href={c.href}
                        className="underline hover:text-orange-400 ml-1"
                      >
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
      
        {/* Formulaire de contact */}
        <div className="mt-16 max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-xl font-semibold text-center mb-6 text-orange-400">Envoyez-nous un message</h3>
          <form className="space-y-4">
            <Input type="text" placeholder="Votre nom" className="bg-gray-900 border-gray-700" />
            <Input type="email" placeholder="Votre email" className="bg-gray-900 border-gray-700" />
            <Textarea placeholder="Votre message..." className="bg-gray-900 border-gray-700 min-h-[120px]" />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Envoyer</Button>
          </form>
        </div>

        {/* Adresses */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center">
            <MapPin className="w-10 h-10 text-orange-400 mb-3" />
            <h4 className="text-lg font-semibold text-orange-400 mb-2">Adresse Maroc</h4>
            <p className="text-sm text-gray-400">
             Rue Dakar IMM N5 APP 1, Océan, <br />
              Rabat-Maroc.<br />
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center">
            <MapPin className="w-10 h-10 text-orange-400 mb-3" />
            <h4 className="text-lg font-semibold text-orange-400 mb-2">Adresse France</h4>
            <p className="text-sm text-gray-400">
            10 Allée de la connaissance<br />
              77127 LIEUSAINT<br />
             
            </p>
          </div>
        </div>
    </section>
  );
}
