import type { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col md:flex-row items-baseline justify-between">
      {children}
    </section>
  );
};

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="flex-none md:flex-1 text-xl md:text-2xl font-medium tracking-wide mb-14 md:mb-auto">
      {children}
    </h2>
  );
};

type ItemsProps = {
  children: ReactNode;
  spacing?: 'normal' | 'tight';
};

export const Items = ({ children, spacing = 'normal' }: ItemsProps) => {
  return (
    <ul
      className={`flex-1 flex flex-col p-0 gap-y-16 ${spacing === 'tight' ? 'gap-y-8' : 'gap-y-16'}`}
    >
      {children}
    </ul>
  );
};

export const Item = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};
