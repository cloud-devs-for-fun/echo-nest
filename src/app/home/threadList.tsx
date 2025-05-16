'use client';

import { IThreadCard, Thread } from './type';
import React from 'react';

import { useGetAllThreads } from '@/queries/thread';
import { Loading } from '@/component';

import ThreadCards from './threadCards';

const Threads = ({ threads }: IThreadCard) => {
  if (!Array.isArray(threads) || threads.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1>No Data Available</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {threads?.map((thread) => (
        <ThreadCards
          key={thread.id}
          id={thread.id}
          name={thread.name}
          image={thread.image}
          title={thread.title}
          thread={thread.thread}
          created_at={thread.created_at}
        />
      ))}
    </div>
  );
};

const ThreadList = () => {
  const { data: threads, isPending, refetch } = useGetAllThreads();

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <Threads threads={threads?.data as Thread[]} refetch={refetch} />
    </>
  );
};

export default ThreadList;
