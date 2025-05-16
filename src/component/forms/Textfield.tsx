import React, { ChangeEventHandler } from 'react';

interface InputProps<Values> {
  name: keyof Values;
  label: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Textfield = <Values extends Record<string, unknown>>({
  name,
  label,
  placeholder = 'Please type here...',
  value,
  onChange,
}: InputProps<Values>) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name as string} className="label">
        <span className="label-text text-md font-medium text-black">{label}</span>
      </label>
      <input
        id={name as string}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input input-bordered input-neutral w-full bg-transparent text-black placeholder-gray-400`}
      />
    </div>
  );
};

export default Textfield;
