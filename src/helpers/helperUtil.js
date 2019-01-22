import format from 'date-fns/format';

export function getPrettyDate(date) {
  let eventMonth = format(date, 'MMMM');
  let eventDay = format(date, 'D');
  let eventWeekDay = format(date, 'dddd');

  return `${eventWeekDay}, ${eventMonth} ${eventDay}th`;
}

export function getISODate(date) {
  return date.toISOString();
}
