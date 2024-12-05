import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color: string;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
