import { createContext , useContext } from "react";

export const todoContext = createContext({
    todo:[
        {id:1,
            todo:"todo msg",
            completed: false
        }
    ],
    addTodo :(todo) =>{

    }, 
    updateTodo:(id, todo)=>{

    },
    deleteTodo:(id) => {},
    ToggleComplete:(id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider