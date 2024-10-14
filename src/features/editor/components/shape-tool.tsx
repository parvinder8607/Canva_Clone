import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react"; 

import { cn } from "@/lib/utils";

interface ShapeToolProps {
  icon: IconType | LucideIcon;
  onClick: () => void;
  iconClassName?: string;
 
}

export  const ShapeTool = ({
    icon: Icon,
    onClick,
    iconClassName,
    
}: ShapeToolProps) => {
  return (
    <button
    onClick={onClick}
    className="aspect-square border rounded-md p-5">
        <Icon className={cn("h-full w-full", iconClassName)} />
    </button>
  );
};