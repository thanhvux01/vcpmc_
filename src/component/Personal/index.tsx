import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import { Avatar, TextField , Button } from '@mui/material';
import Input from '../CustomInput/Input';
import { User } from '../../type/user';
;
let cx = classNames.bind(styles);

type IPersonalContent = {
   user:User
}


const PersonalContent = ({user}:IPersonalContent) => {
  return (
    <div className={cx('container')}>
      <Header/>
       <label className={cx('title')}>Thông tin cơ bản</label> 
        <div className={cx('user-wrapper')}>
            <div className={cx('avatar-section')}>
            <Avatar className={cx('avatar')}>H</Avatar>
             {user.FirstName && user.LastName && <label>{user.LastName + " " + user.FirstName}</label> }
            </div>
            <div className={cx('form-user')}>
              <Input className={cx('input')} label='Họ :' defaultValue={user.LastName}/>
              <Input className={cx('input')} label='Tên :' defaultValue={user.FirstName}/>
              <Input className={cx('input')} label='Ngày Sinh :' defaultValue={user.Birthday}/>
              <Input className={cx('input')} label='Số điện thoại :' defaultValue={user.Number}/>
              <Input className={cx('input','blocked')} label='Email :' variant='blocked' defaultValue={user.Email}/>
               <br/>
              <Input className={cx('input','blocked')} label='Tên Đăng nhập :' variant='blocked' defaultValue={user.Email}/>
               <br/>
               <Input className={cx('input','blocked')} label='Vai trò :' variant='blocked' defaultValue={user.Role} />
               <br/>
                <div className={cx('btn-section')}>
                   <Button className={cx('btn','cancel')} variant='outlined'>Huỷ</Button>
                   <Button className={cx('btn','save')} variant='contained'>Lưu</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalContent