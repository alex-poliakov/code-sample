import React from 'react';
import { Accordion } from 'semantic-ui-react';

import { TransactionCard } from './transactionCard';

export const TransactionAccordion = ({ transactions }) => {
  const listItems = transactions.map((transaction, index) =>
    <TransactionCard key={transaction.id} transaction={transaction} cardIndex={index} />
  );
  return (
    <Accordion styled>{listItems}</Accordion>
  );
}