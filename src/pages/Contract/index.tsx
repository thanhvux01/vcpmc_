import React, { useEffect } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import ContractContent from '../../component/Contract';
import { db } from '../../firebase';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { getList } from '../../state/features/contractSlice';
import { contractCopy } from '../../type/contract-copy';
let cx = classNames.bind(styles);

/*Lay ban ghi hop dong */

const Contract = () => {

   const contracts = useSelector((state:RootState)=>state.contract)
   const dispatch = useDispatch<AppDispatch>();

  

  useEffect(()=>{
     dispatch(getList());
  
  },[])
  
  return (
    <div className={cx('container')}>
     <SideBar/>
     <ContractContent contracts={contracts} />
    </div>
  )
}

export default Contract