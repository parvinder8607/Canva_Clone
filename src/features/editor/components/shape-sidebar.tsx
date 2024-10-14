import { cn } from "@/lib/utils";
import { ActiveTool, Editor } from "../types";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ShapeTool } from "./shape-tool";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";

interface ShapeSidebarProps {
    editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ShapeSidebar = ({
    editor,
    activeTool,
    onChangeActiveTool,
}: ShapeSidebarProps) => {


    const onClose = () => {
        onChangeActiveTool("select");
    }

    return(
        <aside
        className={cn( "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col ", 
        activeTool === "shapes" ? "visible": "hidden")}>
            <ToolSidebarHeader 
            title="Shapes"
            description="Select a shape from the list"
            />
            <ScrollArea>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <ShapeTool 
                    onClick={() => { editor?.addSquare()}}
                    icon = {FaSquare} />
                    <ShapeTool 
                    onClick={() => {editor?.addCircle()}}
                    icon = {FaCircle} />
                    <ShapeTool 
                    onClick={() => {editor?.addRectangle()}}
                    icon = {FaSquareFull} />
                    <ShapeTool 
                    onClick={() => {editor?.addTriangle()}}
                    icon = {IoTriangle} />
                    <ShapeTool 
                    onClick={() => {editor?.addInverseTriangle()}}
                    icon = {IoTriangle}
                    iconClassName="rotate-180" />
                    <ShapeTool 
                    onClick={() => {editor?.addDiamond()}}
                    icon = {FaDiamond}
                     />
                </div>
            </ScrollArea>
            <ToolSidebarClose onclick={onClose} />
        </aside>
    )
}