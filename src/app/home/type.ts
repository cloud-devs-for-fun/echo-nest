export interface Thread {
  id?: string;
  userId?: string;
  name: string;
  image: string;
  title?: string;
  thread: string;
  created_at: string;
}

export interface IThreadCard {
  threads: Thread[];
}
