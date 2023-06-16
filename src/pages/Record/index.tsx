import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import RecordContent from '../../component/Record';
import { collection,addDoc,doc,setDoc,getDocs, where , query } from "firebase/firestore"; 
import { db } from '../../firebase';
import { record } from '../../type/record';
import { playlist } from '../../type/playlist';
let cx = classNames.bind(styles);

const Record = () => {

  const [count,setCount] = useState(1);
  const [number,setNumber] = useState(10);
  const [page,setPage] = useState(1);
  const [records,setRecords] = useState<record[]>([]);
  const getRecord = async () => {
    let convertRecord : record[] = [];
    const record = await getDocs(collection(db, "record"));
    record.forEach((doc) => {
       convertRecord.push(doc.data() as record);
    });
    setRecords(convertRecord);
    setCount((prev)=>{
        return Math.floor(records.length/number) + 1;
    })
  }
  
  useEffect(()=>{
     getRecord(); 
     
  },[])
  return (
    <div className={cx('container')}>
    <Sidebar/>
    <RecordContent number={number} count={count} page={page} records={records}/>
   </div>
  )
}

export default Record
































const addRecord = async () => {
  let data : record = {
    name: 'Có chàng trai viết lên cây',
    isrc: 'KRD100123552',
    length: 200,
    singer: 'Phan Mạnh Quỳnh',
    composer: 'Phan Mạnh Quỳnh',
    category: 'Rap',
    format: 'Audio',
    createDate: '2023-04-01',
    upload: 'Admin',
    approve: 'Hệ thống',
    approveDate: '"07-04-2021-17:45:50',
    producer:'HQS',
    contract: {
      contractID: 'BH101',
      authorizeDate: '2023-05-01',
      expDate: '2023-07-01'
    }
  }
  const newCityRef = doc(collection(db, "record"));
  await setDoc(newCityRef, data);
}

