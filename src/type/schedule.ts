import { schedulePlaylist } from "./schedulePlaylist"


export type schedule = {
   name:string,
   startedTime:string,
   endedTime:string,
   schedulePlaylist:schedulePlaylist[]
   id:string,

}