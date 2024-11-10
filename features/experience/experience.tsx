import { List, Title, Items, Item } from '@/components/list';
import { jobs, type Job as JobType } from './data';

export const Experience = () => {
  return (
    <List>
      <Title>Experience</Title>
      <Items>
        {jobs.map((job) => (
          <Job
            key={job.title}
            {...job}
          />
        ))}
      </Items>
    </List>
  );
};

const Job = ({ timeline, title, description }: JobType) => {
  return (
    <Item>
      <div className="flex items-baseline justify-between">
        <h3 className="text-base mb-4 md:mb-3">{title}</h3>
        <h4 className="grow-0 shrink-0 basis-36 text-neutral-400 text-base mb-2 md:mb-0">
          {timeline.start} - {timeline.end}
        </h4>
      </div>
      <p className="text-neutral-400 text-base leading-relaxed">
        {description}
      </p>
    </Item>
  );
};
