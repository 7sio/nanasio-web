export interface TimelineEvent {
  month: string;
  title: string;
  description: string;
}

export interface TimelineYear {
  year: string;
  events: TimelineEvent[];
}
