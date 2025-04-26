'use client';

import { Thread } from './_type';
import React from 'react';

import { Loading } from '@/component';
import { useGetAllThreads } from '@/queries/thread';

interface IThreadCard {
  threads: Thread[];
}

const ThreadCard = ({ threads }: IThreadCard) => {
  if (!Array.isArray(threads) || threads.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1>No Data Available</h1>
      </div>
    );
  }

  return threads?.map((thread) => (
    <div key={thread.id} className="mb-4 rounded border p-4 shadow">
      <h2 className="text-xl font-semibold">{thread.title}</h2>
      <p className="mt-2 text-gray-700">{thread.thread}</p>
      <p className="mt-1 text-sm text-gray-500">
        Posted on {new Date(thread.created_at).toLocaleString()}
      </p>
    </div>
  ));
};

const ThreadList = () => {
  const { data: threads, isPending } = useGetAllThreads();

  if (isPending) {
    return <Loading />;
  }

  return <ThreadCard threads={threads as Thread[]} />;
};

export default ThreadList;
