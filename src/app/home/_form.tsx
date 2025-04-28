'use client';

import { usePostThread } from '@/queries/thread';
import React, { useState } from 'react';

const AddThreadForm = () => {
  const [title, setTitle] = useState('');
  const [thread, setThread] = useState('');
  const { mutate, isPending, isSuccess, isError, error } = usePostThread();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        title,
        thread,
      },
      {
        onSuccess: () => {
          setTitle('');
          setThread('');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pb-4">
      <h2 className="text-xl font-semibold">Create a New Thread</h2>

      <div>
        <label className="mb-1 block text-sm font-medium">Title</label>
        <input
          type="text"
          className="input input-neutral w-full bg-transparent"
          placeholder="Please type here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Thread</label>
        <textarea
          className="textarea textarea-neutral w-full bg-transparent"
          placeholder="Please type here..."
          value={thread}
          onChange={(e) => setThread(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          disabled={title === '' || thread === ''}
          className="btn btn-neutral roundedlg text-sm normal-case"
        >
          {isPending ? <span className="loading loading-bars loading-xl" /> : 'Create New Thread'}
        </button>

        {isSuccess && <p className="text-green-500">Thread posted successfully!</p>}
        {isError && <p className="text-red-500">Error: {(error as Error).message}</p>}
      </div>
    </form>
  );
};

export default AddThreadForm;
