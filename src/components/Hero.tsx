import Image from "next/image";
import HeroButton from "./ui/HeroButton";

function ButtonFallback({ children }: { children: React.ReactNode }) {
  return <HeroButton></HeroButton>;
}

export default function XploraHero() {
  return (
    <main className="relative py-10  flex items-center justify-center px-6 md:px-10 overflow-hidden bg-[url('/Images/Build.png')] bg-cover bg-center bg-no-repeat">
      <section className="relative grid grid-cols-1 lg:grid-cols-2  mt-20 lg:mt-0 gap-12 items-center max-w-7xl ">
        
        
        <div>
          <Image
            src="/Images/Xplora.png"
            alt="Ambiente virtual"
            width={100}
            height={100}
            className=""
            quality={100}
            priority
          />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Crie e <span className="text-blue-600">xplore</span> experiências interativas e{" "}
            <span className="text-blue-600">acessíveis em todos os sentidos</span>
          </h1>
          <p className="mt-5 max-w-xl text-neutral-700">
            Com o Xplora, você pode criar experiências virtuais, permitindo que seus clientes
            explorem livremente e de forma inovadora seu projeto, agregando ainda mais valor ao seu
            trabalho.
          </p>

          <div className="mt-8">
            <ButtonFallback>Começar</ButtonFallback>
          </div>
        </div>

        <div className="relative w-full max-w-[700px]  max-h-[800px] mx-auto flex items-center justify-center">
          
          <Image
            src="/Images/Interior.png"
            alt="Ambiente virtual"
            width={500}
            height={500}
            className="rounded-lg shadow-lg xl:ml-20 xl:mb-13 mb-20"
            quality={100}
            priority
          />

          
          <Image
            src="/Images/Hand.png"
            alt="Mão segurando celular"
            width={500}
            height={250}
            className="absolute z-20 xl:mr-15 mb-0 xl:mb-0 right-15 lg:mt-18 mt-20 md:mr-35 sm:mr-35 lg:mr-15"
            quality={100}
            priority
          />
        </div>
      </section>
    </main>
  );
}