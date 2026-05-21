export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  youtubeId: string;
}

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Divine Purpose',
    preacher: 'Pastor Lawrence Oluwadare',
    date: 'May 12, 2025',
    youtubeId: 'dQw4w9WgXcQ', // replace with real YouTube video ID
  },
  {
    id: '2',
    title: 'The Power of Intercession',
    preacher: 'Pastor Lawrence Oluwadare',
    date: 'May 5, 2025',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Faith That Moves Mountains',
    preacher: 'Pastor Lawrence Oluwadare',
    date: 'April 28, 2025',
    youtubeId: 'dQw4w9WgXcQ',
  },
];
