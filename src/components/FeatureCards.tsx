import { Badge } from "@heroui/badge";

interface FeatureCardsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  soon?: boolean;
}

export default function FeatureCards({
  icon,
  title,
  description,
  soon = false,
}: FeatureCardsProps) { 
  return (
    <div className="relative border border-[#4F607A]/40 w-full lg:w-80 lg:h-80 rounded-xl mt-7 px-4 py-8 shadow-sm hover:shadow-xl transition-all bg-white ">
      <div className="flex flex-col items-start space-y-3">
        <div className="text-[#2D7DFF] text-3xl ml-2 ">
          <Badge  className={`absolute bottom-12 left-3 bg-[#FF9500] text-black text-xs/2 font-semibold px-2.5 py-2 rounded-xl uppercase" ${soon ? "appear":"hidden" }`}
           content="Em breve">
            {icon}
          </Badge>

          </div>
        <h1 className="text-xl font-bold text-black sm:h-20 ">{title}</h1>
        <p className="text-gray-600 leading-relaxed text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}
