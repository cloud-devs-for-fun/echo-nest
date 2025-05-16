import React, { useState } from 'react';
import { CircleX, EllipsisVertical, MessageSquareMore } from 'lucide-react';

import { cn } from '@/libs/cn';
import { Avatar } from '@/component';
import { formattedDate } from '@/utils/helper';
import { DateFormat } from '@/utils/enums';

const CommentBox = () => {
  const commentHeader = () => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Avatar type="placeholder" placeholder="A" />
          <p>name or alias</p>
        </div>
        <button className="btn btn-ghost btn-xs">
          <EllipsisVertical strokeWidth={3} size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="card bg-blue-300/10">
      <div className="card-body p-4">
        {commentHeader()}

        <p className="mt-1 text-xs text-gray-500">
          Posted on {formattedDate(new Date(), DateFormat.CUSTOM1)}
        </p>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae dolorem maxime
          optio distinctio modi sequi dolor expedita id, eligendi, odit molestiae quisquam
          exercitationem magnam a tempora blanditiis, eum facilis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aut recusandae dolorem maxime optio distinctio modi sequi
          dolor expedita id, eligendi, odit molestiae quisquam exercitationem magnam a tempora
          blanditiis, eum facilis.
        </p>
      </div>
    </div>
  );
};

const Comments = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenComment = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleOpenComment} className="btn btn-sm btn-outline">
        <MessageSquareMore strokeWidth={3} size={16} color="#4ED7F1" />
        1.1k
      </button>

      <div className={cn(`modal`, open && 'modal-open')}>
        <div className="modal-box flex w-11/12 max-w-5xl flex-col gap-5 bg-white">
          <button
            title="close"
            className="btn btn-circle btn-ghost absolute top-2 right-2"
            onClick={() => setOpen(!open)}
          >
            <CircleX strokeWidth={3} />
          </button>

          <h2>Comments</h2>

          <div className="h-full max-h-[600px] space-y-3 overflow-y-auto">
            <CommentBox />
          </div>

          <div className="card-actions justify-end">
            <textarea
              className="textarea textarea-neutral h-20 w-full resize-none bg-transparent"
              placeholder="Share your comment.."
              required
            />
            <button className="btn bg-(--background-dark)">comment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
