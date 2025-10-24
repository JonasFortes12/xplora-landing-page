import {Card, CardHeader, CardBody} from "@heroui/card";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover"
import { HiOutlineArrowRight } from "react-icons/hi";

import Image from "next/image";

interface HowToUseCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  popover?: boolean; 
}

export default function HowUseCards({
  title,
  subtitle,
  description,
  image,
  popover = false
}: HowToUseCards) {

  const descriptionStandHight:string = '30px'

  return (
    <Card className="py-4 hover:scale-100 bg-[#4F607A] mt-6 rounded-2xl md:w-[80%] lg:w-[80%] xl:w-[100%] text-white h-125 w-90 relative mb-5 ">
      <CardHeader className=" pb-0 pt-2 px-4 flex-col lg:items-center">
        <div>
          <div className="h-15 w-full">
            <h1 className=" md:text-center xl:text-start font-extrabold text-6xl text-[#212833]">{title}</h1>
          </div>

          <div className={`h-10 mt-2 h-[${descriptionStandHight}]`}>
            <p className="font-bold text-xl md:text-center xl:text-start">{subtitle}</p>
          </div>

          <div className="h-10 mt-12 md:mt-4 lg:mt-1 xl:mt-12">
            <h4 className="text-gray-400 md:text-center xl:text-start">{description}</h4>
          </div>
        </div>

        <div className="flex-1 relative md:mb-10">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg shadow-md xl:w-screen md:h-60 md:w-100 xl:h-50 lg:w-120 lg:h-65 w-100 h-50 mt-5 bg-no-repeat object-cover"
          />

          
          {popover && (
            <div className="mt-2 lg:ml-7 md:mt-1 justify-center items-center h-2 w-full">
              <Popover placement="bottom" showArrow>
                <PopoverTrigger>
                  <button className="bg-gray-300/15 text-white px-3 py-1 rounded-full text-sm shadow-md">
                    Isso não poderia ser mais automatizado?
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm text-white  bg-[#212833] px-3 py-1 rounded-full shadow-md">
                    Sim, A Xplora faz isso por você!
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center"></CardBody>
    </Card>
  );
}
