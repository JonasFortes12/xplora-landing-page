  "use client";
  import { Tabs, Tab } from "@heroui/tabs";
  import { Card, CardBody } from "@heroui/card";
  import Image from "next/image";
  import { motion, AnimatePresence } from "framer-motion";
  import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover"
  import { Button } from "@heroui/button";

  const tabsData = [
    { id: "arquitetos", label: "Arquitetos" },
    { id: "engenheiros", label: "Engenheiros" },
    { id: "dono-imovel", label: "Dono de Imóvel" },
    { id: "cliente", label: "Cliente" },
  ];

  const cardsByTab: Record<
    string,
    {
      id: number;
      title: string;
      subtitle: string;
      description: string;
      image: string;
    }[]
  > = {
    arquitetos: [
      {
        id: 1,
        title: "01",
        subtitle: "Envio do modelo 3D e texturas que você quiser deixar editáveis.",
        description: "Envie seu modelo 3D e texturas que deseja editar no projeto.",
        image: "/Images/Interior.webp",
      },
      {
        id: 2,
        title: "02",
        subtitle: "Processamento e organização do seu projeto",
        description: "Organizamos e processamos seu projeto rapidamente.",
        image: "/Images/Work.webp",
      },
      {
        id: 3,
        title: "03",
        subtitle: "Disponibilização do seu tour virtual interativo para seu cliente!",
        description: "Disponibilize um tour 3D interativo para seus clientes.",
        image: "/Images/Laptop.webp",
      },
    ],
    engenheiros: [
      {
        id: 1,
        title: "01",
        subtitle: "Envio de plantas",
        description: "Envie suas plantas e projetos técnicos detalhados.",
        image: "/Images/Plant.webp",
      },
      {
        id: 2,
        title: "02",
        subtitle: "Análise automatizada",
        description: "Receba análises automatizadas do seu projeto.",
        image: "/Images/Planning.webp",
      },
      {
        id: 3,
        title: "03",
        subtitle: "Compartilhamento com clientes",
        description: "Compartilhe o projeto final de forma simples.",
        image: "/Images/Clients.webp",
      },
    ],
    "dono-imovel": [
      {
        id: 1,
        title: "01",
        subtitle: "Envio do imóvel",
        description:
          "Envie informações e fotos do imóvel que deseja disponibilizar.",
        image: "/Images/Imovel.webp",
      },
      {
        id: 2,
        title: "02",
        subtitle: "Visualização de propostas",
        description: "Receba propostas de arquitetos e engenheiros rapidamente.",
        image: "/Images/Propostas.webp",
      },
      {
        id: 3,
        title: "03",
        subtitle: "Tour interativo do imóvel",
        description: "Mostre seu imóvel em um tour virtual 3D imersivo e interativo.",
        image: "/Images/Tour.webp",
      },
    ],
    cliente: [
      {
        id: 1,
        title: "01",
        subtitle: "Exploração do projeto",
        description: "Explore os projetos em 3D de forma intuitiva.",
        image: "/Images/Project.webp",
      },
      {
        id: 2,
        title: "02",
        subtitle: "Feedback em tempo real",
        description: "Dê feedback instantâneo sobre o projeto virtual.",
        image: "/Images/Feedback.webp",
      },
      {
        id: 3,
        title: "03",
        subtitle: "Aprovação final",
        description: "Aprove o projeto e finalize a experiência virtual.",
        image: "/Images/evaluation.webp",
      },
    ],
  };

  export default function HowToUseTabs() {
    return (
      <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div>
          <span className="text-blue-600 font-bold leading-tight relative bottom-5"> COMO USAR</span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-xl">
              Veja como você e seu cliente podem{" "} 
              utilizar o  
              <span className="text-blue-600"> xplora</span>
          </h1>
          <p className="mt-5 max-w-3xl text-neutral-700">
              Selecione seu perfil e descubra, em poucos cliques, o passo a passo para transformar qualquer maquete 3D em uma experiência imersiva
          </p>
          <div className="border-1 border-slate-600 rounded-lg mt-7 p-5 ">
          <Tabs
            aria-label="Perfis de usuário"
            items={tabsData}
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "grid grid-cols-2 gap-4 md:flex md:gap-6 w-full border-b border-divider ",
              tab: "px-4 h-12 text-sm md:text-base text-center ",
              tabContent:
                "group-data-[selected=true]:bg-slate-600 group-data-[selected=true]:text-white text-primary text-base md:text-lg px-3 py- rounded-lg border border-slate-600 border-1 ",
            }}
          >
            {(tab) => (
              <Tab key={tab.id} title={tab.label}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"
                  >
                    {cardsByTab[tab.id].map((card) => (
                      <Card
                        key={card.id}
                        className="py-1 h-full border-none 
                        transition-all duration-300 transform hover:-translate-y-2 "
                      >
                        <CardBody className={`overflow-visible  py-10 px-4  ${tab.id === "arquitetos" && card.id === 2 &&("py-4") } flex flex-col bg-slate-600 rounded-lg `}>
                          <div className="mb-4">
                            <h3 className="text-4xl font-bold text-gray-800 ">
                              {card.title}
                            </h3>
                            <h4 className="text-lg font-semibold mt-2 text-white">
                              {card.subtitle}
                            </h4>
                          </div>
                          <div className="mb-4 flex-1">
                            <p className="text-default-500 text-gray-400">
                              {card.description}
                            </p>
                          </div>
                          <div className="rounded-xl overflow-hidden">
                            <Image
                              alt={card.subtitle}
                              className="object-cover w-full h-48"
                              src={card.image}
                              width={300}
                              height={200}
                            />
                          </div>

                          
                          {tab.id === "arquitetos" && card.id === 2 && (
                            <div className="flex justify-end w-full ">
                                <Popover placement="bottom" showArrow={true} className="" >
                                  <PopoverTrigger className="">
                                    <Button className="bg-zinc-300/15 mt-4 w-80 h-9  text-white rounded-lg " >Isso não poderia ser mais automatizado?</Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="px-1 py-2 bg-slate-50/50 rounded-lg">
                                      <div className="text-small font-bold">A resposta é sim!</div>
                                      <div className="text-tiny">O Xplora faz isso por você</div>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                                
                            </div>
                          )}
                        </CardBody>
                      </Card>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </Tab>
            )}
          </Tabs>
          </div>
          
        </div>
      </section>
    );
  }
