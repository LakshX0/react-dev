import { ReactNode } from "react";

interface Props {
  btnColor: string;
  children: ReactNode;
}

const Button = ({ btnColor, children }: Props) => {
  return (
    <button type="button" className={"btn btn-" + btnColor}>
      {children}
    </button>
  );
};

export default Button;
