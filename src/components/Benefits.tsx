import Image from "next/image";
import BenefitCard from "./BenefitsCard";
import { BiMessageEdit, BiAward } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";


export default function BenefitsSection() {
  return (
    <section className="w-full">
      
      <div className="bg-[#0B1730] text-white px-6 md:px-16 py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-[#2D7DFF] uppercase mb-2">
              Benefícios
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Como assim <span className="text-[#2D7DFF]">xplora?</span>
            </h1>
            <p className="text-[#2D7DFF] leading-relaxed max-w-300">
              Imagine seu cliente explorando seu projeto arquitetônico, de
              engenharia ou design de interiores pelo celular ou computador, sem
              precisar baixar nada. Com o Xplora, basta enviar seu modelo 3D
              para um tour virtual acessível por link. O usuário caminha
              livremente, testa materiais, analisa a iluminação e percebe todo o
              seu empenho no projeto.
            </p>
          </div>
        </div>

        
        <div className="absolute inset-0 flex justify-end items-center">
          <Image
            src="/Images/fundo-logo.png"
            alt="Logo Xplora"
            width={400}
            height={400}
            className="sm:h-100 w-150 opacity-30 lg:opacity-80 lg:relative lg:right-0 lg:h-full"
            priority
          />
        </div>
      </div>

      
      <div className="bg-white py-16 px-6 gap-10">
        <div className="px-10 mx-auto grid grid-cols-1 gap-12">
          <BenefitCard
            icon ={<BiMessageEdit size={48}  />}
            title="EVITE RETRABALHO"
            description="Com o Xplora, seu cliente identifica e aprova acabamentos, analisa a iluminação e detalhes em tempo real durante o tour, eliminando revisões manuais e retrabalhos inesperados."
            image="/Images/Benefit.png"
          />

          <BenefitCard
            icon={<BiAward  size={48}/>}
            title="FORNEÇA MAIS VALOR E UMA EXPERIÊNCIA PREMIUM"
            description="Destaque-se no mercado oferecendo uma experiência VIP: seus clientes personalizam texturas e ajustam a incidência luminosa em tempo real, vivenciando o projeto como se já estivessem dentro dele — tudo isso eleva a percepção de valor e consolida seu portfólio como referência em inovação."
            image="/Images/Benefit.png"
            reverse
          />

          <BenefitCard
            icon={<BiWorld size={48} />}
            title="NÃO FIQUE FORA DAS TENDÊNCIAS"
            description="Mergulhe na era do 3D e mostre que sua empresa está na vanguarda: navegação fluida estilo videogame, realidade virtual e tours interativos são tendências que transformam a forma de apresentar projetos e encantam clientes antenados no que há de mais moderno."
            image="/Images/Benefit.png"
            showDivider={false}

          />
           
          
        </div>
      </div>
    </section>
  );
}
