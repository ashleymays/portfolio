import type { Timeline } from '@/utils/format-timeline';

export type Job = {
  title: string;
  description: string;
  timeline: Timeline;
};

export const jobs: Job[] = [
  {
    title: 'Software Developer @ Siemens',
    description:
      'Build and maintain high-traffic logistics software for companies around the world. Work closely with project managers and fellow developers to create performant real-time applications.',
    timeline: {
      start: 2023,
      end: null
    }
  }
];
