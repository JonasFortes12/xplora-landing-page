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
      
      
      <XploraHero/>
    </div>
  );
}
