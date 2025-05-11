import { CircleX } from 'lucide-react';
import React from 'react';
import { Thread } from './_type';
import { cn } from '@/libs/cn';

interface EditPostProps extends Partial<Thread> {
  openEditForm: boolean;
  setOpenEditForm: () => void;
}

const EditPost = ({ openEditForm, setOpenEditForm, id, title, thread }: EditPostProps) => {
  return (
    <>
      <div className={cn(`modal`, openEditForm && 'modal-open')}>
        <div className="modal-box flex w-11/12 max-w-5xl flex-col gap-5 bg-white">
          <button
            title="close"
            className="btn btn-circle btn-ghost absolute top-2 right-2"
            onClick={setOpenEditForm}
          >
            <CircleX strokeWidth={3} />
          </button>

          <h2>{id}</h2>
          <h2>{title}</h2>
          <h2>{thread}</h2>
        </div>
      </div>
    </>
  );
};

export default EditPost;
