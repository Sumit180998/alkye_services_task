import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const ArticlesApi = createAsyncThunk('alkya_login', async () => {
    
    const Token=sessionStorage.getItem('Token')
    console.log(Token); 
    
    
    const res = await axios.get('https://untitled-twkmuar27a-uc.a.run.app/api', {
        headers: {
            'Authorization': `Token ${Token}`
          
        }
    });
    
    
    return res;
});
const initialState={
    value:0,
    Articlesvalue:{},
    // auth: false,
    // Token:false
}
export const Slice=createSlice({
    name:"alkya_service",
    initialState,
    // reducers:{
    //     Auth:(state, action)=>{
    //         state.auth= action.payload

    //     },
    //     Token:(state, action)=>{
    //         state.Token=action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(ArticlesApi.fulfilled, (state, action) => {
            console.log(action.payload)
            state.Articlesvalue =action.payload
        });

        builder.addCase(ArticlesApi.rejected,(state,action)=>
        {
            console.log(action)
        })
    }

})
export const {Token,Auth}=Slice.actions

export default Slice.reducer