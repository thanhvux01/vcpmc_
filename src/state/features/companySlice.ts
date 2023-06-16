import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";
import { arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { accompany } from "../../type/accompany";
import { partner } from "../../type/partner";


const initialState: accompany = {
    author: "",
    contractId: "",
    admin: "",
    partners: [],
    devices: 0,
    expiredDate: "",
    status: "active",
    id:''
}
export const getSingle = createAsyncThunk('accompany/getsingle', async (id:string)=> {
    const accompanyRef = doc(db, "accompany", id);
    const accompanySnap = await getDoc(accompanyRef);
    const result = accompanySnap.data() as accompany;
    result.id = accompanySnap.id;
    return result;
})

type IAddUser = {
    id:string,
    partner:partner,
}
export const addUser = createAsyncThunk('accompany/adduser', async ({id,partner}:IAddUser)=> {
    const accompanyRef = doc(db, "accompany", id);
    const accompanySnap = await getDoc(accompanyRef);
    const temp = accompanySnap.data() as accompany;
    await updateDoc(accompanyRef, {
         partners: [...temp.partners,partner]
      });
    return partner
})
    

    

export const accompanySlice = createSlice({
    name: "accompany",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getSingle.fulfilled,(state,action)=>{
           return {...action.payload};
        }); 
        builder.addCase(addUser.fulfilled,(state,action)=>{
             return {...state,user:action.payload}
         }) ;
    }
})




export const {  } = accompanySlice.actions;

export default accompanySlice.reducer;