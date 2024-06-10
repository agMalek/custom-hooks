import { useEffect, useReducer} from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';
import { useState } from 'react';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodo = () => {


    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  /*   const [todosCount, setTodosCount] = useState(0)
    const [pendingTodosCount, setPendingTodosCount] = useState(0) */

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
       /*  setTodosCount(todos.length)
        setPendingTodosCount(todos.filter(todo => !todo.done).length) */
    }, [todos])
 
    const handleNewTodo = ( todo ) => {
 
     const action = {
         type : '[TODO] Todo Add',
         payload: todo
     }
     dispatchTodo(action)    
    }
 
    const handleRemoveTodo = ( id ) => {
 
     const action = {
         type : '[TODO] Todo Remove',
         payload: id
     }
     dispatchTodo(action)    
    }
 
    const handleToggleTodo = ( id ) => {
 
        const action = {
            type : '[TODO] Todo Toggle',
            payload: id
        }
        dispatchTodo(action)    
    }
 
    
 
    return {
        todos,
        handleNewTodo,
        handleRemoveTodo, 
        handleToggleTodo, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}