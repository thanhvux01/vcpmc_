import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import PersonalContent from '../../component/Personal';
import { User } from '../../type/user';
import { useSelector } from 'react-redux';
import { Root } from 'react-dom/client';
import { AppDispatch, RootState } from '../../state/store';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../state/features/authSlice';
let cx = classNames.bind(styles);

const Personal = () => {
   const dispatch = useDispatch<AppDispatch>()
   const user = useSelector((state:RootState)=>state.auth);
   const temp = auth.currentUser;
   useEffect(()=>{
     dispatch(getUserInfo())
   },[])
    return (
        <div className={cx('container')}>
            <Sidebar />
            <PersonalContent user={user}/>
        </div>
    )
}

export default Personal