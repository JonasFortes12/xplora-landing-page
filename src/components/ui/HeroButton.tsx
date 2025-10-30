import { Button } from "@heroui/button";

interface HeroButtonProps {
  label: string; 
  className?: string;
}

export default function HeroButton({ label, className }: HeroButtonProps) {
  return (
    <Button
      className={`bg-blue-600 rounded-sm w-40 text-white cursor-pointer hover:scale-105 transition-all hover:bg-blue-700 ${className || ""}`}
    >
      {label}
    </Button>
  );
}
