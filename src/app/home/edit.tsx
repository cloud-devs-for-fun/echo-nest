import { CircleX } from 'lucide-react';
import React from 'react';
import { Thread } from './type';
import { cn } from '@/libs/cn';
import { Textfield } from '@/component/forms';
import Textarea from '@/component/forms/Textarea';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useGetAllThreads, usePutThread } from '@/queries/thread';

interface EditPostProps extends Partial<Thread> {
  openEditForm: boolean;
  setOpenEditForm: () => void;
}

const EditPost = ({ openEditForm, setOpenEditForm, id, title, thread }: EditPostProps) => {
  const { mutate, isSuccess, isPending, isError, error } = usePutThread();
  const { refetch } = useGetAllThreads();

  const submitEdit = useFormik({
    initialValues: {
      id: id,
      title: title ?? '',
      thread: thread ?? '',
    },
    onSubmit: (values) => {
      console.log(values);

      if (!id) {
        return console.error('❌ Thread ID is missing.');
      }

      mutate(values, {
        onSuccess: () => {
          refetch();
        },
      });
    },
  });

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

          <form onSubmit={submitEdit.handleSubmit} className="space-y-4 pb-4">
            <h2 className="text-xl font-semibold">Edit Post</h2>

            <Textfield
              label="Title"
              name="title"
              value={submitEdit.values.title}
              onChange={submitEdit.handleChange}
            />
            <Textarea
              label="Thread"
              name="thread"
              value={submitEdit.values.thread}
              onChange={submitEdit.handleChange}
            />

            <div className="flex justify-between">
              <button
                disabled={isEmpty(submitEdit.values.title) || isEmpty(submitEdit.values.thread)}
                type="submit"
                className={cn(
                  'btn btn-outline btn-wide bg-(--background-dark) text-white disabled:border-gray-700 disabled:text-gray-700',
                )}
              >
                {isPending ? <span className="loading loading-bars loading-xl" /> : 'Edit Post'}
              </button>

              {isSuccess && <p className="text-green-500">Thread edited successfully!</p>}
              {isError && <p className="text-red-500">Error: {(error as Error).message}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
