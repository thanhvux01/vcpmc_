import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import PartnerContent from '../../component/Partner';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { getList } from '../../state/features/partnerSlice';


let cx = classNames.bind(styles);
 

const Partner = () => {
  
   const dispatch = useDispatch<AppDispatch>();
   const partners = useSelector((state:RootState)=>state.partner)
  
   useEffect(()=>{
        dispatch(getList());
   },[])

  return (
    <div className={cx('container')}>
      <SideBar />
      <PartnerContent partners={partners}/>
    </div>
  )
}

export default Partner