"use client";


import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/ui/hint";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Download, MousePointerClick, Redo2, Undo2 } from "lucide-react";
import { BsCloudCheck } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { PiFileJpg, PiFilePng, PiFileSvg } from "react-icons/pi";
import { ActiveTool } from "../types";
import { cn } from "@/lib/utils";



interface NavbarProps {
    activeTool: ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void;
}



export const Navbar = ({
    activeTool,
    onChangeActiveTool,
}: NavbarProps) =>{

    return (
        <nav>
        <div className="flex items-center justify-between p-4 h-[68px] gap-x-8 border-b">
            
                <div className="flex items-center gap-x-6 h-full">
                   
                    <div className="text-sm font-medium">
                        <Logo />
                    </div>
                    <div className="w-full flex items-center gap-x-1 h-full">
                        <DropdownMenu modal={false} >
                            <DropdownMenuTrigger asChild>
                                <Button variant={"secondary"}>
                                    File
                                    <ChevronDown className="size-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent  align="start" className="min-w-60">
                                <DropdownMenuItem className="flex items-center gap-x-2"> 
                                    <CiFileOn className="size-8" />
                                    <div>
                                        <p>Open</p>
                                        <p className="text-xs text-muted-foreground">
                                            Open JSON file
                                        </p>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Separator orientation="vertical" className="mx-2"/>
                        <Hint label="Select" side="bottom" align="start" sideOffset={10}>
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={()=>{onChangeActiveTool("select")}} 
                        className={cn(activeTool === "select" && "bg-gray-100")}   // TODO add dynamic class
                        > 
                            <MousePointerClick className="size-4" />
                        </Button>
                        </Hint>
                        <Hint label="Undo" side="bottom" align="start" sideOffset={10}>
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={()=>{}} //TODO: add dynamic function
                        className=""    // TODO add dynamic class
                        > 
                            <Undo2 className="size-4" />
                        </Button>
                        </Hint>
                        <Hint label="Redo" side="bottom" align="start" sideOffset={10}>
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={()=>{}} //TODO: add dynamic function
                        className=""    // TODO add dynamic class
                        > 
                            <Redo2 className="size-4" />
                        </Button>
                        </Hint>
                        <Separator orientation="vertical" className="mx-2"/>

                        <div className="flex items-end gap-x-2">
                            <BsCloudCheck className="size-[20px] text-muted-foreground" />
                            <p className="text-sm font-medium text-muted-foreground">
                                Saved
                                </p>
                        </div>
                    </div>
                </div>
                        <div className="ml-auto flex items-center gap-x-4">
                            <DropdownMenu modal={false} >
                                <DropdownMenuTrigger asChild>
                                  <Button size="sm" variant="ghost">
                                    Export
                                    <Download className="size-4 ml-2" />
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent  align="end" className="min-w-60">
                                    <DropdownMenuItem className="flex items-center gap-x-2">
                                        <CiFileOn className="size-8" />
                                        <div>
                                            <p>JSON</p>
                                            <p className="text-xs text-muted-foreground">
                                               Save for later editing
                                                </p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-x-2">
                                        <PiFilePng className="size-8" />
                                        <div>
                                            <p>PNG</p>
                                            <p className="text-xs text-muted-foreground">
                                              Share with your friends
                                                </p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-x-2">
                                        <PiFileJpg className="size-8" />
                                        <div>
                                            <p>JPG</p>
                                            <p className="text-xs text-muted-foreground">
                                              Share with your friends
                                                </p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-x-2">
                                        <PiFileSvg className="size-8" />
                                        <div>
                                        
                                            <p>SVG</p>
                                            <p className="text-xs text-muted-foreground">
                                              Share with your friends
                                                </p>
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
        </div>
        </nav>
           )
}