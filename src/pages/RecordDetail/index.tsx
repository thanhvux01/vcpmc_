import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import { RecordDetailContent } from '../../component/Record';
import { useParams } from 'react-router';
import { db } from '../../firebase';
import { collection, doc, getDoc, getDocs, updateDoc, query, where, limit } from 'firebase/firestore';
import { record } from '../../type/record';
let cx = classNames.bind(styles);

const RecordDetail = () => {
  const [record, setRecord] = useState<record>();
  const [id, setID] = useState('');
  const param = useParams();
  const getRecord = async () => {
    const q = query(collection(db, "record"), where("isrc", '==', param.id), limit(1));
    const recordSnapshot = await getDocs(q);
    setRecord(recordSnapshot.docs[0].data() as record);
    setID(recordSnapshot.docs[0].id);

  }
 
  const updateRecord = async () => {
    const recordRef = doc(db, "record", id);
    await updateDoc(recordRef, record);

  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: keyof record) => {
    setRecord((prev) => {
      if (prev) {
        if (field != 'contract' && field != 'length') {
          prev[field] = e.target.value;
          return prev;
        }
      } else {
        return prev;
      }
    })
  }
  useEffect(() => {
    getRecord();
  }, [])
  return (
    <div className={cx('container')}>
      <Sidebar />
      <RecordDetailContent handleChange={handleChange} record={record} updateRecord={updateRecord} />
    </div>
  )
}

export default RecordDetail

 // const updatePMQ = async () => {
  //   const q = query(collection(db, "record"), where("singer", '==', 'Phan Mạnh Quỳnh'));
  //   const recordSnapshot = await getDocs(q);
  //    recordSnapshot.forEach(async (item)=>{
  //     const recordRef = doc(db, "record", item.id);
  //     await updateDoc(recordRef, {
  //        'producer':'HQM'
  //     });
  //    })

  // }