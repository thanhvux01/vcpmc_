import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import BreadCrumbContract from '../BreadCrumb';
import Table, { RecordTable } from '../Table';
import { CustomSelect } from '../CustomSelect';
import { Avatar, Button, Pagination, SelectChangeEvent } from '@mui/material';
import Search from '../Search';
import Card from '../RecordCard';
import { useNavigate } from 'react-router';
import { arrowleft, folder, list, tab } from '../../assets/svg';
import Input from '../CustomInput/Input';
import { record } from '../../type/record';
import dayjs from 'dayjs';

let cx = classNames.bind(styles);

type Irecord = {
      records: record[];
      count:number,
      page:number,
      number:number,
}

const RecordContent = ({number,records,count,page}:Irecord) => {
     const ChangeCategory = (e: SelectChangeEvent) => {
          console.log(e.target.value);
     }
     console.log(records);
     const [category, setCategory] = useState(true);
     return (
          <div className={cx('container')}>
               <Header />
               <BreadCrumbContract />
               <h2>Kho bản ghi</h2>
               <Search className={cx('search')} />
               <div className={cx('table-section')}>
                    <div className={cx('sort-section')}>
                         <CustomSelect label='Thể loại' choice={["Tất cả", 'Còn thời hạn', 'Hết hạn']} value={['All', 'Living', 'Expire']} handleChange={ChangeCategory} />
                         <CustomSelect label='Định dạng' choice={["Tất cả", 'Duyệt bởi người dùng', 'Duyệt tự động']} value={['All', 'Living', 'Expire']} handleChange={ChangeCategory} />
                         <CustomSelect label='Thời hạn sử dụng' choice={["Tất cả", 'Duyệt bởi người dùng', 'Duyệt tự động']} value={['All', 'Living', 'Expire']} handleChange={ChangeCategory} />
                         <CustomSelect label='Trạng thái' choice={["Tất cả", 'Duyệt bởi người dùng', 'Duyệt tự động']} value={['All', 'Living', 'Expire']} handleChange={ChangeCategory} />
                         <div className={cx('view-type')}>
                              <img src={list} onClick={() => {
                                   setCategory((prev) => {
                                        return !prev;
                                   })
                              }} />
                              <img src={tab} onClick={() => {
                                   setCategory((prev) => {
                                        return !prev;
                                   })
                              }} />
                         </div>
                    </div>
                    {category ?
                     <RecordTable records={records}/> 
                     : <div className={cx('card-section')}>
                         {records.map((item)=>{
                             return  <Card record={item}/>
                         })}   
                    </div>}
                    <div className={cx('footer')}>
                         <div className={cx('column')}>
                                   Hiển thị <input className={cx('input')} type='number' defaultValue={number}></input> hàng trong mỗi trang
                         </div>
                         <div className={cx('pagination')}>
                         <Pagination count={count} size="small" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

type IrecordDetail = {
     record?:record,
     handleChange: (e:ChangeEvent<HTMLInputElement>,field:keyof record) => void;
     updateRecord: () => void;

}
export const RecordDetailContent = ({record,handleChange,updateRecord}:IrecordDetail) => {
     const navigate = useNavigate();
     if(record!==undefined) {
     return (
          <div className={cx('container')}>
               <Header />
               <BreadCrumbContract />
               <h2>Bản ghi mất em</h2>
               <div className={cx('wrapper-record')}>
               <div className={cx('detail-record')}>
                    <div className={cx('info-section')}>
                         <div className={cx('top')}>
                              <label>Thông tin bản ghi</label>
                              <Avatar className={cx('image')}>Record</Avatar>
                              <div className={cx('folder')}>
                                   <img src={folder} />
                                   <label>Matem.mp3</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Ngày thêm:</label>
                                   <label>{record.createDate}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Người tải lên:</label>
                                   <label>{record.upload}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Người duyệt</label>
                                   <label>{record.approve}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Ngày phê duyệt</label>
                                   <label>{record.approveDate}</label>
                              </div>
                         </div>
                         <div className={cx('bottom')}>
                              <label>Thông tin uỷ quyền</label>
                              <div className={cx('row')}>
                                   <label>Số hợp đồng</label>
                                   <label>{record.contract.contractID}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Ngày nhận uỷ quyền</label>
                                   <label>{record.contract.authorizeDate}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Ngày hết hạn</label>
                                   <label>{record.contract.expDate}</label>
                              </div>
                              <div className={cx('row')}>
                                   <label>Trạng thái</label>
                                   <label>{dayjs().isBefore(dayjs(record.contract.expDate)) ? 'Còn thời hạn' : 'Hết hạn'}</label>
                              </div>
                         </div>
                    </div>
                    <div className={cx('edit-section')}>
                         <label>Chỉnh sửa thông tin</label>
                         <div className={cx('row')}>
                              <label>Tên bản ghi:</label>
                              <Input className={cx('input')} defaultValue={record.name} onChange={(e)=>{
                                   handleChange(e,'name');
                              }}></Input>
                         </div>
                         <div className={cx('row')}>
                              <label>Mã ISRC</label>
                              <Input className={cx('input')} defaultValue={record.isrc} onChange={(e)=>{
                                   handleChange(e,'isrc');
                              }}></Input>
                         </div>
                         <div className={cx('row')}>
                              <label>Ca sĩ</label>
                              <Input className={cx('input')} defaultValue={record.singer} onChange={(e)=>{
                                   handleChange(e,'singer');
                              }}></Input>
                         </div>
                         <div className={cx('row')}>
                              <label>Tác giả</label>
                              <Input className={cx('input')} defaultValue={record.composer} onChange={(e)=>{
                                   handleChange(e,'composer');
                              }}></Input>
                         </div>
                         <div className={cx('row')}>
                              <label>Nhà sản xuất</label>
                              <Input className={cx('input')} defaultValue={record.producer}></Input>
                         </div>
                         <div className={cx('row')}>
                              <label>Thể loại</label>
                              <Input className={cx('input')} defaultValue={record.category}></Input>
                         </div>
                    </div>
               </div>
               <div className={cx('button-section')}>
                     <Button sx={{width:208,height:56,border:'1px solid #FF7506',color:'#FF7506'}} onClick={()=>{
                           navigate('/record')
                     }}>Huỷ</Button>
                     <Button sx={{width:208,height:56,background:"#FF7506",color:'#FFFF'}} onClick={()=>{
                         updateRecord();
                     }}>Lưu</Button>
               </div>
               </div>
          </div>
     )
}else{
     return (
          <div>
               
          </div>
     )
}
}


export default RecordContent;