import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import ManageContent from '../../component/Manage';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { getList } from '../../state/features/accompanySlice';
import { AccompanyDetailContent } from '../../component/Manage';
import { getSingle } from '../../state/features/companySlice';
import {  useParams } from 'react-router';

let cx = classNames.bind(styles);
 

const AccompanyDetail = () => {
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();
 
  const accompany =  useSelector((state:RootState)=>state.accompany);
  
  useEffect(()=>{
    dispatch(getSingle(param.id+""));
   
  },[])
  return (
    <div className={cx('container')}>
      <SideBar />
      <AccompanyDetailContent accompany={accompany}/>
    </div>
  )
}

export default AccompanyDetail