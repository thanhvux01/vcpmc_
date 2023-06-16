import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
const SwitchContract = () => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('authorization')}>
           <p>Hợp đồng uỷ quyền</p>
        </div>
        <div className={cx('mining')}>
        <p>Hợp đồng khai thác</p>
        </div>
    </div>
  )
}

export default SwitchContract