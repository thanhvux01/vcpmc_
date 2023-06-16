import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { playlist } from "../../type/playlist";
import { record } from "../../type/record";




const initialState: playlist = {
    title: "",
    topic: "",
    createDate: "",
    user: "",
    records: [],
    desc: "",
    public: true,
    id:""
}

export const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        UpdatePlayList: (state, action: PayloadAction<playlist>) => {
            state.title = action.payload.title;
            state.topic = action.payload.topic;
            state.user = action.payload.user;
            state.desc = action.payload.desc;
            state.public = action.payload.public;
            state.createDate = action.payload.createDate;
        },
        PushRecord: (state, action: PayloadAction<record>) => {
            
             if(state.records.filter((item)=>item.name==action.payload.name).length === 0){
                state.records.push(action.payload);
             }
        }, DeleteRecord: (state, action:PayloadAction<number>) => {        
                state.records.splice(action.payload,1);            
        }
    }
})


export const { UpdatePlayList, PushRecord , DeleteRecord } = playlistSlice.actions;

export default playlistSlice.reducer;