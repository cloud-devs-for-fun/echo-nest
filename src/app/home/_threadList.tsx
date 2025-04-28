'use client';

import { IThreadCard, Thread } from './_type';
import React from 'react';

import { Loading } from '@/component';
import { useGetAllThreads } from '@/queries/thread';
import Image from 'next/image';

const ThreadCards = ({ name, image, title, thread, created_at }: Thread) => {
  return (
    <div className="card card-xl card-border w-full bg-white shadow-lg">
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar avatar-placeholder">
            <div className="ring-offset-base-100 bg-neutral text-neutral-content w-10 rounded-full ring ring-purple-700 ring-offset-2">
              <Image src={image} alt={image ?? 'User avatar'} height={250} width={250} />
            </div>
          </div>
          <p className="text-gray-700">{name}</p>
        </div>

        <h2 className="card-title">{title}</h2>
        <p className="mt-2 text-gray-700">{thread}</p>
        <p className="mt-1 text-sm text-gray-500">
          Posted on {new Date(created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const Threads = ({ threads }: IThreadCard) => {
  if (!Array.isArray(threads) || threads.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1>No Data Available</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      {threads?.map((thread) => (
        <ThreadCards
          key={thread.id}
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
  const { data: threads, isPending } = useGetAllThreads();

  if (isPending) {
    return <Loading />;
  }

  return <Threads threads={threads as Thread[]} />;
};

export default ThreadList;
