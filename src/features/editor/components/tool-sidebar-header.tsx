// import { ActiveTool } from "@/features/editor/types";

interface ToolSidebarHeaderProps {
  title: string;
  description: string;
}

export const ToolSidebarHeader = ({
  title,
  description,
}: ToolSidebarHeaderProps) => {
  return (
    <div className="p-4 border-b space-y-1 h-[68px]">
      {/* <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p> */}
        <p className="text-sm font-medium">
            {title}
        </p>
        {description && (
            <p className="text-xs  text-muted-foreground">
                {description}
            </p>
        )}

    </div>
  );
};