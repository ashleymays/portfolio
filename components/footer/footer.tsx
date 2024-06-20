import type { ReactNode } from 'react';

export const Footer = () => {
  return (
    <footer className="text-neutral-400 text-sm leading-relaxed">
      Design inspired by the websites of{' '}
      <Link url="https://bonhomme.lol/">Maxime Bonhomme</Link>,{' '}
      <Link url="https://alexjpate.com/">Alex J. Pate</Link>, and{' '}
      <Link url="https://slrncl.com/">Nicolas Solerieu</Link>.
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
      className="duration-150	hover:text-white"
    >
      {children}
    </a>
  );
};
