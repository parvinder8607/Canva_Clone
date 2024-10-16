import { fabric } from "fabric";

export type ActiveTool =
"select"
| "shapes"
| "text"
| "images"
| "draw"
| "fill"
| "stroke-color"
| "stroke-width"
| "font"
| "opacity"
| "filter"
| "settings"
| "ai"
| "remove-bg"
| "templates";

export const FILL_COLOR = "rgba(0, 0, 0, 0.5)";
export const STROKE_COLOR = "rgba(0, 0, 0, 0.5)";
export const STROKE_WIDTH = 2;

export const CIRCLE_OPTIONS = {
    radius:150,
    left: 100, 
    top: 100,
    fill: FILL_COLOR,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,

}



export const RECTANGLE_OPTIONS = {
    width: 400,
    height: 400,
    left: 100,
    top: 100,
    fill: FILL_COLOR,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
}
export const TRIANGLE_OPTIONS = {
    width: 150,
    height: 150,
    left: 100,
    top: 100,
    fill: FILL_COLOR,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
}
export const DIAMOND_OPTIONS = {
    width: 400,
    height: 400,
    left: 100,
    top: 100,
    fill: FILL_COLOR,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
}


export type BuildEditorProps = {
    canvas: fabric.Canvas
}

export interface Editor{
    addCircle: () => void;
    addSquare: () => void;
    addRectangle: () => void;
    addTriangle: () => void;
    addInverseTriangle: () => void;
    addDiamond: () => void;

}