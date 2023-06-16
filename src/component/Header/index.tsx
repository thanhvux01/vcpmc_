import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SelectLang from '../CustomSelect';
import HeaderUser from '../HeaderUser';
let cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('container')}>
     <HeaderUser/>
     <SelectLang/>
    </div>
  )
}

export default Header