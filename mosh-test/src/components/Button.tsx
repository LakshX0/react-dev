import { ReactNode } from "react";

interface Props {
  btnColor: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ btnColor, children, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + btnColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
