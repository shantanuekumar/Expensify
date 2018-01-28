const expenseReducerState = [];
 
export default (state= expenseReducerState,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE': 
        return [
            ...state,
            action.expenses
        ];

        case 'REMOVE_EXPENSE': 
        return state.filter(({id})=> id !== action.id);

        case 'EDIT_EXPENSE':
        return state.map((expense)=> {
        if(expense.id === action.id){
            return {
                ...expense,
                ...action.update
            } 
        }
        else{
            return expense;
        }
        });
        
        default: return state;
    }
};
