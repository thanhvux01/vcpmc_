import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Select , MenuItem, SelectChangeEvent } from '@mui/material';
import { vietnam } from '../../assets/png';

let cx = classNames.bind(styles);
const SelectLang = () => {
  const [lang,setLang] = useState('Vi');
  return (
    <div className={cx('wrapper')}>
        <Select
        labelId="select-lang"
        id="select-lang"    
        value={lang}
        className={cx('select')}
        sx={
          {
            color:'white',
            '& .MuiSvgIcon-root': {
              color: '#C8C8DB'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#C8C8DB'
        },'& .MuiPopover-paper':{
          top: '60px !important'
        }
          }
        }
        MenuProps={{
        
         
        }}
      >
        <MenuItem value={'Vi'} className={cx('menu-item')}>Tiếng việt <img src={vietnam} className={cx('img')}/></MenuItem>
        <MenuItem value={'En'} className={cx('menu-item')}>Tiếng Anh</MenuItem>
      </Select>
    </div>
  )
}
export const OwnerSelect = () => {
   const [ownerShip,setOwnerShip] = useState('All');
   return (
     <div className={cx('owner-wrapper')}>
            <label>Quyền sở hữu</label>
            <Select
              
               id='owner-select'
               sx={{ width: 160,height: 40,
                color:"#FFFF",
                '& .MuiSvgIcon-root': {
                  color: '#F5F5FF'
              },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF7506'
              },}}
              value={ownerShip}    
            >
             <MenuItem value={'All'}>Tất cả</MenuItem>
             <MenuItem value={'Performer'}>Người biểu diễn</MenuItem>
             <MenuItem value={'Producer'}>Nhà sản xuất</MenuItem>
            </Select>
              
            
     </div>
   );
}
export const ValiditySelect = () => {
  const [validity,setValidity] = useState('All');
  return (
    <div className={cx('owner-wrapper')}>
           <label>Quyền sở hữu</label>
           <Select
             
              id='owner-select'
              sx={{ width: 160,height: 40,
               color:"#FFFF",
               '& .MuiSvgIcon-root': {
                 color: '#F5F5FF'
             },
               '& .MuiOutlinedInput-notchedOutline': {
                 borderColor: '#FF7506'
             },}}
             value={validity}    
           >
            <MenuItem value={'All'}>Tất cả</MenuItem>
            <MenuItem value={'Performer'}>Mới</MenuItem>
            <MenuItem value={'Producer'}>Còn thời hạn</MenuItem>
            <MenuItem value={'Producer'}>Hết hạn</MenuItem>
            <MenuItem value={'Producer'}>Huỷ</MenuItem>
           </Select>
             
           
    </div>
  );
}

type customSelect = {
    choice:Array<string>;
    value:Array<string>;
    label?:string,
    handleChange?: (event: SelectChangeEvent) => void
}
export const CustomSelect = ({choice,value,label,handleChange}:customSelect) => {
  const [select,setSelect] = useState(value[0]);
  return (  
    <div className={cx('owner-wrapper')}>
           <label>{label}</label>
           <Select
             
              id='owner-select'
              sx={{ width: 160,height: 40,
               color:"#FFFF",
               borderRadius:'8px',
               fontFamily:'Montserrat',
               '& .MuiSvgIcon-root': {
                 color: '#F5F5FF'
             },
               '& .MuiOutlinedInput-notchedOutline': {
                 borderColor: '#FF7506'
             },}}
             value={select}    
             onChange={handleChange}
           >
              {choice.map((item,i)=>{ return <MenuItem key={i} value={value[i]+""}>{item}</MenuItem>})}
           </Select>
             
           
    </div>
  );
}


export default SelectLang