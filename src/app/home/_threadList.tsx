'use client';

import { IThreadCard, Thread } from './_type';
import React from 'react';

import { Ellipsis, Heart, Share2, SquarePen, Trash2 } from 'lucide-react';
import size from 'lodash/size';

import { Avatar, Loading } from '@/component';
import { formattedDate } from '@/utils/helper';
import { DateFormat } from '@/utils/enums';
import { useGetAllThreads } from '@/queries/thread';

import Comments from './_comments';

const ThreadCards = ({ id, name, image, title, thread, created_at }: Thread) => {
  const renderThreadParagraph =
    size(thread) >= 100 ? `${thread.slice(0, 450)}... see more` : thread;

  const handleEdit = (threadId: string) => {
    console.log('ID EDIT:', threadId);
  };

  const handleDelete = (threadId: string) => {
    console.log('ID DELETE:', threadId);
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar type="image" src={image} alt={image ?? name} className="w-10" />
          <p className="text-gray-700">{name}</p>
        </div>

        <div className="dropdown dropdown-end">
          <button title="options" className="btn btn-ghost btn-square font-bold">
            <Ellipsis />
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content menu z-1 w-24 rounded-lg bg-white p-1 shadow-sm outline"
            aria-labelledby="options"
          >
            <li className="w-full">
              <button
                className="btn btn-ghost btn-xs text-primary justify-between"
                onClick={() => handleEdit(id as string)}
              >
                Edit
                <SquarePen size={16} />
              </button>
            </li>
            <li className="w-full">
              <button
                className="btn btn-ghost btn-xs text-error justify-between"
                onClick={() => handleDelete(id as string)}
              >
                Delete
                <Trash2 size={16} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const renderActions = () => {
    return (
      <div className="card-actions items-center justify-end">
        <button className="btn btn-sm btn-outline">
          <Heart strokeWidth={3} size={16} fill="red" color="red" /> 1.1k
        </button>
        <Comments />
        <button className="btn btn-sm btn-outline">
          <Share2 strokeWidth={3} size={16} color="orange" />
          1.1k
        </button>
      </div>
    );
  };

  return (
    <div className="card card-xl card-border h-full w-full overflow-hidden bg-gray-100 shadow-lg lg:h-[500px]">
      <div className="card-body gap-3">
        {renderHeader()}

        <div>
          <h2 className="card-title w-full">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">
            Posted on {formattedDate(created_at, DateFormat.DEFAULT)}
          </p>
        </div>

        <div className="h-full flex-wrap">
          <p className="text-gray-700">{renderThreadParagraph}</p>
        </div>

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
  const { data: threads, isPending } = useGetAllThreads();

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <Threads threads={threads?.data as Thread[]} />
    </>
  );
};

export default ThreadList;
