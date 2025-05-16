import React from 'react';
import { CircleX } from 'lucide-react';

import { cn } from '@/libs/cn';
import { Thread } from './type';

interface ConfirmDelete extends Partial<Thread> {
  isDelete: boolean;
  onClose: () => void;
  confirmDelete: () => void;
}

const Delete = ({ isDelete, onClose, confirmDelete, id }: ConfirmDelete) => {
  return (
    <div className={cn(`modal`, isDelete && 'modal-open')}>
      <div className="modal-box flex w-11/12 flex-col gap-5 bg-white">
        <button
          title="close"
          className="btn btn-circle btn-ghost absolute top-2 right-2"
          onClick={onClose}
        >
          <CircleX strokeWidth={3} />
        </button>

        <h3 className="text-lg font-semibold text-gray-900"> Are you sure you want to remove?</h3>
        <p>{id}</p>
        <p className="text-sm text-gray-600">
          This action cannot be undone. This will be deleted permanently.
        </p>

        <div className="modal-action">
          <button className="btn bg-(--background-dark)" onClick={confirmDelete}>
            Confirm
          </button>
          <button className="btn btn-warning btn-outline" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
