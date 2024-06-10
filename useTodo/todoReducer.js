

export const todoReducer = (initialState = [], action) => { 
    switch (action.type) {
        case '[TODO] Todo Add':            
            return [ ...initialState, action.payload]

        case '[TODO] Todo Remove':            
            return initialState.filter(todo => todo.id != action.payload)
        
        case '[TODO] Todo Toggle':            
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            initialState;
    }
}