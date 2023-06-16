import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, endAt, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { partner } from "../../type/partner";
import { schedule } from "../../type/schedule";



// const initialState: accompany[] = [];
const initialState: schedule[] = [];

export const addSchedule = createAsyncThunk('schedule/addplaylist', async (schedule:schedule)=> {
    await addDoc(collection(db, "schedule"), schedule);
    return 
})

export const getList = createAsyncThunk('schedule/getlist', async ()=> {
    const querySnapshot = await getDocs(collection(db, "schedule"));
    let temp : schedule[] = [];
    querySnapshot.forEach((doc)=>{
        const currentData = doc.data() as schedule;
        currentData.id = doc.id;
        temp.push(currentData);
    })
    return temp
})

export const deleteSingle = createAsyncThunk('schedule/deleteSingle', async (id:string)=> {
    await deleteDoc(doc(db, "schedule", id));
     return id;
})


export const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled,(state,action)=>{
            return action.payload
        })
        builder.addCase(addSchedule.fulfilled,(state,action)=>{
            return action.payload
        })
        builder.addCase(deleteSingle.fulfilled,(state,action)=>{
            
          return state.filter((item,i)=>item.id!=action.payload);
          
        })
    }
    
})

export const {  } = scheduleSlice.actions;

export default scheduleSlice.reducer;