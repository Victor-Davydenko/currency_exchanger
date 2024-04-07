'use client'

import React, { FC } from 'react';
import Title from '@/components/common/Title';
import Button from '@/components/ui/Button';
import History from '@/components/History';
import {HistoryData} from '@/interfaces/interfaces';

export const history: HistoryData[] = [{date: '2024-04-07', amountToSell: '1000 UAH', amountToBuy: '2000 USD'}, {date: '2024-04-07', amountToSell: '1000 UAH', amountToBuy: '2000 USD'}, {date: '2024-04-07', amountToSell: '1000 UAH', amountToBuy: '2000 USD'}, {date: '2024-04-07', amountToSell: '1000 UAH', amountToBuy: '2000 USD'}]
const HistoryBlock: FC = () => {
  return (
    <section className='bg-white'>
      <div className='container mx-auto max-w-[1000px] flex py-[80px] px-5'>
        <div className='bg-secondary px-12 py-12 w-full'>
          <div className='flex justify-between items-center mb-8'>
            <Title level={2} className='text-black text-2xl font-bold'>Історія конвертації</Title>
          {!!history.length && <Button variant='small-blue' onClick={() => console.log('works')}>Очистити історію</Button>}
          </div>
          {!!history.length && <History />}
        </div>
      </div>
    </section>
  );
};

export default HistoryBlock;