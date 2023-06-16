import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";
import { collection, doc, endAt, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { accompany } from "../../type/accompany";
import { partner } from "../../type/partner";



// const initialState: accompany[] = [];
const initialState: partner = {
    name: "",
    username: "",
    email: "",
    role: "",
    password: "",
    status: "active"
}
   

export const getWithUsername = createAsyncThunk('partners/getwithusername', async (username:string)=> {
    const q = query(collection(db, "partners"), where("username", "==", username));
    let temp : partner[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        const currentData = doc.data() as partner;
        temp.push(currentData);
    })
    return temp[0]
})


export const updatePartner = createAsyncThunk('partners/updatepartner', async (partner:partner)=> {
    const q = query(collection(db, "partners"), where("username", "==", partner.username));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (item)=>{
        const currentData = item.data() as partner;
        const docRef = doc(db, 'partners', `${item.id}`);
        await updateDoc(docRef, partner
          );
    })  
    return 
})

type IUpdate = {
     value:string,
     field:keyof partner,
}

type IUpdatePartner = {

     partner:partner,
}

export const singlePartnerSlice = createSlice({
    name: "partner",
    initialState,
    reducers: {
       Update : (state,action:PayloadAction<IUpdate>) => {
               if(action.payload.field != 'status')
               state[action.payload.field] = action.payload.value;
               
       }     
    },
    extraReducers: (builder) => {
   
        builder.addCase(getWithUsername.fulfilled,(state,action)=>{
           
            return action.payload
          
        })
        builder.addCase(updatePartner.fulfilled,(state,action)=>{
              return state
        })
    }
    
})

export const { Update } = singlePartnerSlice.actions;

export default singlePartnerSlice.reducer;