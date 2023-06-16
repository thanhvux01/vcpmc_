import { partner } from "./partner";

export type accompany = {
    author:string,
    contractId:string,
    admin:string,
    partners:partner[],
    devices:number,
    expiredDate:string,
    status:'active' | 'inactive',
    id:string,

}