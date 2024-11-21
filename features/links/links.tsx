import { List, Title, Items, Item, ItemTag } from '@/components/list';
import { ExternalLink } from '@/components/external-link';
import { links, type Link as LinkType } from './data';

export const Links = () => {
  return (
    <List>
      <Title>Links</Title>
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
      <ItemTag>{title}</ItemTag>
      <ExternalLink href={url}>{visibleUrl}</ExternalLink>
    </Item>
  );
};
