import Image from "next/image";
import { useMemo } from "react";
import HeroButton from "./ui/HeroButton";

function ButtonFallback({ children }: { children: React.ReactNode }) {
  return (
    <HeroButton></HeroButton>
  );
}

export default function XploraHero() {
  

  return (

    <main className="min-h-screen ">
      <div className="absolute left-205  max-w-[900px] md:w-[680px] md:h-[705.5px] z-30 ">
        <Image
                src="/Images/Hand.png"
                alt="Mão segurando celular"
                fill
                className="object-cover ml-3 "
                priority
                quality={100}
                
                
              />
      </div>
      
      <div className="absolute inset-0 bg-[url(/Images/Build.png)] ">
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          
          <div className="relative z-20 ml-20 ">
            <div className="mb-6 flex items-center gap-2">
              <Image 
                src="/Images/Xplora.png"
                alt="Logo da Xplora"  
                className="text-sm font-semibold tracking-wide text-blue-700"
                priority
                quality={100}
                width={100}
                height={100}
                
                />
                
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight  text-black ">
              Crie e <span className="text-blue-600">xplore</span> experiências interativas
               
              e <span className="text-blue-600">acessíveis em todos os sentidos</span> 
            </h1>

            <p className="mt-5 max-w-xl text-neutral-700">
              Com o Xplora, você pode criar experiências virtuais, permitindo que seus clientes
              explorem livremente e de forma inovadora seu projeto, agregando ainda mais valor ao seu
              trabalho.
            </p>

            <div className="mt-6 relative inline-flex">
              <ButtonFallback>COMEÇAR</ButtonFallback>
            </div>
          </div>

          
          <div className="relative flex justify-end items-center mr-25 mt-20 ">
            
            <div className="relative rounded-2xl bg-[url(/Images/Interior.png)] w-full max-w-[560px] h-[640px]" />

            
        
          </div>
        </section>
      </div>
    </main>
  );
}