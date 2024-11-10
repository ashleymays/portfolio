import { List, Title, Items, Item } from '@/components/list';
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

const Project = ({ title, url, description, techStack }: ProjectType) => {
  return (
    <Item>
      <a
        className="text-white text-base inline-block mb-4 md:mb-3"
        target="_blank"
        href={url}
      >
        <h3>{title} ↗</h3>
      </a>
      <p className="text-neutral-400 text-base leading-relaxed">
        {description}
      </p>
      <p className="mt-4 text-neutral-500 text-base leading-relaxed">
        {techStack.join(' • ')}
      </p>
    </Item>
  );
};
