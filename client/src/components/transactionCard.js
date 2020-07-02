import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

export const TransactionCard = ({ transaction, cardIndex }) => {
  const [activeIndex, setIsOpen] = useState(null);

  const toggle = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setIsOpen(newIndex)
  }
  return (
      <>
        <Accordion.Title
          active={activeIndex === cardIndex}
          index={cardIndex}
          onClick={toggle}
          className={transaction.type === 'debit' ? 'accordion-red' : 'accordion-blue'}
        >
          <Icon name='dropdown' />
          Type: {transaction.type}, Amount: {transaction.amount}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === cardIndex}>
          Id: {transaction.id} <br/>
          Effective Date: {transaction.effectiveDate}
        </Accordion.Content>
      </>
  );
}