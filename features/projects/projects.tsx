import { List, Title, Items, Item, ItemTag } from '@/components/list';
import { ExternalLink } from '@/components/external-link';
import { formatTimeline } from '@/utils/format-timeline';
import { projects, type Project as ProjectType } from './data';

export const Projects = () => {
  return (
    <List>
      <Title>Projects</Title>
      <Items>
        {projects.map((project) => (
          <Project
            key={project.title}
            {...project}
          />
        ))}
      </Items>
    </List>
  );
};

const Project = ({ timeline, title, url, description }: ProjectType) => {
  return (
    <Item>
      <ItemTag>{formatTimeline(timeline)}</ItemTag>
      <div>
        <ExternalLink href={url}>{title}</ExternalLink>
        <p className="text-neutral-400 text-base">{description}</p>
      </div>
    </Item>
  );
};
