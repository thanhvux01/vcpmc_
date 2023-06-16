import React, { ChangeEvent, useEffect } from 'react'
import Header from '../Header'
import BreadCrumb from '../BreadCrumb'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import { AccompanyDetailTable, ManageContentTable } from '../Table';
import { accompany } from '../../type/accompany';
import { HoverArray } from '../Hover';
import { u_plust, u_role, u_trash } from '../../assets/svg';
import Input from '../CustomInput/Input';
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { CustomSelect } from '../CustomSelect';
import { partner } from '../../type/partner';
let cx = classNames.bind(styles);

type IManageContent = {
  accompanies: accompany[],

}

const AccompanyContent = ({ accompanies }: IManageContent) => {

  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Playlist', 'Chi tiết playlist']} href={['/playlist', '#']} />
      <h2>Danh sách đơn vị sử dụng</h2>
      <Search placeholder='Tên tài khoản giá trị hợp đồng' className={cx('search')} />
      <ManageContentTable accompanies={accompanies} />
    </div>
  )
}

type AccompanyDetailContent = {
  accompany: accompany;
}

export const AccompanyDetailContent = ({ accompany }: AccompanyDetailContent) => {

  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Quản lý', 'Đơn vị sử dụng','Chi tiết']} href={['/accompany', `/accompany`,'#']} />
      <h2>Đơn vị sử dụng- {accompany.author}</h2>
      <Search placeholder='Tên bản ghi , tên ca sĩ , tác giả' className={cx('search')} />
      <AccompanyDetailTable accompany={accompany}  />
      <HoverArray label={['Thêm người dùng', 'Xoá', 'Role']} icon={[u_plust, u_trash, u_role]} href={['create', '#','#']} />
    </div>
  )
}

type PartnerContent = {
    partner?:partner,
    id:string,
   
}
export const  UserContent = ({partner,id}:PartnerContent) => {

  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Quản lý', 'Đơn vị sử dụng','Chi tiết','Thông tin người dùng']} href={['/accompany', '/accompany',`/accompany/${id}`,'#']} />
      <h2>Thêm người dùng</h2>
      <div className={cx('wrapper-partner-form')}>
        <div className={cx('partner-form')}>
          <div className={cx('left')}>
            <div className={cx('row')}>
              <label>Tên người dùng</label>
              <span>{partner?.username}</span>
            </div>
            <div className={cx('row')}>
              <label>Email</label>
              <span>{partner?.email}</span>
            </div>
            <div className={cx('row')}>
              <label>Vai trò</label>
              <span>{partner?.role}</span>
            </div>
          </div>
          <div className={cx('right')}>
          <div className={cx('row')}>
              <label>Tên Đăng nhập</label>
              <span>{partner?.username}</span>
            </div>
            <div className={cx('row')}>
              <label>Mật Khẩu</label>
              <span>******</span>
            </div>
            <div className={cx('row')}>
              <label className={cx('status')}>Trạng thái người dùng</label>
              <span>{partner?.status == 'active' ? 'Đã kích hoạt' : 'Ngừng kích hoạt'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
type ICreatePartnerContent = {
        handleChange: (e:ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> ,field:keyof partner) => void,
        handleSubmit: () => void
        role:string,
        id:string,
}

export const CreateUserContent = ({role,handleChange,handleSubmit,id}:ICreatePartnerContent) => {
    
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Quản lý', 'Đơn vị sử dụng','Chi tiết','Thông tin người dùng']} href={['/accompany', '/accompany',`/accompany/${id}`,'#']} />
      <h2>Thêm người dùng</h2>
      <div className={cx('wrapper-partner-form')}>
        <div className={cx('partner-form')}>
          <div className={cx('left')}>
            <div className={cx('row')}>
              <label>Tên người dùng</label>
              <Input className={cx('input')} onChange={(e)=>{
                  handleChange(e,'name');
              }}/>
            </div>
            <div className={cx('row')}>
              <label>Email</label>
              <Input className={cx('input')} onChange={(e)=>{
                  handleChange(e,'email');
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
                 onChange={(e)=>{
                    handleChange(e,'role');
                 }}
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
              <Input className={cx('input')} onChange={(e)=>{
                  handleChange(e,'username');
              }}/>
            </div>
            <div className={cx('row')}>
              <label>Mật khẩu</label>
              <Input className={cx('input')} onChange={(e)=>{
                  handleChange(e,'password');
              }}/>
            </div>
            <div className={cx('row')}>
              <label>Nhập lại mật khẩu</label>
              <Input className={cx('input')} onChange={(e)=>{
                  handleChange(e,'password');
              }}/>
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

export default AccompanyContent