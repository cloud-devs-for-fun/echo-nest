export interface Thread {
  id?: string;
  name: string;
  image: string;
  title: string;
  thread: string;
  created_at: string;
}

export interface IThreadCard {
  threads: Thread[];
}
