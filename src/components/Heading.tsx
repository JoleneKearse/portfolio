type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  return (
    <header className="py-20">
      <h1 className="leading-12 text-balance bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text pb-2 font-alegreya text-6xl font-extrabold text-neutral-alpha subpixel-antialiased">
        {text}
      </h1>
    </header>
  );
}
