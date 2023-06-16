import React, { useEffect } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import DownloadContent from '../../component/Support';
let cx = classNames.bind(styles);

const Download = () => {
 
  return (
    <div className={cx('container')}>
     <SideBar/>
    <DownloadContent/>
    </div>
  )
}

export default Download