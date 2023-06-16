import React, { ChangeEvent, useEffect } from 'react'
import Header from '../Header'
import BreadCrumb from '../BreadCrumb'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import { partner } from '../../type/partner';
import { PartnerContentTable } from '../Table';
import { Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from '@mui/material';
import Input from '../CustomInput/Input';
let cx = classNames.bind(styles);


type PartnerContent = {
     partners: partner[],
}

const PartnerContent = ({partners}:PartnerContent) => {
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Playlist', 'Chi tiết playlist']} href={['/playlist', '#']} />
      <h2>Danh sách đối tác uỷ quyền</h2>
      <Search placeholder='Họ tên,tên đăng nhập ,email' className={cx('search')} />
       <PartnerContentTable partners={partners} />
    </div>
  )
}

type IUpdateartnerContent = {
    handleChange: (e:ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> ,field:keyof partner) => void,
    handleSubmit: () => void
    partner:partner,
    role:string,
}
export const UpdatePartnerContent = ({handleChange,handleSubmit,partner,role}:IUpdateartnerContent) => {
    
    return (    
        <div className={cx('container')}>
        <Header />
        <BreadCrumb label={['Quản lý','Đối tác uỷ quyền','Cập nhập thông tin người dùng']} href={['/partner','/partner','#']} />
        <h2>Thêm người dùng</h2>
        <div className={cx('wrapper-partner-form')}>
          <div className={cx('partner-form')}>
            <div className={cx('left')}>
              <div className={cx('row')}>
                <label>Tên người dùng</label>
                <Input defaultValue={partner.name} className={cx('input')} onChange={(e)=>{
                   
                }}/>
              </div>
              <div className={cx('row')}>
                <label>Email</label>
                <Input defaultValue={partner.email} className={cx('input')} onChange={(e)=>{
                  
                }}/>
              </div>
              <div className={cx('row')}>
                <label>Vai trò</label>
                <Select
  
                  id='owner-select'
                  sx={{
                    width: 160, height: 48,
                    color: "#FFFF",
                    borderRadius: '8px',
                    fontFamily: 'Montserrat',
                    '& .MuiSvgIcon-root': {
                      color: '#F5F5FF'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#727288'
                    },
                  }} 
                  value={role}
               
                >
                <MenuItem value='QA' >QA</MenuItem>
                <MenuItem value='QC'>QC</MenuItem>
                <MenuItem value='CM'>Content Manager</MenuItem>
                </Select>
              </div>
            </div>
            <div className={cx('right')}>
            <div className={cx('row')}>
                <label>Tên đăng nhập</label>
                <Input defaultValue={partner.username}  className={cx('input')} onChange={(e)=>{
                    handleChange(e,'username');
                }}/>
              </div>
              <div className={cx('row')}>
                <label>Mật khẩu</label>
                <Input defaultValue='********' variant='password' className={cx('input')} onChange={(e)=>{
                    handleChange(e,'password');
                }}/>
              </div>
              <div className={cx('row')}>
                <label>Nhập lại mật khẩu</label>
                <Input defaultValue='********'  variant='password' className={cx('input')} onChange={(e)=>{
                    handleChange(e,'password');
                }}/>
              </div>
            <div className={cx('row')}>
              <label>Trạng thái</label>
              <RadioGroup
        row
        aria-labelledby="active-radio-group"
        name="active-radio"
        value={partner.status}
        onChange={(e)=>{
            handleChange(e,'status');
        }}
      >
        
        <FormControlLabel value="active" control={<Radio />} label="Kích hoạt" sx={{'& .MuiFormControlLabel-label':{color:'#FFFF'}}}/>
        <FormControlLabel value="inactive" control={<Radio />} label="Ngừng kích hoạt"  sx={{'& .MuiFormControlLabel-label':{color:'#FFFF'}}}/>
      </RadioGroup>
            </div>
            </div>
          </div>
          <div className={cx('button-section')}>
            <Button sx={{ width: 208, height: 56, border: '1px solid #FF7506', color: '#FF7506', marginRight: '40px' }} onClick={() => {
  
            }}>Huỷ</Button>
            <Button sx={{ width: 208, height: 56, background: "#FF7506", color: '#FFFF' }} onClick={() => {
               handleSubmit();
            }}>Lưu</Button>
          </div>
        </div>
      </div>
    )
  }
  

export default PartnerContent