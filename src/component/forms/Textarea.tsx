import React, { ChangeEventHandler } from 'react';

interface TextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Textarea = ({
  name,
  label,
  placeholder = 'Please type here...',
  rows = 10,
  value,
  onChange,
}: TextareaProps) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span className="label-text text-md font-medium text-black">{label}</span>
      </label>
      <textarea
        id={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className="textarea textarea-neutral w-full resize-none bg-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
