import type { JSX } from "solid-js";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from "./generic/Tooltip.jsx";

export default function ActionButton(props: {
    icon: JSX.Element;
    onClick: () => void;
    text?: string;
    title?: string;
    shortcut?: string;
    class?: string;
    titlePlacement?: "top" | "right" | "left" | "bottom";
    isHidden?: boolean;
    disabled?: boolean;
}) {
    return (
        <Tooltip placement={props.titlePlacement || "bottom"}>
            <TooltipTrigger
                class={`${props.isHidden ? "hidden" : ""} tooltip__trigger cursor-pointer rounded bg-inactive-background hover:bg-active-background border border-inactive-border hover:border-active-border ${props.class || ""}`}
                onClick={props.onClick}
                disabled={props.disabled || props.isHidden}
            >
                <div class="px-2 py-2 flex items-center gap-2 ">
                    <span>{props.icon}</span>
                    {props.text ? <span class="text-primary-foreground text-base">{props.text}</span> : null}
                </div>
            </TooltipTrigger>
            <TooltipPortal>
                <TooltipContent class="tooltip__content">
                    <TooltipArrow />
                    <div class="flex items-center gap-2">
                        <p>{props.title}</p>
                        {props.shortcut ? (
                            <span class="text-xs bg-secondary-background py-1 px-2 rounded-sm">{props.shortcut}</span>
                        ) : null}
                    </div>
                </TooltipContent>
            </TooltipPortal>
        </Tooltip>
    );
}
