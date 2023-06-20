import React, { ChangeEvent, useState } from 'react'
import styles from'./styles.module.scss';
import classNames from 'classnames/bind';
import { logo } from '../../assets/png';
import Input from '../CustomInput/Input';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { AppDispatch, RootState } from '../../state/store';
import { Login } from '../../state/features/authSlice';



let cx = classNames.bind(styles);
const FormLog = ( ) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useSelector((state:RootState)=>state.auth);
  const dispatch = useDispatch<AppDispatch>();

  
  const handleEmail = (e : ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
  }
  const handlePassword = (e : ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
  }
 const handleLogin = async (e : React.MouseEvent<HTMLButtonElement>) => {
  try{
     await dispatch(Login({email,password}));
     navigate('/');
  }catch(err){

  } 
 }
  return (
    <div className={cx('container')}>
        <div className={cx('logo-wrapper')}>
           <img src={logo} />
        </div>
        <div className={cx('form-wrapper')}>
          <label>Đăng nhập</label>
          <Input className={cx('input')} label='Tên đăng nhập' onChange={handleEmail} outline={auth.error ? "red" : ""}/>
          <Input className={cx('input')} label='Mật khẩu' variant='password' onChange={handlePassword} outline={auth.error ? "red" : ""}/>
           <div className={cx('error-holder')}>
           {auth.error && <label>{'Có lỗi khi đăng nhập'}</label> }
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