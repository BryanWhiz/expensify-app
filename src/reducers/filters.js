// filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return { 
                ...state, 
                text: action.text
            };
        case 'SORT_AMOUNT_FILTER':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_DATE_FILTER':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return { 
                ...state, 
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return { 
                ...state, 
                endDate: action.endDate
            };
        default: 
        return state;
    }
};

export default filterReducer;