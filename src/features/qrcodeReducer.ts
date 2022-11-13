import { createSlice } from '@reduxjs/toolkit'
import { QRCode } from '../types';

const initialState = {
    qrCodeList: [] as QRCode[]
}

const qrCodeSlice = createSlice({
    name: 'qrCodes',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            let test: QRCode = action.payload
            state.qrCodeList.push(test)
        },
        addQRCode: (state, action) => {
            let test: QRCode = { id: state.qrCodeList.length + 1, code: action.payload }
            state.qrCodeList.push(test)
        },
        setTodos: (state, action) => {
            state.qrCodeList = [...action.payload]
        },
        updateTodo: (state, action) => {
            let test = action.payload
            let objIndex = state.qrCodeList.findIndex((obj => obj.id == test.id));
            state.qrCodeList[objIndex].code = test.description
        },
        delTodo: (state, action) => {
            let filtered = state.qrCodeList.filter(ele => { return ele.id !== action.payload });
            return { state, qrCodeList: [...filtered] }
        }
    }
});

export const { saveTodo, delTodo, updateTodo, setTodos, addQRCode } = qrCodeSlice.actions

// export const selectTodoList = state => state.todo.todoList

export default qrCodeSlice.reducer