import { divider } from "@heroui/theme";
import TestemonialsCards from "./TestemonialsCards";

export default function Testimonials() {
  return (
    <section className="w-full py-12 px-4 mt-10 md:px-8 lg:px-16">
      <div className="bg-white">

        <span className="text-blue-600 font-bold leading-tight relative bottom-5">
          Testemunhas
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-xl">
          Já foi
          <span className="text-blue-600"> testado e aprovado </span>
          por especialistas
        </h1>

        <p className="mt-3 text-[#4F607A]">
          A Xplora revoluciona a forma de apresentar projetos arquitetônicos, permitindo que clientes<br></br> explorem cada detalhe em 3D, testem materiais e vejam mudanças em tempo real.
        </p>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-10 place-items-center">
        <div className="">
        <TestemonialsCards 
        image ="/Images/Agostinho.webp" 
        title="Agostinho Alves." 
        profession="Arquiteto."
        description="Antes, era difícil transmitir a visão completa do projeto. Com a Xplora, meus clientes entendem cada detalhe, e isso facilita a aprovação de ideias e mudanças de forma prática."
        ></TestemonialsCards>

        </div>
        <div>
        <TestemonialsCards 
        image ="/Images/Daniel.webp" 
        title="Daniel Veríssimo." 
        profession="Cientista da computação."
        description="A Xplora transformou completamente a forma como apresento meus projetos. Agora meus clientes conseguem visualizar cada detalhe em 3D e tomar decisões com muito mais segurança."
        ></TestemonialsCards>

        </div>

        <div className="sm:col-span-2 lg:col-span-2 xl:col-span-1 ">
        <TestemonialsCards 
        image ="/Images/Davi.webp" 
        title="Davi de Castro." 
        profession="Engenheiro Civíl."
        description="A experiência 3D da Xplora mudou completamente minha forma de apresentar obras. Agora, clientes e parceiros conseguem visualizar cada etapa, tornando o processo mais transparente e seguro."
        ></TestemonialsCards>

        </div>

      </div>
    </section>
  );
}
