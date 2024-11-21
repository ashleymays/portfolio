import type { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col items-baseline justify-between">
      {children}
    </section>
  );
};

export const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="pb-8 md:mb-auto text-base">{children}</h2>;
};

type ItemsProps = {
  children: ReactNode;
  spacing?: 'tight' | 'normal';
};

export const Items = ({ children, spacing = 'normal' }: ItemsProps) => {
  return (
    <ul
      className={`w-full flex flex-col ${spacing === 'tight' ? 'gap-y-4' : 'gap-y-12'}`}
    >
      {children}
    </ul>
  );
};

export const Item = ({ children }: { children: ReactNode }) => {
  return (
    <li className="flex-1 flex items-baseline flex-wrap md:flex-nowrap">
      {children}
    </li>
  );
};

export const ItemTag = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="grow-0 shrink-0 basis-36 text-neutral-400 text-base mb-2 md:mb-0">
      {children}
    </h4>
  );
};
