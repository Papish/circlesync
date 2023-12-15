import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils";

const buttonVariants = cva(
  `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
  {
    variants: {
      variant: {
        primary: "bg-blue-400",
        danger: "bg-red-500",
        alert: "bg-yellow-500",
      },
      size: {
        small: "py-2 px-4",
        large: "text-xl py-3 px-6",
      },
    },
    defaultVariants: {
      size: "small",
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
    const { children, size, className, ...rest } = props;

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(buttonVariants({ className, size }))}
        role="button"
      >
        {children}
      </button>
    );
  }
);

export default AppButton;
