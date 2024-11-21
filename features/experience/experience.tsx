import { List, Title, Items, Item, ItemTag } from '@/components/list';
import { formatTimeline } from '@/utils/format-timeline';
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
      <ItemTag>{formatTimeline(timeline)}</ItemTag>
      <div>
        <h3 className="text-sm mb-4 md:mb-3">{title}</h3>
        <p className="text-neutral-400 text-sm">{description}</p>
      </div>
    </Item>
  );
};
