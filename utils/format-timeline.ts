export type Timeline = {
  start: number;
  end?: number | null;
};

export const formatTimeline = (timeline: Timeline) => {
  if (timeline.end === null) {
    return `Since ${timeline.start}`;
  }
  if (timeline.start === timeline.end) {
    return String(timeline.start);
  }

  return `${timeline.start} - ${timeline.end}`;
};
