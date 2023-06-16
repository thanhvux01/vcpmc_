import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { accompany } from "../../type/accompany";
import { contractCopy } from "../../type/contract-copy";


// const initialState: accompany[] = [];
const initialState: contractCopy[] = []



export const getList = createAsyncThunk('contract/getlist', async ()=> {
    const querySnapshot = await getDocs(collection(db, "contracts"));
    let temp : contractCopy[] = [];
    querySnapshot.forEach((doc)=>{
        const currentData = doc.data() as contractCopy;
       
        temp.push(currentData);
    })
    return temp
})

export const ContractSlice = createSlice({
    name: "contract",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})


export const {  } = ContractSlice.actions;

export default ContractSlice.reducer;