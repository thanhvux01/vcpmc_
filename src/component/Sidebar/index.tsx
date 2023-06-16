import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { bglogo } from '../../assets/png';
import SidebarItem from '../SidebarItem';
import { ic_banghi, ic_playlist , ic_lichphat , ic_quanly , ic_doanhthu , ic_caidat , ic_hotro } from '../../assets/svg';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

const Sidebar = () => {
  const navigate = useNavigate();
  const [panel,setPanel] = useState(false);
  const handlePanel = () => {
    setPanel(prev=>!prev);
  }
 

  return (
    <div className={cx('container')} >
       <div className={cx('logo-holder')}>
           <img src={bglogo} />
       </div>
       <div className={cx('feature-list-item')}>
           <SidebarItem title='Kho bản ghi' icon={ic_banghi}  href='/record' />
           <SidebarItem title='Playlist' icon={ic_playlist}  href='/playlist'/>
           <SidebarItem title='Lập lịch phát' icon={ic_lichphat}  href='/schedule'/>
           <SidebarItem title='Quản lý' icon={ic_quanly}  href='/contract' handlePanel={handlePanel} >
            {
              panel &&   <div className={cx('panel')} onMouseOver={handlePanel}>
              <span onClick={()=>{
                 navigate('/contract')
                 navigate(0)
              }}>Quản lý hợp đồng</span>
              <span onClick={()=>{
                 navigate('/contract')
                 navigate(0)
              }}>Quản lý thiết bị</span>
              <span onClick={()=>{
                 navigate('/partner')
                 navigate(0)
              }}>Đơn vị uỷ quyền</span>
              <span
              onClick={()=>{
                 navigate('/manage')
              }}
              >Đơn vị sử dụng</span>  
           </div> 
            }
           </SidebarItem>
           <SidebarItem title='Doanh thu' icon={ic_doanhthu}  href='/record'/>
           <SidebarItem title='Cài đặt' icon={ic_caidat} href='/record'/>
           <SidebarItem title='Hỗ trợ' icon={ic_hotro}  href='/download'/>
       </div>
       
    </div>
  )
}

export default Sidebar