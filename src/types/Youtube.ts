export type Song = {
  id: number;
  title: string;
  artist: string;
  streamId: number;
  stream: Stream | null;
  time: string;
  published: boolean;
};

export type Stream = {
  id: number;
  videoId: string;
  title: string;
  date: Date;
};
