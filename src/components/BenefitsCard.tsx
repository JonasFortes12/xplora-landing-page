import Image from "next/image";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  showDivider?: boolean; 
}

export default function BenefitCard({
  icon,
  title,
  description,
  image,
  reverse = false,
  showDivider = true,
}: BenefitCardProps) {
  return (
    <div>
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 md:pr-6">
          <div className="text-[#2D7DFF] mb-3 text-2xl">{icon}</div>
          <h1 className="text-4xl font-bold text-gray-600 mb-2 ">{title}</h1>
          <p className="text-gray-600 leading-relaxed text-justify">{description}</p>
        </div>

        <div className="flex-1">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded-lg shadow-md w-screen h-full object-cover "
          />
        </div>
      </div>

      {showDivider && (
        <hr className="my-12 h-[2px] bg-gray-400 border-0" />
      )}
    </div>
  );
}
