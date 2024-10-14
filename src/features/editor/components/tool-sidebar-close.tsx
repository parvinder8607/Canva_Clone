import { ChevronLeft } from "lucide-react";

interface ToolSidebarCloseProps {
  onclick: () => void;
}

export const ToolSidebarClose = ({ onclick }: ToolSidebarCloseProps) => {
  return (
    <button
      onClick={onclick}
    //   className="absolute top-4 right-4 p-1 rounded-sm bg-muted hover:bg-muted-foreground"
        className="absolute -right-[1.80rem] h-[70px] bg-white top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-r-xl px-1 pr-2 border-r border-y group"
    >
      <ChevronLeft className="size-4 text-black group-hover:opacity-75 transition" />
    </button>
  );
};