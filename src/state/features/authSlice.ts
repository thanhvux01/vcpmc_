import { Phone } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { auth, db } from "../../firebase";
import { User } from "../../type/user";
import { collection, doc, endAt, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useNavigate } from "react-router";



const initialState: User = {
    Email: "",
    FirstName: "",
    Role: "",
    LastName: "",
    isLogin: false,
    error: false,
}

type Login = {
    email: string,
    password: string,
}


export const Login = createAsyncThunk('auth/firebaseauth', async ({ email, password }: Login) => {
   
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        window.localStorage.setItem('USER', JSON.stringify({ uid: user.uid, isLogin: true }))
    } catch (err) {

    }
})
type localData = {
    uid: string,
    isLogin: boolean,
}

export const getUserInfo = createAsyncThunk('auth/getuser', async () => {
    
    const data = window.localStorage.getItem('USER') || "";
    const parseData = JSON.parse(data) as localData;
    const q = query(collection(db, "users"), where("uid", "==", parseData.uid));
    const docSnap = await getDocs(q);
    let temp: User = {
        isLogin: false,
        error: false
    };
    docSnap.forEach(doc => {
     
        temp = doc.data() as User;
    })
    temp.isLogin = true;
    return temp;
})

type IUpdateUserInfo = {
    uid: string,
    user: User,
}
export const UpdateUserInfo = createAsyncThunk('auth/updateuser', async ({ uid, user }: IUpdateUserInfo) => {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, user);
    return user
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(UpdateUserInfo.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(Login.fulfilled, (state, action) => {
            return { ...state, isLogin: true }
        })
        builder.addCase(Login.rejected, (state) => {
            return { ...state, isLogin: false, error: true };
        })
    }
})


export const { } = authSlice.actions;

export default authSlice.reducer;