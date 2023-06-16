import { record } from "./record";

export type playlist = {
        title:string,
        topic:string,
        desc:string,
        public:boolean,
        createDate:string,
        user:string,
        records:record[]
        id:string,
}