import React from 'react'
import { useNavigate } from 'react-router'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

type IHover = {
    href:string,
    icon:string,
    label:string,
}

const Hover = ({href,icon,label}:IHover) => {
    const navigate = useNavigate();
  return (
    <div className={cx('hover')}>
    <div className={cx('add-btn')} onClick={()=>{
      navigate(`${href}`)
    }}>
       {
       <img src={icon}/>
       }
    </div>
    <span>{label}</span>
   </div>
  )
}
type IHoverArray = {
    href:string[],
    icon:string[],
    label:string[],
}
export const HoverArray = ({href,icon,label}:IHoverArray) => {
    const navigate = useNavigate();
  return (
    <div className={cx('hover')}>
     {label.map((item,i)=>{
        return<> <div className={cx('add-btn')} onClick={()=>{
            navigate(`${href[i]}`)
          }}>
             {
              <img src={icon[i]}/>
             }
          </div>
          <span>{item}</span>
        </>  
     })}
    
   </div>
  )
}

export default Hover