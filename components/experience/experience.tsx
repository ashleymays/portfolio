import { jobs, type Job as JobType } from './data';

export const Experience = () => {
  return (
    <section>
      <h2 className="text-white text-sm mb-8">Work</h2>
      <ul className="flex flex-col p-0 gap-y-12">
        {jobs.map((job) => (
          <Job key={job.title} {...job} />
        ))}
      </ul>
    </section>
  );
};

const Job = ({ timeline, title, description }: JobType) => {
  return (
    <li className="flex items-baseline flex-wrap md:flex-nowrap">
      <h4 className="grow-0 shrink-0 basis-36 text-slate-400 text-sm mb-2 md:mb-0">
        {timeline.start} - {timeline.end}
      </h4>
      <div>
        <h3 className="text-white text-sm mb-4 md:mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </li>
  );
};
