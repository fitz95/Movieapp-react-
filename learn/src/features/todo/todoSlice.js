import {createSlice } from '@reduxjs/toolkit';
import * as uuid from "uuid";



export const todoSlice =createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo: (state, action)=> {
            const todo = {
                id: uuid(),
                text: action.payload,
            };
            //mutate the state 
            state.push(todo);
            //or return a new data 
            //return [...state, todo]
        }
        
        },
});

// for dispatch
export const { addTodo } = todoSlice.actions;
// this is for configure store 
export default todoSlice.reducer; 