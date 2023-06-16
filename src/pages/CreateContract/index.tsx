import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import { ContractCreate } from '../../component/Contract';
import { collection, addDoc } from "firebase/firestore";  
import { db } from '../../firebase';
import { contractCopy } from '../../type/contract-copy';
let cx = classNames.bind(styles);

const CreateContract = () => {
  const AddContract = async (contract:contractCopy) => {
    const docRef = await addDoc(collection(db, "contracts"), {
       contract
    });
  }
  const handleSubmit = (contract:contractCopy) => {
         AddContract(contract);
  }
  return (
    <div className={cx('container')}>
    <Sidebar/>
    <ContractCreate handleSubmit={handleSubmit} />
   </div>
  )
}

export default CreateContract