import FeatureCards from "./FeatureCards";
import { FaRegImages } from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";
import { CgBrowser } from "react-icons/cg";
import { TbPaint, TbRulerMeasure } from "react-icons/tb";
import { BsCloudSunFill } from "react-icons/bs";

export default function Features() {
  return (
    <section className="w-full py-12 px-4 mt-10 md:px-8 lg:px-16">
      <div className="bg-white">
        <span className="text-blue-600 font-bold leading-tight relative bottom-5">
          FUNCIONALIDADES
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-xl">
          Faça
          <span className="text-blue-600"> muito mais </span>
          por
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-xl">
          muito
          <span className="text-blue-600"> menos </span>
          com o
          <span className="text-blue-600"> xplora! </span>
        </h1>

        <p className="mt-3 text-[#4F607A]">
          Deixe a burocracia de lado e transforme seu modelo 3D num palco
          interativo de <br /> possibilidades, gastando menos tempo e
          orçamento.
        </p>

        
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-center">
          <FeatureCards
            icon={<FaPersonWalking size={48} />}
            title="Movimentação fluida dentro do tour"
            description="Deslize, gire e “vire a câmera” com a responsividade de um jogo de videogame: cada ambiente carrega em instantes e responde ao toque sem travamentos."
          />

          <FeatureCards
            icon={<CgBrowser size={48} />}
            title="Roda diretamente no navegador, não precisa baixar nada"
            description="Basta copiar o link e compartilhar: seus clientes acessam o tour em qualquer dispositivo, sem instalar apps ou plugins."
          />

          <FeatureCards
            icon={<TbPaint size={48} />}
            title="Poder xplorar diferentes materiais dentro da maquete"
            description="Experimente revestimentos, pisos e acabamentos em tempo real: toque no elemento e troque texturas num piscar de olhos."
          />

          <FeatureCards
            icon={<FaRegImages size={48} />}
            title="Gráficos realistas que funcionam na maioria dos dispositivos"
            description="Otimização de texturas e luzes para manter o visual de alta qualidade, sem exigir hardware topo de linha — do celular ao desktop."
          />

          <FeatureCards
            icon={<BsCloudSunFill size={48} />}
            title="Escolher o horário e ver a incidência luminosa"
            description="Simule luz do dia, entardecer ou iluminação noturna para avaliar sombras e reflexos em cada ambiente — e garanta o efeito perfeito antes da obra."
            soon
          />

          <FeatureCards
            icon={<TbRulerMeasure size={48} />}
            title="Fazer medições antes mesmo da construção estar pronta"
            description="Meça paredes, portas e corredores diretamente no tour virtual, evitando surpresas e garantindo precisão milimétrica no seu projeto."
            soon
          />
        </div>
      </div>
    </section>
  );
}
