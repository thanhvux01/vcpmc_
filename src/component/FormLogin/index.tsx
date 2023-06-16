import React, { ChangeEvent, useState } from 'react'
import styles from'./styles.module.scss';
import classNames from 'classnames/bind';
import { logo } from '../../assets/png';
import Input from '../CustomInput/Input';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { auth } from '../../firebase';
import { getUserInfo } from '../../state/features/authSlice';
import { AppDispatch } from '../../state/store';



let cx = classNames.bind(styles);
const FormLog = ( ) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleEmail = (e : ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
  }
  const handlePassword = (e : ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
  }
 const handleLogin = (e : React.MouseEvent<HTMLButtonElement>) => {
   
      e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
      
      .then((userCredential) => {
        
        const user = userCredential.user;
        dispatch(getUserInfo(user.uid));
        
  
        navigate('/');
      })
      .catch((error) => {
        setError('Sai tên đăng nhập hoặc mật khẩu');
      });
 }
  return (
    <div className={cx('container')}>
        <div className={cx('logo-wrapper')}>
           <img src={logo} />
        </div>
        <div className={cx('form-wrapper')}>
          <label>Đăng nhập</label>
          <Input className={cx('input')} label='Tên đăng nhập' onChange={handleEmail} outline={error ? "red" : ""}/>
          <Input className={cx('input')} label='Mật khẩu' variant='password' onChange={handlePassword} outline={error ? "red" : ""}/>
           <div className={cx('error-holder')}>
           {error && <label>{error}</label> }
           </div>
           <div className={cx('check-holder')}>
           <Input className={cx('check')} label='Ghi nhớ đăng nhập' variant='checkbox'/>
           </div>
          <Button variant='contained' className={cx('btn')} type='submit' onClick={handleLogin}>Đăng nhập</Button>
        </div>

    </div>
  )
}

export default FormLog