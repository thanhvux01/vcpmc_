import React, { ChangeEvent, useEffect, useState } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { CreatePlaylistContent } from '../../component/Playlist';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { playlist } from '../../type/playlist';
import { DeleteRecord, UpdatePlayList } from '../../state/features/playlistSlice';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

const CreatePlaylist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const record = useSelector((state : RootState)=> state.playlist);
  const [playlist,setPlaylist] = useState<playlist>({
    title: '',
    topic: '',
    createDate: '',
    public:true,
    desc:'',
    user: '',
    records: record.records,
    id:''
  });
  const handleChange = (e:ChangeEvent<HTMLInputElement>,field: keyof playlist) => {
          setPlaylist((prev)=>{
             if(field != 'records' && field != 'public') {
               prev[field] = e.target.value;
               return prev;
             }else if(field == 'public'){
               
               prev[field] = !prev[field]
             
               return prev;
             }
             return prev;
          })
  }
  const removeRecordFromPlaylist = (index : number) => {
    dispatch(DeleteRecord(index));
   }
  
  const handleSubmit = async () => {
     await addDoc(collection(db, "playlist"), 
       playlist
    );
    navigate('/playlist');  
  }
  

  return (
    <div className={cx('container')}>
     <SideBar/>
     <CreatePlaylistContent handleChange={handleChange} handleSubmit={handleSubmit} records={record.records} publicc={playlist.public} removeRecordFromPlaylist={removeRecordFromPlaylist} />
    </div>
  )
}

export default CreatePlaylist