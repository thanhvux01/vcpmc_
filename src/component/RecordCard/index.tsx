import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { TestBG } from '../../assets/png';
import { edit } from '../../assets/svg';
import { record } from '../../type/record';
import { useNavigate } from 'react-router';

let cx = classNames.bind(styles);
type ICard =  {
    record? : record
}

const Card = ({record}:ICard) => {
  const navigate = useNavigate();
  return (
    <div className={cx('wrapper')}>
        <div className={cx('background-section')} style={{backgroundImage:`url(${TestBG})`}}></div>
        <div className={cx('detail')}>
              <div className={cx('desc')}>
                <label>{record?.name}</label>
                <br></br>
                <div className={cx('flex')}>
                  <label className={cx('title')}>{"Ca sĩ"+" :"}</label>
                  <label>{record?.singer}</label> 
                </div>
                <div className={cx('flex')}>
                  <label className={cx('title')}>{"Sáng tác"+" :"}</label>
                  <label>{record?.composer}</label> 
                </div>
                <div className={cx('flex')}>
                  <label className={cx('title')}>{"Số hợp đồng"+" :"}</label>
                  <label>{record?.contract.contractID}</label> 
                </div>
              </div>
              <div className={cx('tag')}>
                  <div className={cx('box')}>
                    <label>Thể loại</label>
                    <label>{record?.category}</label>
                  </div>
                  <div className={cx('box')}>
                    <label>Định dạng</label>
                    <label>{record?.format}</label>
                  </div>
                  <div className={cx('box')}>
                    <label>Thời lượng</label>
                    <label>{record?.length}</label>
                  </div>
                  <div className={cx('edit')} onClick={()=>{
                     navigate(`${record?.isrc}`)
                  }}>
                       <img src={edit}/>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Card