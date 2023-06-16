import React, { useEffect } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import{ ScheduleDetailContent } from '../../component/Schedule';
import { getID } from '../../state/features/singleScheduleSlice';
import { useParams } from 'react-router';
let cx = classNames.bind(styles);

const ScheduleDetail = () => {
   const params = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const schedule = useSelector((state:RootState)=>state.singleScheduleSlice)
  
  useEffect(()=>{
     dispatch(getID(params.id+""));
  })
   
  return (
    <div className={cx('container')}>
     <SideBar/>
     <ScheduleDetailContent schedule={schedule}/>
    </div>
  )
}

export default ScheduleDetail