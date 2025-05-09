import React, { HTMLProps } from 'react';
import Image from 'next/image';
import { cn } from '@/libs/cn';

type ImageTypes = 'image' | 'placeholder';

interface AvatarProps {
  type: ImageTypes;
  placeholder?: string;
  src?: string;
  alt?: string;
  className?: HTMLProps<HTMLElement>['className'];
}

export const Avatar = ({ type, src, alt, placeholder, className }: AvatarProps) => {
  return (
    <div role="button" className={cn('avatar', type === 'placeholder' && 'avatar-placeholder')}>
      <div
        className={cn(
          'w-8 rounded-full ring ring-(--background-dark) ring-offset-2',
          type === 'placeholder' && 'bg-blue-400',
          className,
        )}
      >
        {type === 'placeholder' ? (
          <span className="text-xl text-black">{placeholder}</span>
        ) : (
          <Image src={src as string} alt={alt as string} height={250} width={250} />
        )}
      </div>
    </div>
  );
};

export default Avatar;
