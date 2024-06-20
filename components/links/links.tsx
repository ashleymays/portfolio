import { links, type Link as LinkType } from './data';

export const Links = () => {
  return (
    <section>
      <h2 className="text-white text-sm mb-8">Links</h2>
      <ul className="flex flex-col p-0 gap-y-4">
        {links.map((link) => (
          <Link
            key={link.url}
            {...link}
          />
        ))}
      </ul>
    </section>
  );
};

const Link = ({ url, title, visibleUrl }: LinkType) => {
  return (
    <li className="flex items-baseline flex-col md:flex-row">
      <h4 className="grow-0 shrink-0 basis-6 md:basis-36 text-neutral-400 text-sm mb-2 md:mb-0">
        {title}
      </h4>
      <a
        className="text-white text-sm inline-block"
        target="_blank"
        href={url}
      >
        <h3 className="mb-4 md:mb-3">{visibleUrl} ↗</h3>
      </a>
    </li>
  );
};
