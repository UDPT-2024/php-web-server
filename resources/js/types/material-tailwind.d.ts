// material-tailwind.d.ts
import {} from "@material-tailwind/react";

type EventCapture = {
    onPointerEnterCapture?: unknown;
    onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
    export interface ButtonProps extends EventCapture {
        placeholder?: unknown;
    }
    export interface InputProps extends EventCapture {
        crossOrigin?: unknown;
    }
    export interface SelectProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface TypographyProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface CardProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface CardHeaderProps extends EventCapture {
        placeholder?: unknown;
    }
    export interface CardBodyProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface CardFooterProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface IconButtonProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface AvatarProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface MenuProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface NavbarProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface CarouselProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface PopoverContentProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface TabsHeaderProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface TabsBodyProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface TabProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface BreadcrumbsProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface DialogBodyProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface DialogHeaderProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface DialogFooterProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface DialogProps extends EventCapture {
        placeholder?: unknown;
    }

    export interface CheckboxProps extends EventCapture {
        placeholder?: unknown;
    }
    // more...
}
