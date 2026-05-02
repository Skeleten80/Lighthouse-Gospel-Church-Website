export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  passage: string;
  duration?: string;
  featured?: boolean;
  tag?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Worship' | 'Community' | 'Youth' | 'Prayer' | 'Missions';
  recurring?: boolean;
}

export interface ServiceTime {
  day: string;
  time: string;
  type: string;
  location: string;
}
