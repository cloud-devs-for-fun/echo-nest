'use client';

import React from 'react';
import { useFormik } from 'formik';

import { cn } from '@/libs/cn';
import { useGetAllThreads, usePostThread } from '@/queries/thread';

import { Textfield } from '@/component/forms';
import { isEmpty } from 'lodash';
import Textarea from '@/component/forms/Textarea';

const AddThreadForm = () => {
  const { mutateAsync, isPending, isSuccess, isError, error } = usePostThread();
  const { refetch } = useGetAllThreads();

  const submitPost = useFormik({
    initialValues: {
      title: '',
      thread: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      mutateAsync(values, {
        onSuccess: () => {
          resetForm();
          refetch();
        },
      });
    },
  });

  return (
    <form onSubmit={submitPost.handleSubmit} className="space-y-4 pb-4">
      <h2 className="text-xl font-semibold">Create a New Post</h2>

      <Textfield
        label="Title"
        name="title"
        value={submitPost.values.title}
        onChange={submitPost.handleChange}
      />
      <Textarea
        label="Thread"
        name="thread"
        value={submitPost.values.thread}
        onChange={submitPost.handleChange}
      />

      <div className="flex justify-between">
        <button
          disabled={isEmpty(submitPost.values.title) || isEmpty(submitPost.values.thread)}
          type="submit"
          className={cn(
            'btn btn-outline bg-(--background-dark) text-white disabled:border-gray-700 disabled:text-gray-700',
          )}
        >
          {isPending ? <span className="loading loading-bars loading-xl" /> : 'Create New Post'}
        </button>

        {isSuccess && <p className="text-green-500">Thread posted successfully!</p>}
        {isError && <p className="text-red-500">Error: {(error as Error).message}</p>}
      </div>
    </form>
  );
};

export default AddThreadForm;
