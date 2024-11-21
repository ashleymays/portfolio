import type { ReactNode } from 'react';

export const Footer = () => {
  return (
    <footer className="mb-12 text-neutral-400 text-sm">
      Design inspired by the websites of{' '}
      <Link url="https://read.cv/manuelmoreale/">Manuel Moreale</Link> and{' '}
      <Link url="https://bonhomme.lol/">Maxime Bonhomme</Link>.
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
