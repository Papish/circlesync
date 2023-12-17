import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils";

const buttonVariants = cva(
  `font-bold rounded focus:ring-2 focus:ring-blue-300`,
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        danger: "bg-red-500",
        alert: "bg-yellow-500",
      },
      size: {
        normal: "py-2 px-4 text-sm",
        large: "text-xl py-3 px-6",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      size: "normal",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

const AppButton = forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { children, size, block, className, ...rest } = props;

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(buttonVariants({ className, size, block }))}
        role="button"
      >
        <span className="block leading-6 h-6">{children}</span>
      </button>
    );
  }
);

export default AppButton;
