import {createSlice} from "@reduxjs/toolkit";

const initialState = '';

export const inputSlice = createSlice({
    name:'input',
    initialState,
    reducers:{
        change:(state, action)=>{
            return action.payload.input
        },
        add:()=>{
          return ''
        }
    }
})

export const {change,add} = inputSlice.actions;

export default inputSlice.reducer;