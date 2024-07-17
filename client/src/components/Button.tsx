type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }): ButtonProps {
  return (
    <div
      className="px-[.095rem] py-[.06rem] rounded-md bg-gradient-to-br from-pink-500 to-purple-600 hover:shadow-md hover:shadow-purple-500 transition ease-linear"
      onClick={onClick}
    >
      <button className="px-4 py-2 rounded-md bg-neutral-700">{text}</button>
    </div>
  );
}
