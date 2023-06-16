import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { CreateUserContent } from '../../component/Manage';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { addUser } from '../../state/features/companySlice';
import { useNavigate, useParams } from 'react-router';
import { partner } from '../../type/partner';
import dayjs from 'dayjs';
import { SelectChangeEvent } from '@mui/material';
import { UpdatePartnerContent } from '../../component/Partner';
import { Update, getWithUsername, updatePartner } from '../../state/features/singlePartnerSlice';



let cx = classNames.bind(styles);


const UpdatePartner = () => {

    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const partner = useSelector((state:RootState)=>state.singlepartnerSlice);
    const handleChange = (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>, field: keyof partner) => {
          const value = e.target.value+"";
          dispatch(Update({value,field}));
   }
    
    const handleSubmit = () => {
        
        dispatch(updatePartner(partner))
        navigate('/partner');
        
    }
    useEffect(()=>{
           dispatch(getWithUsername(params.id+""));
    },[])
    return (
        <div className={cx('container')}>
            <SideBar />
            <UpdatePartnerContent handleChange={handleChange} handleSubmit={handleSubmit} partner={partner} role={partner.role}/>
        </div>
    )
}

export default UpdatePartner