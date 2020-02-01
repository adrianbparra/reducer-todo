export const initialState = [
    {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
    },
    
]

export const todoListReducer = (state, action) => {

    const {type} =  action;

    switch(type){
        case "ADD_TODO":
            return[
                ...state,
                {
                    item: action.payload,
                    completed:false,
                    id: Date.now(),
                }
                    
            ]

        case "COMPLETED":
            return state.map(item => {
                
                return item.id === action.payload.id ?
                {...item , completed : !item.completed}
                : item
                
            })

        case "CLEAR_COMPLETED" :
            return state.filter(item => {
                return item.completed !== true
            })
        default :
            return state;
    }
}