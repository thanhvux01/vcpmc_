import React , {ChangeEvent, useState} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { eye , date} from '../../../assets/svg';

let cx = classNames.bind(styles);

type inputProp = {
     className? : string;
     variant? : string,
     outline? : string,
     icon? : string,
     label? : string,
     defaultValue? : string,
     onChange? : (e : ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({className , variant , icon , label , onChange , outline , defaultValue} : inputProp) => {
   const [pwd,setPwd] = useState('password');
   const handleVisible = () => {
       pwd=='password' ? setPwd('text') : setPwd('password');
   }

   if(variant=='password'){
     return (
    <div className={cx('input-wrapper')}>
    <label>{label}</label>
     <div className={cx('outline')} style={{border:`1px solid ${outline}`}}>
      <input type={pwd} className={cx('input',className)} onChange={onChange} defaultValue={defaultValue} ></input>
    </div>
    <img src={eye} className={cx('icon')} onClick={handleVisible}/>
    </div>
     )
  }else if(variant=='checkbox'){
     return (
        <div className={cx('checkbox-wrapper')} >
        <input type="checkbox" id="remember" name="remember" value="1" className={cx('checkbox',className)} onChange={onChange}/>
        <label  htmlFor="rember">{label}</label>
       </div>
     )
  }else if(variant=='blocked'){
    return (
      <div className={cx('input-wrapper')} >
      <label>{label}</label>
      <div>
      <input disabled className={cx('input',className,'blocked')} defaultValue={defaultValue}></input>
      </div>
      </div>
   )
  }else if(variant=='date'){
    return (
     <div className={cx('input-wrapper')}>
    <label>{label}</label>
     <div className={cx('outline')} style={{border:`1px solid ${outline}`}}>
      <input type='text' className={cx('input',className)} onChange={onChange} ></input>
    </div>
    <img src={date} className={cx('icon-bd')} />
    </div>
   )
  }
  else{
    return (
        <div className={cx('input-wrapper')} >
        <label>{label}</label>
        <div style={{border:`1px solid ${outline}`}}>
        <input type='text' className={cx('input',className)} onChange={onChange} style={{borderColor:outline}} defaultValue={defaultValue}></input>
        </div>
        </div>
    )
  }
}

export default Input