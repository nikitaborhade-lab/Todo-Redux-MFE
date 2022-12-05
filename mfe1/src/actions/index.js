const ADD_TODO = "ADD_TODO";   //ACTION-TYPE
//ACTION-CREATOR
export const addTodo = (message) => ({
        type  : ADD_TODO,      //type = action name
        message,               //payload
        id : Math.random(),                 
})

const DELETE_TODO = "DELETE_TODO"
export const deleteTodo = (id) =>({
    type : DELETE_TODO,
    id, 
})