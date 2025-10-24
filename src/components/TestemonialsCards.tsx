import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface TestemonialCardProps {

  image: string;
  title: string;
  profession: string;
  description: string;
}

export default function TestemonialsCards({
  image,
  title,
  profession,
  description,
}: TestemonialCardProps) {
  return (
    <div className="relative border bg-[#2B73DF] w-full xl:w-100 h-110 lg:h-90 xl:h-110 rounded-xl mt-7 px-4 py-8 shadow-sm hover:shadow-xl transition-all">
      <div className="flex flex-col space-y-3">
        
        
        <div className="flex justify-between items-center w-full">
          
          <div className="flex items-center space-x-3">
            <Image
              src={image}
              alt={title}
              width={56}
              height={56}
              className="rounded-full shadow-md w-14 h-14 object-cover"
            />
            <div>
              <h1 className="text-sm font-bold text-white">{title}</h1>
              <p className="text-xs text-white/80">{profession}</p>
            </div>
          </div>

          <FaLinkedin size={30} className="text-[#95B7EB]" />
        </div>
      
        <p className="mt-3 text-white/80 leading-relaxed text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
