import { projects, type Project as ProjectType } from './data';

export const Projects = () => {
  return (
    <section>
      <h2 className="text-white text-sm mb-8">Projects</h2>
      <ul className="flex flex-col p-0 gap-y-12">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

const Project = ({ timeline, title, url, description }: ProjectType) => {
  return (
    <li className="flex items-baseline flex-wrap md:flex-nowrap">
      <h4 className="grow-0 shrink-0 basis-36 text-slate-400 text-sm mb-2 md:mb-0">
        {timeline.start} - {timeline.end}
      </h4>
      <div>
        <a className="text-white text-sm inline-block mb-4 md:mb-3" target="_blank" href={url}>
          <h3>{title} ↗</h3>
        </a>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </li>
  );
};
