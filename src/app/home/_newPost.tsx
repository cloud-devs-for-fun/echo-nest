'use client';

import { cn } from '@/libs/cn';
import { CircleX, Plus } from 'lucide-react';
import React, { useState } from 'react';
import AddThreadForm from './_form';

const NewPost = () => {
  const [openPost, setOpenPost] = useState<boolean>(false);

  const handleOpenPost = () => {
    setOpenPost(!openPost);
  };

  return (
    <>
      <button
        onClick={handleOpenPost}
        className="btn lg:btn-wide w-full rounded-lg bg-(--background-dark) text-white"
      >
        <Plus /> New Post
      </button>

      <div className={cn(`modal`, openPost && 'modal-open')}>
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <button
            title="close"
            className="btn btn-circle btn-ghost absolute top-2 right-2"
            onClick={() => setOpenPost(!openPost)}
          >
            <CircleX strokeWidth={3} />
          </button>

          <AddThreadForm />
        </div>
      </div>
    </>
  );
};

export default NewPost;
