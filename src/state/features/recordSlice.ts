import { createSlice } from "@reduxjs/toolkit"
import { record } from "../../type/record"

const initialState: record = {
    name: "",
    isrc: "",
    length: 0,
    singer: "",
    composer: "",
    category: "",
    format: "",
    createDate: "",
    upload: "",
    approve: "",
    approveDate: "",
    producer: "",
    contract: {
        contractID: "",
        authorizeDate: "",
        expDate: ""
    }
}

export const accompanySlice = createSlice({
    name: "accompany",
    initialState,
    reducers: {
    }
    
})