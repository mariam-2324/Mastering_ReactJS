import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Welcome Here...",
        completed:false
    }]
}


const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        addTodo:(state, action) => {
            state.todos.push({
                id:nanoid(),
                text:action.payload,
                completed:false
            })
        }

    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer