import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  
  export interface HintProps{
    label:string;
    children:  React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
  }

  export const Hint = ({
    label,
    children,
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
  }: HintProps) => {
    return (
      <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
        <TooltipContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} 
            className="text-white bg-slate-800 border-slate-800">
            <p className="font-semibold text-sm capitalize">
                {label.toLowerCase()}
        </p>
        </TooltipContent>
        </Tooltip>
        </TooltipProvider>
    )
  }
  