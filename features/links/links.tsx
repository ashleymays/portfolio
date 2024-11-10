import { List, Title, Items, Item } from '@/components/list';
import { links, type Link as LinkType } from './data';

export const Links = () => {
  return (
    <List>
      <Title>Contact Me</Title>
      <Items spacing="tight">
        {links.map((link) => (
          <Link
            key={link.url}
            {...link}
          />
        ))}
      </Items>
    </List>
  );
};

const Link = ({ url, title, visibleUrl }: LinkType) => {
  return (
    <Item>
      <h4 className="grow-0 shrink-0 basis-6 md:basis-36 text-neutral-400 text-base">
        {title}
      </h4>
      <a
        className="text-white text-base inline-block"
        target="_blank"
        href={url}
      >
        <h3>{visibleUrl} ↗</h3>
      </a>
    </Item>
  );
};
