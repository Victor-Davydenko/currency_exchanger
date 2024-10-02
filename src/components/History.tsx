import React, { FC } from 'react';
import HistoryItem from '@/components/HistoryItem';
import {HistoryData} from '@/interfaces/interfaces';
import useConverterStore from '@/store/store';
import {historySelector} from '@/store/selectors';


const History: FC = () => {
  const history: HistoryData[] = useConverterStore(historySelector)
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