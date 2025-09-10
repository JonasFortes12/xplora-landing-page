import Image from "next/image";
import App from "@/components/ui/HeroCard";
import XploraHero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,  
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      
      
      <XploraHero />

      
      <Button className="mt-10">Botão teste do Shadcnui</Button>

      <div className="justify-between sm:mt-px100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Exemplo Shadcnui</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <App />
      </div>

      
    </div>
  );
}
