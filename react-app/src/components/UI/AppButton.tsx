interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const AppButton = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};

export default AppButton;
