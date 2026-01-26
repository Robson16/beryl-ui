import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ComponentProps, ReactNode } from "react";

import { TooltipArrow, TooltipContent } from "./styles";

export interface TooltipProps extends Omit<
  ComponentProps<typeof RadixTooltip.Root>,
  "children"
> {
  children: ReactNode;
  content: string | ReactNode;
  contentProps?: Omit<ComponentProps<typeof RadixTooltip.Content>, "ref">;
}

export function Tooltip({
  children,
  content,
  contentProps,
  ...props
}: TooltipProps) {
  return (
    <RadixTooltip.Root {...props}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent sideOffset={5} {...contentProps}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

export const TooltipProvider = RadixTooltip.Provider;

Tooltip.displayName = "Tooltip";
