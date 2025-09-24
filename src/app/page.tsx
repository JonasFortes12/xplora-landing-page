import Image from "next/image";
import Benefits from "@/components/Benefits";
import XploraHero from "@/components/Hero";
import HowToUseTabs from "@/components/tabs"

import {
  Card,
  CardContent,
  CardDescription,  
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tab } from "@heroui/tabs"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <XploraHero/>
      <Benefits/>
      <HowToUseTabs></HowToUseTabs>
      
      
    </div>
    
  );
}
