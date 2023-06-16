import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { accompany } from "../../type/accompany";


// const initialState: accompany[] = [];
const initialState: accompany[] = []



export const getList = createAsyncThunk('accompany/getlist', async ()=> {
    const querySnapshot = await getDocs(collection(db, "accompany"));
    let temp : accompany[] = [];
    querySnapshot.forEach((doc)=>{
        const currentData = doc.data() as accompany;
        currentData.id = doc.id;
        temp.push(currentData);
    })
    return temp
})

export const accompaniesSlice = createSlice({
    name: "accompanies",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled,(state,action)=>{
            return action.payload
        })
    }
    
})


export const {  } = accompaniesSlice.actions;

export default accompaniesSlice.reducer;