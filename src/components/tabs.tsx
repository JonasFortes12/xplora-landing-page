    "use client";
    import { Tabs, Tab } from "@heroui/tabs";
    import { Card, CardBody } from "@heroui/card";
    import { HiOutlineArrowRight } from "react-icons/hi";
    import Image from "next/image";
    import { motion, AnimatePresence } from "framer-motion";
    import HowUseCards from "./ui/HowUse";

    import { Button } from "@heroui/button";
    import { card } from "@heroui/theme";

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
          subtitle:
            "Envio do modelo 3D e das texturas que você quiser deixar editáveis.",
          description:
            "Envie seu modelo 3D e texturas que deseja editar no projeto .",
          image: "/Images/Interior.webp",
        },
        {
          id: 20,
          title: "02",
          subtitle: "Processamento e organização do seu projeto",
          description: "Organizamos e processamos seu projeto rapidamente.",
          image: "/Images/Work.webp",
        },
        {
          id: 3,
          title: "03",
          subtitle:
            "Disponibilização do seu tour virtual interativo para seu cliente!",
          description: "Disponibilize um tour 3D interativo para seus clientes.",
          image: "/Images/Laptop.webp",
        },
      ],
      engenheiros: [
        {
          id: 1,
          title: "01",
          subtitle: "Envio de plantas detalhadas e documentos técnicos completos",
          description: "Envie suas plantas e projetos técnicos detalhados.",
          image: "/Images/Plant.webp",
        },
        {
          id: 2,
          title: "02",
          subtitle: "Análise automatizadade dados e cálculos estruturais",
          description: "Receba análises automatizadas do seu projeto.",
          image: "/Images/Planning.webp",
        },
        {
          id: 3,
          title: "03",
          subtitle: "Compartilhamento com clientes de forma clara e acessível",
          description: "Compartilhe o projeto final de forma simples.",
          image: "/Images/Clients.webp",
        },
      ],
      "dono-imovel": [
        {
          id: 1,
          title: "01",
          subtitle: "Envio do imóvel com fotos e informações detalhadas",
          description:
            "Envie informações e fotos do imóvel que deseja disponibilizar.",
          image: "/Images/Imovel.webp",
        },
        {
          id: 2,
          title: "02",
          subtitle: "Visualização de propostas recebidas em tempo real",
          description: "Receba propostas de arquitetos e engenheiros rapidamente.",
          image: "/Images/Propostas.webp",
        },
        {
          id: 3,
          title: "03",
          subtitle: "Tour interativo do imóvel para atrair mais interessados",
          description:
            "Mostre seu imóvel em um tour virtual 3D imersivo e interativo.",
          image: "/Images/Tour.webp",
        },
      ],
      cliente: [
        {
          id: 1,
          title: "01",
          subtitle: "Exploração do projeto com liberdade e interatividade",
          description: "Explore os projetos em 3D de forma intuitiva.",
          image: "/Images/Project.webp",
        },
        {
          id: 2,
          title: "02",
          subtitle: "Feedback em tempo real para arquitetos e engenheiros",
          description: "Dê feedback instantâneo sobre o projeto virtual.",
          image: "/Images/Feedback.webp",
        },
        {
          id: 3,
          title: "03",
          subtitle: "Aprovação final com segurança e também praticidade.",
          description: "Aprove o projeto e finalize a experiência virtual .",
          image: "/Images/evaluation.webp",
        },
      ],
    };

    export default function HowToUseTabs() {
      return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-16 ">
          <div className="bg-white  ">
            <span className="text-blue-600 font-bold leading-tight relative bottom-5">
              {" "}
              COMO USAR
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-xl">
              Veja como você e seu cliente podem utilizar o
              <span className="text-blue-600"> xplora</span>
            </h1>
            <p className="mt-5 max-w-3xl text-neutral-700">
              Selecione seu perfil e descubra, em poucos cliques, o passo a passo
              para transformar qualquer maquete 3D em uma experiência imersiva
            </p>
            <div className="border-1 border-[#4F607A] w-full lg:w-full rounded-lg mt-7 px-2 py-8 justify-center ">

              <Tabs
                aria-label="Perfis de usuário"
                items={tabsData}
                color="primary"
                variant="underlined"
                classNames={{
                  tabList:
                    "flex grid grid-cols-2 col-start-2 sm:grid-cols-4 gap-5 px-5 md:flex w-full justify-center items-center border-divider xl:ml-[65px] md:ml-[70px] lg:ml-[40px]  justify-center",
                  tab: "p-0 lg:ml-4 h-12 text-sm md:text-base text-center  ",
                  tabContent:
                    " group-data-[selected=true]:bg-[#4F607A] group-data-[selected=true]:text-white text-slate-600 text-base md:text-md sm:text-sm  px-5 py-2 lg:px-10.5 lg:py-2.5 justify-between rounded-xl border border-[#4F607A] border-1 ",
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
                        className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-16"
                      >
                        <div>
                          
                        </div>
                        
                          <div className="flex items-center justify-center gap-2 col-span-4  ">
                            <HowUseCards
                              title={cardsByTab[tab.id][0].title}
                              subtitle={cardsByTab[tab.id][0].subtitle}
                              description={cardsByTab[tab.id][0].description}
                              image={cardsByTab[tab.id][0].image}
                            ></HowUseCards>
                            
                          </div>
                          <div className="flex items-center justify-center">
                            <HiOutlineArrowRight className="text-[#4F607A] rotate-90 xl:rotate-none w-20 h-8 col-span-3  " />
                          </div>

                          <div className="flex items-center justify-center gap-2 col-span-4 ">
                            <HowUseCards
                              title={cardsByTab[tab.id][1].title}
                              subtitle={cardsByTab[tab.id][1].subtitle}
                              description={cardsByTab[tab.id][1].description}
                              image={cardsByTab[tab.id][1].image}
                              popover={tab.id === "arquitetos"}
                            ></HowUseCards>
                            
                          </div>
                          <div className="flex items-center justify-center ">
                            <HiOutlineArrowRight className=" text-[#4F607A] rotate-90 xl:rotate-none w-20 h-8 col-span-2 " />
                          </div>
                          <div className="flex items-center justify-center gap-5  col-span-4">
                            <HowUseCards
                              title={cardsByTab[tab.id][2].title}
                              subtitle={cardsByTab[tab.id][2].subtitle}
                              description={cardsByTab[tab.id][2].description}
                              image={cardsByTab[tab.id][2].image}
                            ></HowUseCards>
                          </div>
                        
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
