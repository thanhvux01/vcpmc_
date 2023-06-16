import React, { useEffect } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import ScheduleContent from '../../component/Schedule';
import { deleteSingle, getList } from '../../state/features/scheduleSlice';
let cx = classNames.bind(styles);

const Schedule = () => {
    const dispatch = useDispatch<AppDispatch>();
    const schedule = useSelector((state:RootState)=>state.schedule);
    const handleDelete = (id:string) => {
        dispatch(deleteSingle(id));
    } 
 useEffect(()=>{
     dispatch(getList());
 },[])
  return (
    <div className={cx('container')}>
     <SideBar/>
     <ScheduleContent schedule={schedule} handleDelete={handleDelete}/>
    </div>
  )
}

export default Schedule