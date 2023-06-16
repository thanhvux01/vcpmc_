import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import ManageContent from '../../component/Manage';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { getList } from '../../state/features/accompanySlice';


let cx = classNames.bind(styles);
 

const Accompany = () => {
  const dispatch = useDispatch<AppDispatch>();
  const accompanies =  useSelector((state:RootState)=>state.accompanies);

  useEffect(()=>{
    dispatch(getList());
  },[])
  return (
    <div className={cx('container')}>
      <SideBar />
      <ManageContent accompanies={accompanies} />
    </div>
  )
}

export default Accompany