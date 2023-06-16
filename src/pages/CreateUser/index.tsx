import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { CreateUserContent } from '../../component/Manage';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { addUser } from '../../state/features/companySlice';
import { useParams } from 'react-router';
import { partner } from '../../type/partner';
import dayjs from 'dayjs';
import { SelectChangeEvent } from '@mui/material';


let cx = classNames.bind(styles);


const CreateUser = () => {
    const params = useParams();
    const [partner, setPartner] = useState<partner>({
        name: '',
        username: '',
        email: '',
        role: 'QA',
        password: '',
        status: 'active',
        lastUpdated: dayjs().format()
    });
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>, field: keyof partner) => {
        if (field != 'status' && field != 'lastUpdated') {
            setPartner((prev) => {
                let temp = { ...prev };
                temp[field] = e.target.value
                return { ...temp }
            })
        } 
        }
    
    const handleSubmit = () => {
        dispatch(addUser({ id: params.id + "", partner }));
    }
    return (
        <div className={cx('container')}>
            <SideBar />
            <CreateUserContent handleChange={handleChange} handleSubmit={handleSubmit} role={partner.role} id={params.id+""} />
        </div>
    )
}

export default CreateUser