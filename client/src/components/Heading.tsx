type HeadingProps = {
  text: string;
}

export function Heading({ text }: HeadingProps) {
  return (
    <header className="py-20">
      <h1 className="text-6xl subpixel-antialiased font-extrabold leading-12 text-neutral-alpha bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text font-alegreya">
        {text}
      </h1>
    </header>
  );
}
