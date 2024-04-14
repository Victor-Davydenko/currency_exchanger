'use client'

import React, {ChangeEvent, FC} from 'react';

interface InputProps {
  label: string,
  handler: (e: ChangeEvent<HTMLInputElement>) => void,
  className: string
  id: string,
  type: string,
  value: string
  step?: string
  min?: string
  max?: string
}

const Input: FC<InputProps> = ({ label, id, handler, ...attrs }) => {
  return (
    <div className='relative'>
      <label htmlFor={id} className='absolute -top-[30px] text-xl text-primary'>{label}</label>
      <input id={id} {...attrs} onChange={handler}/>
    </div>
  );
};

export default Input;