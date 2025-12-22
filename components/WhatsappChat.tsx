"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronRight, Phone } from "lucide-react";

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);

  // === Liste des contacts WhatsApp ===
  const contacts = [
  
    {
      title: "Exploitation",
      mail: "exploitation@transidf",
      
    },
    {
      title: "Comptabilité",
      mail: "compta@transidf.com",
      
    },
    {
      title: "Ressources humaines",
      mail: "rh@transidf.com",
      
    },
  ];

  // === Fonction pour générer lien WhatsApp ===
  const makeLink = (number: string) => {
    const cleanNumber = number.replace(/\s+/g, "");
    return `https://wa.me/${cleanNumber.replace("+", "")}?text=Bonjour%2C%20j'aimerais%20avoir%20plus%20d'informations.`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {/* === Fenêtre ouverte === */}
      {open && (
        <div className="bg-gray-800/70 text-orange-400 rounded-2xl shadow-2xl p-4 w-[90vw] max-w-[340px] sm:w-80 relative border border-gray-200 animate-fadeIn">
          {/* Bouton de fermeture */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            aria-label="Fermer le chat WhatsApp"
          >
            <X size={18} />
          </button>

          {/* Titre */}
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 p-2 rounded-full mr-3">
              <MessageCircle className="text-white" size={20} />
            </div>
            <p className="text-sm font-semibold">Contactez TransIDF</p>
          </div>

          {/* Liste des contacts */}
          <div className="flex flex-col gap-3">
            {contacts.map((contact, i) => (
              <div key={i} className="border border-gray-200 rounded-md p-3 hover:bg-black transition">
                <p className="text-sm font-medium text-gray-100  mb-1">{contact.title}</p>

                {/* France */}
                {contact.mail && (
                  <a
                    href={makeLink(contact.mail)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-orange-700 hover:text-orange-800"
                  >
                    <span className="flex items-center gap-2">
                      <Phone size={14} /> {contact.mail}
                    </span>
                    <ChevronRight size={16} />
                  </a>
                )}

               
              </div>
            ))}
          </div>

          <p className="text-[10px] text-center mt-4 text-gray-500">
            ⚡ Développé par <strong>Made for Web</strong>
          </p>
        </div>
      )}

      {/* === Bouton flottant === */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-600 p-4 rounded-full shadow-xl hover:bg-orange-700 transition"
          aria-label="Ouvrir le chat WhatsApp"
        >
          <MessageCircle className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}
