import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { UserContent } from '../../component/Manage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSingle } from '../../state/features/companySlice';
import { useParams } from 'react-router';
import { AppDispatch, RootState } from '../../state/store';


let cx = classNames.bind(styles);
 

const User = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const accompany = useSelector((state:RootState)=>state.accompany);
  useEffect(()=>{
    dispatch(getSingle(params.id+""));
  },[])
  return (
    <div className={cx('container')}>
      <SideBar />
      <UserContent partner={accompany.partners[Number(params.username)]} id={accompany.id}/>
    </div>
  )
}

export default User