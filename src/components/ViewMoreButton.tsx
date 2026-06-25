import Link from "next/link";

interface ViewMoreButtonProps {
  href: string;
  label?: string;
  external?: boolean;
}

export function ViewMoreButton({ href, label = "VIEW ALL", external = false }: ViewMoreButtonProps) {
  const className =
    "group relative inline-block w-32 text-center font-libre tracking-widest text-[0.95em] leading-[3]";

  const inner = (
    <>
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-0 h-px w-full bg-[#333]" />
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full z-20" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
