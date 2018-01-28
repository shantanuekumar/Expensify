import moment from 'moment';

const filterReducerState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    };

export default (state=filterReducerState,action)=>{
    switch(action.type){
        
        case 'TEXT_FILTER': return {
            ...state,
            text: action.text
        }

        case 'BY_AMOUNT': return {
            ...state,
            sortBy: 'amount'
        } 

        case 'BY_DATE': return {
             ...state,
             sortBy: 'date'
        }

        case 'START_DATE': return {
                ...state,
                startDate: action.startDate
        }

        case 'END_DATE': return {
                ...state,
                endDate: action.endDate
        }


         
        default: return state;
    }
};
