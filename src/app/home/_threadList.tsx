'use client';

import { IThreadCard, Thread } from './_type';
import React from 'react';

import Image from 'next/image';
import { Heart, MessageSquareMore, Share } from 'lucide-react';
import size from 'lodash/size';

import { Loading } from '@/component';

import { formattedDate } from '@/utils/helper';
import { DateFormat } from '@/utils/enums';

import { useGetAllThreads } from '@/queries/thread';

const ThreadCards = ({ name, image, title, thread, created_at }: Thread) => {
  const renderThreadParagraph =
    size(thread) >= 100 ? `${thread.slice(0, 600)}... see more` : thread;

  const renderActions = () => {
    return (
      <div className="card-actions items-center justify-end">
        <button className="btn btn-sm btn-outline">
          <Heart strokeWidth={1} size={16} /> 1.1k
        </button>
        <button className="btn btn-sm btn-outline">
          <MessageSquareMore strokeWidth={1} size={16} /> 1.1k
        </button>
        <button className="btn btn-sm btn-outline">
          <Share strokeWidth={1} size={16} />
          1.1k
        </button>
      </div>
    );
  };

  return (
    <div className="card card-xl card-border h-[500px] w-full bg-white shadow-lg">
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar avatar-placeholder">
            <div className="w-10 rounded-full ring ring-purple-500 ring-offset-2">
              <Image src={image} alt={image ?? name} height={250} width={250} />
            </div>
          </div>
          <p className="text-gray-700">{name}</p>
        </div>

        <div>
          <h2 className="card-title w-full">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">
            Posted on {formattedDate(created_at, DateFormat.WEEKDAY)}
          </p>
        </div>

        <p className="text-gray-700">{renderThreadParagraph}</p>

        {renderActions()}
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
    <div className="grid grid-cols-2 gap-5">
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
