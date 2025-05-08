import { Thread } from '@/app/home/_type';
import { getFetch, postFetch } from '@/utils/fetch';
import { useMutation, useQuery } from '@tanstack/react-query';

const getAllThreads = async (): Promise<ResponseStatus<Thread[]>> => {
  return getFetch('/api/thread');
};

const postThread = async (thread: Partial<Thread>): Promise<ResponseStatus<Partial<Thread>>> => {
  return postFetch('/api/thread', thread);
};

export const useGetAllThreads = () => {
  return useQuery({
    queryKey: ['getAllThreads'],
    queryFn: getAllThreads,
  });
};

export const usePostThread = () => {
  return useMutation({
    mutationFn: (newThread: Partial<Thread>) => postThread(newThread),
  });
};
  