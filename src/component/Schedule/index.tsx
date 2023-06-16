import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import BreadCrumb from '../BreadCrumb';
import Search from '../Search';
import { schedule } from '../../type/schedule';
import { ScheduleDetailTable, ScheduleTable } from '../Table';
let cx = classNames.bind(styles);


type IScheduleContent = {
   schedule:schedule[];
   handleDelete : (id:string) => void,
}

const ScheduleContent = ({schedule , handleDelete}:IScheduleContent) => {
  
  return (
    <div className={cx('container')}>
    <Header />
    <h2>Danh sách lịch phát</h2>
     <ScheduleTable schedule={schedule} handleDelete={handleDelete}/>
    </div>
  )
}
type IScheduleDetailContent ={
    schedule:schedule
  
}

export const ScheduleDetailContent = ({schedule}:IScheduleDetailContent) => {
    return (
        <div className={cx('container')}>
        <Header />
        <h2>{schedule.name}</h2>
        <h3>Danh sách playlist</h3>
        <ScheduleDetailTable schedule={schedule}  />
        </div>
      )
}



export default ScheduleContent