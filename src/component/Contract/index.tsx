import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import BreadCrumbContract from '../BreadCrumb';
import SwitchContract from '../../component/SwitchContract';
import { OwnerSelect, ValiditySelect } from '../CustomSelect';
import  dayjs  from 'dayjs';
import {Dayjs} from 'dayjs';
import Table from '../Table';
import Search from '../Search';
import Input from '../CustomInput/Input';
import { upload } from '../../assets/svg';
import { Button } from '@mui/material';
import { contractCopy } from '../../type/contract-copy';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

let cx = classNames.bind(styles);

type IContractCreate = {
  handleSubmit: ({}:contractCopy) => void,

}
type IContractContent = {
    contracts:contractCopy[],
}
const datePickerStyle = { border: "1px solid #727288", borderRadius: "8px", backgroundColor: "#2B2B3F", '& input': { width: 200, height: 20, color: "#FFFF" } }
const ContractContent = ({contracts}:IContractContent) => {

  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumbContract />
      <h2>Danh sách hợp đồng</h2>
      <SwitchContract />
      <div className={cx('table-section')}>
        <div className={cx('sort-section')}>
          <OwnerSelect />
          <ValiditySelect />
          <Search className={cx('search')} />
        </div>
        <Table contracts={contracts}  />
      </div>
    </div>
  )
}

export const ContractCreate = ({ handleSubmit }: IContractCreate) => {
  const [contract, setContract] = useState<contractCopy>({
    id: "", 
    name: "",
    createdDate:"",
    validDate: "",
    expDate: "",  
    represent:{
      name:"",  
      company:"",
      position:"",
      birthday:"",
      nation:"",
      number:"",
      gender:'male',
      cccd:{
          location:"",
          id:"",
          createDate:"",
      },
      taxID:"",
      address:"",
      email:"",
      account:{
          username:"",
          password:"",
      },
      bankID:"",
      bankName:"",
    }
  });
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumbContract />
      <h2>Bản sao hợp đồng khai thác - HD123  </h2>
      <div className={cx('form', 'top')}>
        <div className={cx('left', 'section')}>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Tên hợp đồng:
            </label>
            <Input className={cx('input')} onChange={(e)=>{
               setContract((prev)=>{prev.name=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Số hợp đồng:
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.id=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Ngày hiệu lực:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker value={dayjs()} sx={datePickerStyle
              } onChange={(date)=>{
                setContract((prev)=>{prev.validDate = date?.format() ||  dayjs().format() ; return prev;})
                
              }} />
            </LocalizationProvider>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Ngày hết hạn:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker value={dayjs()}sx={datePickerStyle
              } onChange={(date)=>{
                setContract((prev)=>{prev.expDate = date?.format() ||  dayjs().format() ; return prev;})
                
              }} />
            </LocalizationProvider>
          </div>
        </div>
        <div className={cx('section', 'middle')}>
          <label>Đính kèm tệp</label>
          <div className={cx('file')}>
            <div className={cx('btn')}>
              <img src={upload} />
              <label>Tải lên</label>
            </div>
          </div>
        </div>
        <div className={cx('right', 'section')}>
          <label>Loaị hợp đồng</label>
          <div className={cx('combo')}>
            <div className={cx('title')}>
              <label>Trọn gói</label>
            </div>
            <div className={cx('price')}>
              <div className={cx('contract')}>
                <label>Giá trị hợp đồng (VND)</label>
                <Input className={cx('input')}></Input>
              </div>
              <div className={cx('contract')}>
                <label>Giá trị phân phối (VND)</label>
                <Input className={cx('input')}></Input>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className={cx('form', 'bottom')}>
        <div className={cx('left', 'section')}>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Tên đơn vị sử dụng:
            </label>
            <Input className={cx('input')} onChange={(e)=>{
               setContract((prev)=>{
                prev.represent.company=e.target.value ; 
                return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Người đại diện:
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.represent.name=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Chức vụ:
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.represent.position=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Ngày  sinh:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker value={dayjs()}sx={datePickerStyle
              } onChange={(date)=>{
                setContract((prev)=>{prev.represent.birthday = date?.format() ||  dayjs().format() ; return prev;})
                
              }} />
            </LocalizationProvider>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Quốc tịch
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.represent.nation=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Số điện thoại
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.represent.number=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Email
            </label>
            <Input className={cx('input')} onChange={(e) => {
              setContract((prev)=>{prev.represent.email=e.target.value; return prev;})
            }}></Input>
          </div>
        </div>
        <div className={cx('section', 'middle-bottom')}>
          <div className={cx('gender')}>
            <label className={cx('important', 'md2')}>Giới tính</label>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={contract.represent.gender}
              onChange={(e)=>{setContract((prev)=>{prev.represent.gender=e.target.value; return prev;})}}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              CMND
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.cccd.id=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Ngày cấp
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker value={dayjs()}sx={datePickerStyle
              } onChange={(date)=>{
                setContract((prev)=>{prev.represent.cccd.createDate = date?.format() ||  dayjs().format() ; return prev;})
                
              }} />
            </LocalizationProvider>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Nơi cấp
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.cccd.location=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label >
              Mã số thuế
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.taxID=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label>
              Nơi cư chú
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.address=e.target.value; return prev;})
            }}></Input>
          </div>
        </div>
        <div className={cx('right-bottom', 'section')}>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Tên đăng nhập
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.account.username=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Mật khẩu
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.account.password=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Số tài khoản
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.bankName=e.target.value; return prev;})
            }}></Input>
          </div>
          <div className={cx('input-wrapper')}>
            <label className={cx('important')}>
              Ngân hàng
            </label>
            <Input className={cx('input','md3')} onChange={(e) => {
              setContract((prev)=>{prev.represent.account.password=e.target.value; return prev;})
            }}></Input>
          </div>
        </div>
      </div>
      <div className={cx('interact-section')}>
        <label className={cx('note')}>
          Là những trường thông tin bắt buộc
        </label>
        <div className={cx('button-area')}>
          <Button variant='outlined' sx={{ width: 168, height: 48, color: "#FF7506", borderColor: "#FF7506" }}>Huỷ</Button>
          <Button variant='contained' sx={{ width: 168, height: 48, backgroundColor: "#FF7506", borderColor: "#FF7506" }} onClick={() => {
            handleSubmit(contract);
          }}>Lưu</Button>
        </div>
      </div>
    </div>
  )
}



export default ContractContent