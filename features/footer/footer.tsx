import type { ReactNode } from 'react';

export const Footer = () => {
  return (
    <footer className="mb-12 text-neutral-400 text-sm leading-relaxed">
      Design inspired by the websites of{' '}
      <Link url="https://www.graz.io//">Sebastian Graz</Link> and{' '}
      <Link url="https://rsms.me//">Rasmus Andersson</Link>.
    </footer>
  );
};

type LinkProps = {
  url: string;
  children: ReactNode;
};

const Link = ({ url, children }: LinkProps) => {
  return (
    <a
      target="_blank"
      href={url}
      className="hover:text-white"
    >
      {children}
    </a>
  );
};
