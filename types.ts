
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  youtubeId: string;
  audioUrl?: string;
  thumbnail?: string;
  duration?: string;
  featured?: boolean;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Worship' | 'Community' | 'Youth' | 'Mission';
}

export interface ServiceTime {
  day: string;
  time: string;
  type: string;
  location: string;
}
