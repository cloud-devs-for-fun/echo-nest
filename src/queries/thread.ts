import { Thread } from '@/app/home/type';

import { useMutation, useQuery } from '@tanstack/react-query';

import { deleteFetch, getFetch, postFetch, putFetch } from '@/utils/fetch';

const getAllThreads = async (): Promise<ResponseStatus<Thread[]>> => {
  return getFetch('/api/thread');
};

const postThread = async (thread: Partial<Thread>): Promise<ResponseStatus<Partial<Thread>>> => {
  return postFetch('/api/thread', thread);
};

const putThread = async (thread: Partial<Thread>): Promise<ResponseStatus<Partial<Thread>>> => {
  return putFetch(`/api/thread?id=${thread.id}`, thread);
};

const deleteThread = async (threadId: string): Promise<ResponseStatus<Partial<Thread>>> => {
  return deleteFetch(`/api/thread?id=${threadId}`, threadId);
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

export const usePutThread = () => {
  return useMutation({
    mutationFn: (editThread: Partial<Thread>) => putThread(editThread),
  });
};

export const useDeleteThread = () => {
  return useMutation({
    mutationFn: (thread: string) => deleteThread(thread),
  });
};
