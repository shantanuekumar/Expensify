

export const setTextFilter=(text='')=>({
    type: 'TEXT_FILTER',
    text,

});

export const sortByAmount = () =>({
    type: 'BY_AMOUNT',
});

export const sortByDate = () => ({
    type: 'BY_DATE',
});

export const setStartDate = (startDate) => ({
   type: 'START_DATE',
   startDate  

});

export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});