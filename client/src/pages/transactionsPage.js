import React, { useState, useEffect, useCallback } from 'react';

import { useHttp } from '../hooks/http-hook';

import { TransactionAccordion } from '../components/transactionAccordion';
import { Placeholder } from '../components/placeholder';

export const TransactionsPage = () => {
  const { request } = useHttp();
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async () => {
    try {
      const fetched = await request('/transaction', 'GET');
      setTransactions(fetched)
    } catch (e) { }
  }, [request])

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <div className='transaction-list-body'>
      {transactions.length
        ? <TransactionAccordion transactions={transactions} />
        : <Placeholder />}
    </div>
  )
}