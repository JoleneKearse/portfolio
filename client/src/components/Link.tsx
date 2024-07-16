type LinkProps = {
  text: string;
};

export function Link({ text }: LinkProps) {
  return (
    <a className="inline-block font-semibold tracking-wide hover:text-[#0000] transition ease-in cursor-pointer hover:bg-gradient-to-r from-pink-600 to-purple-500 hover:bg-clip-text hover:font-bold">
      {text}
    </a>
  );
}