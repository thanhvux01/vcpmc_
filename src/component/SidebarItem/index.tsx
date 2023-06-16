import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router';
let cx = classNames.bind(styles);

type ItemType = {
    title: string,
    icon:string,
    expanded? : boolean,
    href: string,
    children?:React.ReactNode,
    handlePanel?: () => void,
    

}

const SidebarItem = ({title,icon,href,children,handlePanel}:ItemType) => {
 
  const navigate = useNavigate();
  return (
    <div className={cx('wrapper')} onClick={()=>{
      navigate(`${href}`);
    } } onMouseOver={()=>{
       handlePanel && handlePanel()
    }}>
         <div className={cx('icon')}>
            <img src={icon}/>
         </div>
         <label>{title}</label>
        {children}
    </div>
  )
}

export default SidebarItem