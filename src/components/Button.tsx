import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
};

export function Button({ text, onClick, icon }: ButtonProps) {
  return (
    <div
      className="rounded-md bg-gradient-to-br from-pink-500 to-purple-600 px-[.095rem] py-[.06rem] transition ease-linear hover:shadow-md hover:shadow-purple-500"
      onClick={onClick}
    >
      <button className="rounded-md bg-neutral-700 px-4 py-2">{text}</button>
      {icon && <span className="ml-2">{icon}</span>}
    </div>
  );
}
