import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";
import { collection, doc, endAt, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { accompany } from "../../type/accompany";
import { partner } from "../../type/partner";



// const initialState: accompany[] = [];
const initialState: partner[] = [{
    name: "",
    username: "",
    email: "",
    role: "",
    password: "",
    status: "active"

}]



export const getList = createAsyncThunk('partners/getlist', async ()=> {
    const querySnapshot = await getDocs(collection(db, "partners"));
    let temp : partner[] = [];
    querySnapshot.forEach((doc)=>{
        const currentData = doc.data() as partner;
        temp.push(currentData);
    })
    return temp
})



type updateUser = {
    value:string,
    field:keyof partner,
}
export const partnerSlice = createSlice({
    name: "partners",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled,(state,action)=>{
            return action.payload
        })
      
    }
    
})

export const {  } = partnerSlice.actions;

export default partnerSlice.reducer;