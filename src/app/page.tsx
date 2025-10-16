import Benefits from "@/components/Benefits";
import XploraHero from "@/components/Hero";
import HowToUseTabs from "@/components/tabs"
import Features from "@/components/Features";
import Testimonials from "@/components/Testemonials";

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
      <Features></Features>
      <Testimonials></Testimonials>
      
      
    </div>
    
  );
}
