export const initialState = [
    {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
    },
    
]

export const todoListReducer = (state, action) => {

    switch( action.type){
        case "ADD_TODO":
            return[
                ...state,
                action.payload
                    
            ]
        default :
            return state;
    }
}