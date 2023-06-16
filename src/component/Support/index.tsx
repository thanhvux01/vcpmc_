import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import { android, cloud ,window } from '../../assets/png';
import { Button } from '@mui/material';

let cx = classNames.bind(styles);


const DownloadContent = () => {
  
  return (
    <div className={cx('container')}>
    <Header />
    <h2>Tải App</h2>
    <div className={cx('container-download')}>
          <h2>Ứng dụng <span className={cx('orange')}>VCPMC</span></h2>
          <div className={cx('line-break')}></div>
          <h3>Bạn vui lòng chọn <span className={cx('bold')}>nền tảng</span> phù hợp để lựa chọn</h3>
          <div className={cx('card-holder')}>
              <div className={cx('card')}>
                   <img src={cloud} />
                   <Button variant='contained' sx={{width:'208px' , height:'50px' , background:'#FF7506'}} className={cx('btn')}>Tool Upload</Button>
              </div>
              <div className={cx('card')}>
                   <img src={window} />
                   <Button variant='contained' sx={{width:'208px' , height:'50px' , background:'#FF7506'}} className={cx('btn')}>Tải App Window</Button>
              </div>
              <div className={cx('card')}>
                   <img src={android} />
                   <Button variant='contained' sx={{width:'208px' , height:'50px' , background:'#FF7506'}} className={cx('btn')}>Tải App Android</Button>
              </div>
          </div>
    </div>
    </div>
  )
}





export default DownloadContent