import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a
      className="text-white text-base inline-block"
      target="_blank"
      href={href}
    >
      <h3 className="mb-4 md:mb-3">{children} ↗</h3>
    </a>
  );
};
