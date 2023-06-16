import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

const HeaderUser = () => {
  const Navigate = useNavigate();
  return (
    <div className={cx('user-wrapper')} onClick={()=>{
          Navigate('/personal')
    }}>
     <Avatar className={cx('avatar')} >H</Avatar>
     <label className={cx('user-name')}>C.Thành</label>
     <label className={cx('role')}>Admin</label>
    </div>
  )
}

export default HeaderUser