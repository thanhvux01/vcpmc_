import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SearchIcon from '@mui/icons-material/Search';

let cx = classNames.bind(styles);

type Search = {
    className?:string;
    placeholder?:string;
}
const Search = ({className,placeholder="Tìm tên bài hát,ca sĩ"}:Search) => {

  return (
    <div className={cx('wrapper',className)}>
     <input placeholder={placeholder}/>
     <SearchIcon className={cx('icon')}/>
    </div>
  )
}

export default Search