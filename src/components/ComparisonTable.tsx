import Image from "next/image";

export default function ComparisonTable() {
  return (
    <section className="bg-[#212833] text-white w-full py-12 px-4 mt-10 md:px-8 lg:px-16">
      <div className="max-w-xl text-left mb-10">
        <span className="text-blue-600 font-bold leading-tight relative ">
          TABELA COMPARATIVA
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 leading-tight">
          Tá achando que não se encaixa com as{" "}
          <span className="text-[#2B73DF]">suas ferramentas?</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl">
          Muitos profissionais enfrentam dificuldades para integrar novas soluções ao seu fluxo de trabalho. A Xplora foi criada para mudar isso — oferecendo uma experiência fluida, acessível e totalmente online, sem complicações técnicas ou necessidade de máquinas potentes.
        </p>
      </div>

      <div className="flex justify-center items-center">
        
        <div className="relative hidden lg:block">
          <Image
            src="/Images/ComparisonTable.webp"
            alt="Tabela comparativa entre ferramentas de renderização"
            width={3840}
            height={2160}
            quality={100}
            priority
            className="bg-cover"
            
          />
        </div>
       
        <div className="flex relative items-center justify-center mx-auto lg:hidden">
          <Image
            src="/Images/ComparisonPhone.webp"
            alt="Tabela comparativa mobile entre ferramentas de renderização"
            width={2160}
            height={3840}
            quality={100}
            priority
            className=" rounded-2xl bg-cover"
            
          />
        </div>
      </div>
    </section>
  );
}
