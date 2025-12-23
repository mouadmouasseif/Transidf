// app/Service/page.tsx
import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";

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

export default function ServicePage() {
  return (
    <main className="bg-black text-gray-100 min-h-screen py-16 px-6 md:px-20 lg:px-40 pt-26">
      {/* === HEADER === */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-orange-400">
          SERVICES TRANS IDF
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          TRANSIDF dispose d’un service commercial capable de répondre à vos attentes pour concrétiser vos projets.
        </p>
        <p className="text-lg text-gray-300">
          La cohésion et le sérieux de nos équipes permettent de répondre à des prestations bien spécifiques et d’apporter un service bien personnalisé.
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Notre personnel est particulièrement confirmé, et nos conducteurs sont régulièrement formés, notamment à l’éco-conduite afin de veiller au respect de l’environnement mais également à la sécurité des biens et des personnes.
        </p>
      </section>

      {/* === GRID SERVICES === */}
<section className="flex flex-wrap justify-center gap-8 mb-20">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white/10 border border-orange-400/20 rounded-2xl shadow-md hover:shadow-orange-500/40 
                 transition-all duration-300 overflow-hidden 
                 w-full sm:w-[48%] lg:w-[30%] flex flex-col"
    >
      <Image
        src={service.image}
        alt={service.title}
        width={400}
        height={350}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2 text-orange-400 text-center">
          {service.title}
        </h3>
        <p className="text-gray-300 text-center">{service.description}</p>
      </div>
    </div>
  ))}
</section>


      {/* === CHAÎNE LOGISTIQUE === */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Une Chaîne logistique efficace
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Pour vous servir toujours plus efficacement, TRANSIDF met tout en œuvre pour vous garantir :
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
          <li>Une prise en charge adéquate et sécurisée de votre marchandise</li>
          <li>Un transport urgent dédié sans rupture de charge</li>
          <li>Un suivi avec retour d'information au client à la livraison</li>
        </ul>
        <p className="mt-4 text-lg font-medium text-gray-200">
          Pour toute demande d’information, contactez-nous au :
        </p>
      </section>

      {/* === AVANTAGES CLIENTS === */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          AVANTAGES CLIENTS
        </h2>
        <p className="text-lg mb-4 text-gray-300">
          TRANS IDF : un accélérateur d’efficacité pour une prestation en toute sécurité !
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
          <li>Un suivi de la prestation du retrait jusqu’à la livraison</li>
          <li>Une réactivité de deux heures pour déclencher une course dédiée et urgente</li>
          <li>Une disponibilité 24/24h et 7/7j</li>
          <li>Un véritable savoir-faire notamment en région Parisienne et grande couronne</li>
          <li>
            Une flotte composée de tous types de véhicules : parc frigorifiques et standard, selon vos besoins
          </li>
          <li>Des outils performants de géolocalisation et de navigation</li>
          <li>Des procédures et normes respectées en conformité avec la législation sociale</li>
        </ul>
      </section>

      {/* === SERVICES INCLUS === */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-orange-400">
          SERVICES INCLUS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 border border-orange-400/20 rounded-2xl shadow-md p-6 hover:bg-orange-400/10 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              SUPPORT LOGISTIQUE
            </h3>
            <p className="text-gray-300">
              Nous garantissons la livraison en temps et en heure à l’adresse convenue, selon votre demande ou contrainte.
            </p>
          </div>

          <div className="bg-white/10 border border-orange-400/20 rounded-2xl shadow-md p-6 hover:bg-orange-400/10 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              DISPONIBILITÉ
            </h3>
            <p className="text-gray-300">
              Notre équipe, opérationnelle, reste joignable 7/7 J et 24/24 H pour répondre à vos attentes et vous apporter son expertise.
            </p>
          </div>

          <div className="bg-white/10 border border-orange-400/20 rounded-2xl shadow-md p-6 hover:bg-orange-400/10 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              UN ATOUT MAJEUR
            </h3>
            <p className="text-gray-300">
              TRANSIDF a toujours souhaité fournir des prestations haut de gamme à ses clients, en renouvelant tous les 2 ans sa flotte. 
              Notre parc de véhicules est bien entretenu et notre équipe garantit un suivi technique rigoureux.
            </p>
          </div>
        </div>
      </section>

      {/* === CONTACT === */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">TRANSIDF</h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-300">
          <div>
            <h3 className="font-semibold text-orange-400">France</h3>
            <p>1 Place de l'Europe, 77610 Fontenay-Trésigny</p>
            <p>Mob : +33 9 79 38 70 20</p>
         
          </div>

          <div>
            <h3 className="font-semibold text-orange-400">Maroc</h3>
            <p>Rue Dakar IMM N°5 APP 1, Océan, Rabat - Maroc</p>
            <p>Tél : +212 5 37 86 65 13</p>
 
          </div>
        </div>

        <p className="mt-6">
          
          <a
            href="mailto:exploitation@transidf.com"
            className="text-orange-400 underline flex items-center hover:text-orange-500 transition-colors"
          >
            <Mail className="inline w-5 h-5 mr-2 " />
            exploitation@transidf.com
          </a>
        </p>

    </section>
    </main>
  );
}
