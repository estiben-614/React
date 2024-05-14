export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return state.filter((s) => (s.id !== action.payload.id));
        case 'COMPLETE': 
            return state.map((todo) => {
                if(todo.id === action.payload.id){
                    return {...action.payload}; 
                }
                return todo;
            });
        default:
            return state;
    }
};