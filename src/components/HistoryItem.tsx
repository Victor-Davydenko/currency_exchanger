import React, { FC } from 'react';
import { Icons } from '@/components/common/Icons';
import { HistoryData } from '@/interfaces/interfaces';

const HistoryItem: FC<HistoryData> = ({ date, amountToSell, amountToBuy }) => {
  return (
    <div className='flex items-center justify-between basis-1/2 grow py-4 pl-4 pr-6 bg-white max-w-[408px]'>
      <span className='text-grey text-[18px]'>{date}</span>
      <span className='text-primary font-medium text-[18px]'>{amountToSell}</span>
      <Icons.arrow/>
      <span className='text-primary font-medium text-[18px]'>{amountToBuy}</span>
    </div>
  );
};

export default HistoryItem;