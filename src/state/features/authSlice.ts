import { Phone } from "@mui/icons-material";
import {signInWithEmailAndPassword } from "firebase/auth";
import {createAsyncThunk, createSlice,PayloadAction}  from "@reduxjs/toolkit"
import { auth, db } from "../../firebase";
import { User } from "../../type/user";
import { collection, doc, endAt, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

const initialState : User= {
    Email:"",
    FirstName:"",
    Role:"",
    LastName:"",
    state:false,
}

export const getUserInfo = createAsyncThunk('auth/getuser', async (uid:string)=> {
   
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docSnap = await getDocs(q);
    let temp : User = {state:false};
    docSnap.forEach(doc=>{
         temp = doc.data() as User;
         
    })
    temp.state = true;
    return temp;
})

type IUpdateUserInfo = {
    uid:string,
    user:User,
}
export const UpdateUserInfo = createAsyncThunk('auth/updateuser', async ({uid,user}:IUpdateUserInfo)=> {
    const userRef = doc(db, "users", uid);
   await updateDoc(userRef,user);
   return user
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       
    },
    extraReducers: (builder) => {
           builder.addCase(getUserInfo.fulfilled,(state,action) => {
                 
                 return action.payload;
           })
           builder.addCase(UpdateUserInfo.fulfilled,(state,action) => {
            return action.payload;
      })
    }
})


export const {} = authSlice.actions;

export default authSlice.reducer;