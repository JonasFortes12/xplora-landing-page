import {Card, CardHeader, CardBody} from "@heroui/card";
import Image from "next/image";



export default function App() {
  return (
    <Card className="py-4 bg-red-900 mt-10 rounded-2xl text-white">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Olá!</p>
        <small className="text-default-500">Está é uma utilização de Hero UI</small>
        <h4 className="font-bold text-large">Card Heroui</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/Images/Interior.png"
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
