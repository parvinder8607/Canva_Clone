import { useCallback, useState, useMemo } from "react";
import {fabric} from "fabric";
import { useAutoSize } from "./use-auto-resize";
import { BuildEditorProps, Editor, CIRCLE_OPTIONS,  RECTANGLE_OPTIONS, TRIANGLE_OPTIONS,DIAMOND_OPTIONS } from "../types";

const buildEditor = ({
    canvas,
}: BuildEditorProps): Editor => {

    const getWorkspace = () => {
        return canvas.getObjects().find(
            (object) => object.type === "clip"
        );
        
    }

    const center = (object: fabric.Object) =>{
        const workspace = getWorkspace();
        const center = workspace?.getCenterPoint();

        if(!center){
            return;
        }
        // @ts-expect-error
        canvas._centerObject(object, center);
        // canvas.centerObject(object);
    }

    const addToCanvaas = (object: fabric.Object) => {
        center(object);
        canvas.add(object);
        canvas.setActiveObject(object);
    }
    return {
        addCircle: () =>{
           const object = new fabric.Circle({
            ...CIRCLE_OPTIONS,
           
           });
           addToCanvaas(object);
        },
        addSquare: () =>{
            const object = new fabric.Rect({
                ...RECTANGLE_OPTIONS,
                    rx: 30,
                    ry: 30,
                });
                canvas.add(object);
                canvas.setActiveObject(object);
                },
       addRectangle: () =>{
        const object = new fabric.Rect({
                ...RECTANGLE_OPTIONS,

               });
               canvas.add(object);
               canvas.setActiveObject(object);
       },
       addTriangle: () =>{
        const object = new fabric.Triangle({
            ...TRIANGLE_OPTIONS,
            });
            canvas.add(object);
            canvas.setActiveObject(object);
        },
       addInverseTriangle: () =>{
        const object = new fabric.Triangle({
            ...TRIANGLE_OPTIONS,
            angle: 180,
            });
            canvas.add(object);
            canvas.setActiveObject(object);
        },
        addDiamond: () =>{
            const object = new fabric.Triangle({
                ...DIAMOND_OPTIONS,
                });
                canvas.add(object);
                canvas.setActiveObject(object);
        },
       

       
    }
};

export const useEditor = () => {

    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useAutoSize({
        canvas,
        container,
    });
    const editor = useMemo(() => {
        if(canvas){
            return buildEditor({
                canvas,
            });
        }

        return undefined;
        
    }, [canvas]);
   

    const init = useCallback( (
        {
            initialCanvas,
            initialContainer,
        }: {
            initialCanvas: fabric.Canvas;
            initialContainer: HTMLDivElement;
        }
    ) => {

        fabric.Object.prototype.set({
            cornerColor: "#fff",
            cornerStyle: "circle",
            borderColor: "t#3b82f6",
            borderScaleFactor: 1,
            transparentCorners: false,
            borderOpacityWhenMoving: 1,
            cornerStrokeColor: "#3b82f6",

        })
        const initialWorkspace = new fabric.Rect({
            width: 900,
            height: 1200,
            name: "clip",
            fill: "white",
            selectable: false,
            hasControls: false,
            shadow: new fabric.Shadow({
                blur: 5,
                color: "rgba(0,0,0,0.8)",
            }),
        });


        initialCanvas.setWidth(initialContainer.offsetWidth);
        initialCanvas.setHeight(initialContainer.offsetHeight);

        initialCanvas.add(initialWorkspace);
        initialCanvas.centerObject(initialWorkspace);
        initialCanvas.clipPath = initialWorkspace;

        setCanvas(initialCanvas);
        setContainer(initialContainer);

       


    }, []);

    return {
        init,
        editor,
    };
}