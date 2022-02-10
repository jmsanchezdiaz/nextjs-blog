import { format, parseISO } from 'date-fns';
import React from 'react';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={date}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
