import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { collection, doc, endAt, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { partner } from "../../type/partner";
import { schedule } from "../../type/schedule";



// const initialState: accompany[] = [];
const initialState: schedule = {
    name: "",
    startedTime: "",
    endedTime: "",
    schedulePlaylist: [],
    id: ""
}
   

export const getID = createAsyncThunk('scheduledetail/getwithid', async (id:string)=> {
    const docRef = doc(db, "schedule", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as schedule;
})




export const singleScheduleSlice = createSlice({
    name: "scheduledetail",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
         builder.addCase(getID.fulfilled,(state,action)=>{
             return action.payload
         })
     
    }
    
})

export const {  } = singleScheduleSlice.actions;

export default singleScheduleSlice.reducer;