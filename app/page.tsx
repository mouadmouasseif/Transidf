import Image from "next/image"
import Service from "@/components/Services";
import Hero from "@/components/Heros";
import About from "@/components/Abouts";
import ContactCards from "@/components/team";
  import Sendemail from "@/components/Send";
export default function Home() {
  return (

    <main className="min-h-screen flex flex-col bg-gray-700 text-white">
      <Hero />
<Service />

      {/* ===== About Section ===== */}
      <About />
      <ContactCards />
      <Sendemail />

    </main>
  )
}
