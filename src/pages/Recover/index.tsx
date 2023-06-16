import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SelectLang from '../../component/CustomSelect';
import FormRecover from '../../component/FormRecover';
import { Link } from 'react-router-dom';
let cx = classNames.bind(styles);

const Recover = () => {
  return (
    <div className={cx('container')}>
    <SelectLang/>
    <FormRecover/>
    <div className={cx('bottom-wrapper')}>
       <Link to={'/login'} style={{color:"#FF7506"}}>Quay lại đăng nhập</Link>
   </div>    
 </div>
  )
}

export default Recover