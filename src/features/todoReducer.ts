import { createSlice } from '@reduxjs/toolkit'
import { Task } from '../types';

const initialState = {
    todoList: [] as Task[]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            let test: Task = action.payload
            state.todoList.push(test)
        },
        addQRCode: (state, action) => {
            let test: Task = { id: state.todoList.length + 1, task: action.payload }
            state.todoList.push(test)
        },
        setTodos: (state, action) => {
            state.todoList = [...action.payload]
        },
        updateTodo: (state, action) => {
            let test = action.payload
            let objIndex = state.todoList.findIndex((obj => obj.id == test.id));
            state.todoList[objIndex].task = test.description
        },
        delTodo: (state, action) => {
            let filtered = state.todoList.filter(ele => { return ele.id !== action.payload });
            return { state, todoList: [...filtered] }
        }
    }
});

export const { saveTodo, delTodo, updateTodo, setTodos, addQRCode } = todoSlice.actions

// export const selectTodoList = state => state.todo.todoList

export default todoSlice.reducer