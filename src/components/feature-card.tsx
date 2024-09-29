import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  src?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function FeatureCard({
  title,
  description,
  src,
  className,
  size = "medium",
}: FeatureCardProps) {
  const sizes = {
    small: "w-32 h-32",
    medium: "h-[200px] w-[300px]",
    large: "h-[400px] w-[300px]",
  };

  return (
    <div
      className={cn(
        `flex flex-col p-8 border rounded-xl ${sizes[size]}`,
        className
      )}
    >
      <div className="space-y-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        {src && (
          <Image
            src={`/_static/${src}`}
            alt="feature-card"
            width={120}
            height={120}
          />
        )}
      </div>
    </div>
  );
}
