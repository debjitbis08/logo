import type { ValidComponent } from "solid-js";
import { splitProps, type Component } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as TooltipPrimitive from "@kobalte/core/tooltip";

import { cn } from "./cn";

export const Tooltip: Component<TooltipPrimitive.TooltipRootProps> = (props) => {
    return <TooltipPrimitive.Root gutter={4} {...props} />;
};

export const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps<T extends ValidComponent = "div"> = TooltipPrimitive.TooltipContentProps<T> & {
    class?: string | undefined;
};

export const TooltipContent = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, TooltipContentProps<T>>,
) => {
    const [local, others] = splitProps(props as TooltipContentProps, ["class"]);
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                class={cn(
                    "z-50 border border-main-border bg-main-background rounded-sm p-2 text-sm shadow-md max-w-[min(calc(100vw-16px),380px)]",
                    "data-[expanded]:animate-in data-[expanded]:fade-in data-[expanded]:zoom-in-95",
                    local.class,
                )}
                {...others}
            />
        </TooltipPrimitive.Portal>
    );
};

export const TooltipArrow = TooltipPrimitive.Arrow;
export const TooltipPortal = TooltipPrimitive.Portal;
