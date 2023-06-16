import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logo } from '../../assets/png';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase';
import Input from '../CustomInput/Input';
import { Button } from '@mui/material';
let cx = classNames.bind(styles);


const FormRecover = () => {
  const [email,setEmail] = useState('');
  const [success,setSuccess] = useState(false);

  const handleEmail = (e : ChangeEvent<HTMLInputElement> ) => {
          setEmail(e.target.value);
  }
  const handleSubmit = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
       setSuccess(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div className={cx('container')}>
        <div className={cx('logo-wrapper')}>
           <img src={logo} />
        </div>
        {!success &&
           <div className={cx('form-wrapper')}>
           <label>Khôi phục lại mật khẩu</label>
            <p>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</p>
            <Input label='Email' className={cx('input')} onChange={handleEmail}/>
            <Button variant='contained' className={cx('btn')} type='submit' onClick={handleSubmit}>xác nhận</Button>
         </div>
        }{
            success && 
            <div className={cx('form-wrapper')}>
              <p>Link khôi phục mật khẩu đã được gửi vào email của bạn vui lòng kiểm tra email</p>
              <p>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt mật khẩu</p>
            </div>
        }
     
  </div>
  )
}

export default FormRecover