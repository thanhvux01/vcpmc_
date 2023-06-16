import React, { ChangeEvent, useEffect, useState } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { AddRecordPlaylist } from '../../component/Playlist';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { record } from '../../type/record';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { PushRecord,DeleteRecord } from '../../state/features/playlistSlice';
let cx = classNames.bind(styles);


const AddRecord = () => {
  const dispatch = useDispatch();
  const [records,setRecords] = useState<record[]>([]);
  const [count,setCount] = useState(1);
  const [number,setNumber] = useState(10);
  const [page,setPage] = useState(1);
  const recordsPlaylist = useSelector((state:RootState)=> state.playlist.records);
  const getRecord = async () => {
    let convertRecord : record[] = [];
    const record = await getDocs(collection(db, "record"));
    record.forEach((doc) => {
       convertRecord.push(doc.data() as record);
    });
    setRecords(convertRecord);
  }
 const addRecordToPlaylist = (rc: record) => {
      dispatch(PushRecord(rc));
 }
 const removeRecordFromPlaylist = (index : number) => {
    dispatch(DeleteRecord(index));
  
 }
 useEffect(()=>{
   getRecord();
 },[])
  return (
    <div className={cx('container')}>
     <SideBar/>
     <AddRecordPlaylist records={records} recordsPlaylist={recordsPlaylist} addRecordToPlaylist={addRecordToPlaylist} removeRecordFromPlaylist={removeRecordFromPlaylist} />
    </div>
  )
}

export default AddRecord