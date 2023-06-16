export type partner = {
    name:string,
    username:string,
    email:string,
    role:string,
    password:string,
    status:'active' | 'inactive',
    lastUpdated?:string,
    //for partner
    number?:string,
    expiredDate?:string
}