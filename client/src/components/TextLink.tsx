type TextLinkProps = {
  text: string;
  tabIndex: number;
};

export function TextLink({ text, tabIndex }: TextLinkProps) {
  return (
    <a className="inline-block font-semibold tracking-wide hover:text-[#0000] transition ease-in cursor-pointer hover:bg-gradient-to-r from-pink-600 to-purple-500 hover:bg-clip-text hover:font-bold" tabIndex={tabIndex}>
      {text}
    </a>
  );
}
