import React from "react"
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
export type contractCopy = {
    name:string,
    id:string,
    validDate: string,
    expDate: string,
    createdDate:string,
    type?:{
        name:string,
        contractPrice:number ,
        contractDistribute:number,
        contractPlays:number | 0,
    }
    represent:{
        name:string ,
        company:string,
        position:string,
        birthday:string,
        nation:string,
        number:string,
        gender:string,
        cccd:{
            id:string,
            location:string,
            createDate:string,
        }
        taxID:string,
        address:string,
        email:string,
        account:{
            username:string,
            password:string,
        }
        bankID:string,
        bankName:string,
    }
    

}