import { useCallback, useEffect } from "react";
import { fabric } from "fabric";

interface UseAutoResizeProps {
    canvas: fabric.Canvas | null;
    container: HTMLDivElement | null;
}

export const useAutoSize = ({ canvas, container }: UseAutoResizeProps) => {
    const autoZoom = useCallback(() => {
        if (!canvas || !container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        canvas.setWidth(width);
        canvas.setHeight(height);

        const center = canvas.getCenter();
        const zoomRatio = 0.85;
        const localWorkspace = canvas
            .getObjects()
            .find((obj) => obj.name === "clip");

        if (!localWorkspace) return; // Ensure localWorkspace exists

        // @ts-expect-error: findScaleToFit expects a fabric object and returns a scale factor
        const scale = fabric.util.findScaleToFit(localWorkspace, {
            width: width,
            height: height,
        });

        const zoom = zoomRatio * scale;

        canvas.setViewportTransform(fabric.iMatrix.concat());
        canvas.zoomToPoint(new fabric.Point(center.left, center.top), zoom);

        const workspaceCenter = localWorkspace.getCenterPoint();
        const viewportTransform = canvas.viewportTransform;

        if (canvas.width === undefined || canvas.height === undefined || !viewportTransform) return;

        viewportTransform[4] = canvas.width / 2 - workspaceCenter.x * viewportTransform[0];
        viewportTransform[5] = canvas.height / 2 - workspaceCenter.y * viewportTransform[3];

        canvas.setViewportTransform(viewportTransform);

        localWorkspace.clone((cloned: fabric.Rect) => {
            canvas.clipPath = cloned;
            canvas.requestRenderAll();
        });
    }, [canvas, container]);

    useEffect(() => {
        let resizeObserver: ResizeObserver | null = null;
        if (canvas && container) {
            resizeObserver = new ResizeObserver(() => {
                autoZoom();
            });
            resizeObserver.observe(container);
        }

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [canvas, container, autoZoom]);
};
