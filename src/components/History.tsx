import React, { FC } from 'react';
import HistoryItem from '@/components/HistoryItem';
import { history } from '@/components/HistoryBlock';

const History: FC = () => {
  return (
    <div className='flex flex-wrap justify-between gap-x-12 gap-y-4'>
      {history.map(({ date, amountToBuy, amountToSell }, idx) => <HistoryItem key={idx}
                                                                                                           date={date}
                                                                                                           amountToBuy={amountToBuy}
                                                                                                           amountToSell={amountToSell}
      />)}
    </div>
  );
};

export default History;