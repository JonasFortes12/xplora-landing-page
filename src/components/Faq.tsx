"use client";

import React from "react";
import Image from "next/image";
import HeroAccordion, { AccordionItemData } from "./ui/HeroAccordion";
import HeroButton from "./ui/HeroButton";

export default function Faq() {
  const accordionItems: AccordionItemData[] = [
    {
      key: "1",
      title: "Meu projeto vai ser alterado quando eu fizer o tour?",
      content:
        "Não. Seu projeto permanece o mesmo, o tour apenas adiciona uma camada interativa para visualização.",
    },
    {
      key: "2",
      title: "Demora muito para o projeto ficar no ar?",
      content:
        "Não! Após o envio dos materiais, o tour costuma estar pronto em poucos dias, dependendo da complexidade.",
    },
    {
      key: "3",
      title: "Faz sentido usar o xplora ao invés de renderizações estáticas?",
      content:
        "Sim, o Xplora oferece experiências imersivas e interativas, permitindo que clientes explorem o espaço de forma realista.",
    },
    {
      key: "4",
      title: "Preciso fazer o download de algo?",
      content:
        "Não. O tour é totalmente online e pode ser acessado de qualquer dispositivo com internet.",
    },
    {
      key: "5",
      title: "Quanto seria o valor médio por tour?",
      content:
        "O valor depende do tamanho e da complexidade do projeto. Fale com nossa equipe para receber uma proposta personalizada.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#FFFCF9]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div>
          <span className="text-[12px] font-semibold tracking-wide text-[#2B73DF] uppercase">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mt-2">
            Ficou com dúvida se{" "}
            <span className="text-[#2B73DF]">assina agora ou depois?</span>
            <br /> Pode mandar!
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-md leading-relaxed">
            Aqui você encontra respostas rápidas para as perguntas mais
            frequentes sobre planos, recursos e implantação do Xplora. Se ainda
            restar alguma dúvida, nosso time de suporte está a um clique de
            distância para ajudar você a escolher o melhor momento e a
            configuração ideal para turbinar seus projetos.
          </p>

          <div className="mt-6">
            <HeroButton
              label="Tenho outra dúvida"
              className="bg-[#2B73DF] hover:bg-[#1E5CC7] w-auto px-6"
              
            />
          </div>
        </div>

        
        <div className="border border-[#D9D9D9] rounded-2xl p-4 bg-white shadow-sm">
          <HeroAccordion items={accordionItems} />
        </div>
      </div>

      
      <div className="flex justify-center items-center">
        <div className="mt-28 flex flex-col items-center md:items-center lg:max-w-6xl w-full">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[#2B73DF] uppercase self-start mb-3">
            Não tá satisfeito?
          </span>

          <h3 className="text-3xl w-full self-start md:text-5xl font-extrabold text-black leading-tight text-start lg:max-w-full">
            <span>Experimente e </span>
            <span className="text-[#2B73DF]">veja a diferença </span>
            <span>que o </span>
            <Image
              src="/Images/Xplora.webp"
              alt="Xplora"
              width={120}
              height={120}
              className="inline-block align-middle lg:h-auto md:h-15 w-auto lg:w-50 mx-1"
            />
            <span> pode fazer na sua empresa.</span>
          </h3>

          <div className="mt-8 flex justify-center">
            <HeroButton
              label="Quero inovar para os meus clientes"
              className="bg-[#2B73DF] hover:bg-[#1E5CC7] w-auto px-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
