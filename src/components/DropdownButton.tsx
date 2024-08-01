import { FaChevronDown } from "react-icons/fa6";

type DropdownButtonProps = {
  text: string;
  onClick: () => void;
};

export function DropdownButton({ text, onClick }: DropdownButtonProps) {
  return (
    <button className="w-1/3 text-left text-purple-300 hover:text-neutral-500" onClick={onClick}>
      Read {text} <FaChevronDown className="inline-block mb-1 ml-4" />
    </button>
  );
}
