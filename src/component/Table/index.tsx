import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { record } from '../../type/record';
import dayjs from 'dayjs'
import { useNavigate } from 'react-router';
import { playlist } from '../../type/playlist';
import { accompany } from '../../type/accompany';
import { Switch } from '@mui/material';
import { type } from 'os';
import { HoverArray } from '../Hover';
import { partner } from '../../type/partner';
import { contractCopy } from '../../type/contract-copy';
import { schedule } from '../../type/schedule';
import Schedule from '../../pages/Schedule';

let cx = classNames.bind(styles);

type IContractTable = {
     contracts : contractCopy[],

}


const ContractTable = ({contracts}:IContractTable) => {
   

    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {i+1}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'id')}>
                <div className={cx('title')}>
                    Số hợp đồng
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.id}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'guest')}>
                <div className={cx('title')}>
                    Khách hàng
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.name}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'date')}>
                <div className={cx('title')}>
                    Ngày tạo
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.createdDate}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'date')}>
                <div className={cx('title')}>
                    Ngày hiệu lực
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.expDate }
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'date')}>
                <div className={cx('title')}>
                    Ngày hết hạn
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.expDate}
                        </div>
                    })
                }
            </div>
            <div className={cx('col','isvalid')}>
                <div className={cx('title')}>
                    Hiệu lực hợp đồng
                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                               {dayjs(item.expDate).isBefore(dayjs().format()) ? 
                               <div> 
                                <span className={cx('green-dot')}></span>
                                <label>Còn thời hạn</label>
                               </div> : <div>
                               <span className={cx('red-dot')}></span>
                                <label>Hết hạn</label>
                               </div> }
                        </div>
                    })
                }
            </div>
            <div className={cx('col','detail')} style={{width:'200px'}}>
                <div className={cx('title')}>

                </div>
                {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                Xem chi tiết
                        </div>
                    })
                }
            </div>
            <div className={cx('col','detail')} style={{width:'200px'}}>
                <div className={cx('title')}>

                </div>
                     {
                    contracts.map((item,i)=>{
                        return <div className={cx('data')}>
                                Copy hợp đồng
                        </div>
                    })
                }
            </div>
        </div>
    )
}


type IScheduleTable = {
     schedule:schedule[],
     handleDelete : (id:string) => void,
}


export const ScheduleTable = ({schedule,handleDelete}:IScheduleTable) => {
     const navigate = useNavigate();
    
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {
                    schedule.map((item,i)=>{
                        return <div className={cx('data')}>
                                {i+1}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'name')} style={{width:'610px'}}>
                <div className={cx('title')}>
                   Tên lịch
                </div>
                {
                    schedule.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.name}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'time')} style={{width:'517px'}}>
                <div className={cx('title')}>
                    Thời gian phát
                </div>
                {
                    schedule.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.startedTime + '-' + item.endedTime}
                        </div>
                    })
                }
            </div>
            <div className={cx('col','detail')} style={{width:'200px'}}>
                <div className={cx('title')}>
                   
                </div>
                {
                    schedule.map((item,i)=>{
                        return <div className={cx('data')} onClick={()=>{
                              navigate(`${item.id}`)
                        }}>
                                Xem chi tiết
                        </div>
                    })
                }
            </div>
            <div className={cx('col','delete')} style={{width:'200px'}}>
                <div className={cx('title')}>

                </div>
                     {
                    schedule.map((item,i)=>{
                        return <div className={cx('data')} onClick={()=>{
                            handleDelete(item.id);
                        }}>
                                Xoá
                        </div>
                    })
                }
            </div>
        </div>
    )
}

type IScheduleDetailTable = {
     schedule:schedule,
    
}

export const ScheduleDetailTable = ({schedule}:IScheduleDetailTable) => {
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {
                    schedule.schedulePlaylist.map((item,i)=>{
                        return <div className={cx('data')}>
                                {i+1}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'date')} style={{width:'206px'}}>
                <div className={cx('title')}>
                   Ngày phát playlist
                </div>
                {
                    schedule.schedulePlaylist.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.startedDay + '-' + item.endedDay }
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'time')} style={{width:'216px'}}>
                <div className={cx('title')}>
                      Bắt đầu - Kết thúc
                </div>
                {
                    schedule.schedulePlaylist.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.startedTime[i] + '-' + item.endedTime[i] }
                        </div>
                    })
                }
            </div>
            <div className={cx('col','cycle')} style={{width:'200px'}}>
                <div className={cx('title')}>
                   Chu kỳ phát
                </div>
                {
                    schedule.schedulePlaylist.map((item,i)=>{
                        return <div className={cx('data')}>
                                {
                                 'Thứ' + item.cycle.toString().replace('/,/g','|')
                                 }
                        </div>
                    })
                }
            </div>
            <div className={cx('col','device')} style={{width:'753px'}}>
                <div className={cx('title')}>
                    Thiết bị
                </div>
                {
                    schedule.schedulePlaylist.map((item,i)=>{
                        return <div className={cx('data')}>
                                {item.device.toString().replace('/,/g','|')}
                        </div>
                    })
                }
            </div>
        </div>
    )
}


type Irecord = {
    records?: record[];
}

export const RecordTable = ({ records }: Irecord) => {
    const navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {i}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'name')}>
                <div className={cx('title')}>
                    Tên bản ghi
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.name}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'isrc')}>
                <div className={cx('title')}>
                    Mã ISRC
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.isrc}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'length')}>
                <div className={cx('title')}>
                    Thời lượng
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {'0' + Math.floor(item.length / 60) + ':' + item.length % 60}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'singer')}>
                <div className={cx('title')}>
                    Ca sĩ
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.singer}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'singer')}>
                <div className={cx('title')}>
                    Tác giả
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.composer}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'category')}>
                <div className={cx('title')}>
                    Thể loại
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.category}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'audio')}>
                <div className={cx('title')}>
                    Định dạng
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {item.format}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'time')}>
                <div className={cx('title')}>
                    Thời hạn sử dụng
                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        {dayjs(item.contract.expDate).isBefore(dayjs()) ? "Hết hạn" : "Còn hạn"}
                    </div>)
                })}
            </div>
            <div className={cx('col', 'update')}>
                <div className={cx('title')}>

                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')} onClick={() => { navigate(`${item.isrc}`) }} >
                        Cập nhập
                    </div>)
                })}
            </div>
            <div className={cx('col', 'listen')}>
                <div className={cx('title')}>

                </div>
                {records?.map((item, i) => {
                    return (<div key={i} className={cx('data')}>
                        Nghe
                    </div>)
                })}
            </div>
        </div>
    )
}
type IPlaylistTable = {

    playlists: playlist[]
}

export const PlaylistTable = ({ playlists }: IPlaylistTable) => {

    const navigate = useNavigate();

    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {playlists.map((item, i) => {
                    return <div className={cx('data')}>
                        {i + 1}
                    </div>
                })}
            </div>
            <div className={cx('col', 'audio-title')}>
                <div className={cx('title')}>
                    Tiêu đề
                </div>
                {playlists.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.title}
                    </div>
                })}
            </div>
            <div className={cx('col', 'record-number')}>
                <div className={cx('title')}>
                    Số bản ghi
                </div>
                {playlists.map((item) => {
                    return <div className={cx('data')}>
                        {item.records.length}
                    </div>
                })}
            </div>
            <div className={cx('col', 'length')}>
                <div className={cx('title')}>
                    Thời lượng
                </div>
                {playlists.map((item) => {
                    return <div className={cx('data')}>
                        {'0' + Math.floor(item.records.reduce((acc, curr) => {
                            return acc + curr.length
                        }, 0) / 60) + ':' + item.records.reduce((acc, curr) => {
                            return acc + curr.length
                        }, 0) % 60}
                    </div>
                })}
            </div>
            <div className={cx('col', 'topic')}>
                <div className={cx('title')}>
                    Chủ đề
                </div>
                {playlists.map((item) => {
                    return <div className={cx('data')}>
                        {item.topic}
                    </div>
                })}
            </div>
            <div className={cx('col', 'create')}>
                <div className={cx('title')}>
                    Ngày tạo
                </div>
                {playlists.map((item) => {
                    return <div className={cx('data')}>
                        {item.createDate}
                    </div>
                })}
            </div>
            <div className={cx('col', 'create-user')}>
                <div className={cx('title')}>
                    Người tạo
                </div>
                {playlists.map((item) => {
                    return <div className={cx('data')}>
                        {item.user}
                    </div>
                })}
            </div>
            <div className={cx('col', 'detail')}>
                <div className={cx('title')}>

                </div>
                {playlists.map((item, i) => {
                    return <div className={cx('data')} onClick={() => {
                        navigate(`/playlist/${item.id}`)
                    }} >
                        Chi tiết
                    </div>
                })}
            </div>
        </div>
    )
}

type IDetailPlaylistTable = {
    min?: Boolean,
    records: record[]
    mode?: 'add' | 'remove',
    addRecordToPlayList?: (rc: record) => void,
    removeRecordFromPlaylist?: (index: number) => void,
    className?: string,
}
export const DetailPlayListTable = ({ min, records, mode = 'add', addRecordToPlayList, removeRecordFromPlaylist, className }: IDetailPlaylistTable) => {

    return (
        <div className={cx('container', min ? 'min' : 'xs', className)}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {records.map((item, i) => {
                    return <div className={cx('data')} key={i + Math.random()}>
                        {i + 1}
                    </div>
                })}
            </div>
            <div className={cx('col', min ? 'audio-title-min' : 'audio-title')}>
                <div className={cx('title')}>
                    Tên bản ghi
                </div>
                {records.map((item) => {
                    return <div className={cx('data')} key={item.name + mode + Math.random()}>
                        {item.name}
                    </div>
                })}
            </div>
            <div className={cx('col', min ? 'record-singer-min' : 'record-singer')}>
                <div className={cx('title')}>
                    Ca sĩ
                </div>
                {records.map((item) => {
                    return <div className={cx('data')} key={item.singer + Math.random()}>
                        {item.singer}
                    </div>
                })}
            </div>
            <div className={cx('col', min ? 'record-composer-min' : 'record-singer')}>
                <div className={cx('title')}>
                    Tác giả
                </div>
                {records.map((item, i) => {
                    return <div className={cx('data')} key={item.composer + Math.random()}>
                        {item.composer}
                    </div>
                })}
            </div>
            <div className={cx('col', min ? 'listen-min' : 'listen')}>
                <div className={cx('title')}>

                </div>
                {records.map((item, i) => {
                    return <div className={cx('data')} key={item.isrc + mode + Math.random()}>
                        Nghe
                    </div>
                })}
            </div>
            {mode === 'add' &&
                <div className={cx('col', min ? 'more-min' : 'listen')}>
                    <div className={cx('title')}>

                    </div>
                    {records.map((item, i) => {
                        return <div className={cx('data')} key={item.contract + mode + Math.random()} onClick={() => {
                            addRecordToPlayList && addRecordToPlayList(item);
                        }}>
                            Thêm
                        </div>
                    })}
                </div>}
            {mode === 'remove'
                && <div className={cx('col', min ? 'more-min' : 'listen')}>
                    <div className={cx('title')}>

                    </div>
                    {records.map((item, i) => {
                        return <div className={cx('data')} key={item.length + mode + Math.random()} onClick={() => {
                            removeRecordFromPlaylist && removeRecordFromPlaylist(i);
                        }}>
                            Gỡ
                        </div>
                    })}
                </div>
            }


        </div>

    )
}

type ManageContentTable = {
    accompanies: accompany[],
}

export const ManageContentTable = ({ accompanies }: ManageContentTable) => {
    const navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {i + 1}
                    </div>
                })}
            </div>
            <div className={cx('col', 'author-username')}>
                <div className={cx('title')}>
                    Tên tài khoản quản trị
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.author}
                    </div>
                })}
            </div>
            <div className={cx('col', 'contract-id')}>
                <div className={cx('title')}>
                    Số hợp đồng
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.contractId}
                    </div>
                })}
            </div>
            <div className={cx('col', 'admin')}>
                <div className={cx('title')}>
                    Admin
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.admin}
                    </div>
                })}
            </div>
            <div className={cx('col', 'user')}>
                <div className={cx('title')}>
                    Người dùng
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.partners.length}
                    </div>
                })}
            </div>
            <div className={cx('col', 'devices')}>
                <div className={cx('title')}>
                    Thiết bị được chỉ định
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.devices}
                    </div>
                })}
            </div>
            <div className={cx('col', 'expired')}>
                <div className={cx('title')}>
                    Ngày hết hạn
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        {item.expiredDate}
                    </div>
                })}
            </div>
            <div className={cx('col', 'status')}>
                <div className={cx('title')}>
                    Trạng thái
                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data')}>
                        <div className={cx('wrapper-input')}>
                            <Switch size='small' checked={item.status == 'active' ? true : false} /> <label className={cx('switch')} >
                                {item.status == 'active' ? 'Đang kích hoạt' : 'Ngừng kích hoạt'}
                            </label>
                        </div>
                    </div>
                })}
            </div>
            <div className={cx('col', 'detail')}>
                <div className={cx('title')}>

                </div>
                {accompanies.map((item, i) => {
                    return <div className={cx('data', 'accompanies')} onClick={()=>{
                        navigate(`/accompany/${item.id}`)
                    }}>
                        Xem Chi Tiết
                    </div>
                })}
            </div>
        </div>
    )

}

type IAccompanyDetailTable = {
    accompany: accompany;
}

export const    AccompanyDetailTable = ({ accompany }: IAccompanyDetailTable) => {
    const arrPartner = accompany.partners;
    const navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {i + 1}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'fullname')}>
                <div className={cx('title')}>
                    Tên người dùng
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.name}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'role')}>
                <div className={cx('title')}>
                    Vai trò
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.role}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'email')}>
                <div className={cx('title')}>
                    Email
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.email}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'username')}>
                <div className={cx('title')}>
                    Tên đăng nhập
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.username}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'last-update')}>
                <div className={cx('title')}>
                    Cập nhập lần cuối
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.lastUpdated && item.lastUpdated.slice(0,10)}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'status')}>
                <div className={cx('title')}>
                    Trạng thái
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.status == 'active' ? <span className={cx('green-dot')}></span> : <span className={cx('red-dot')}></span>}
                            {item.status == 'active' ? 'Hoạt động' : 'Ngưng hoạt động'}
                        </div>
                    })
                }
            </div>
            <div className={cx('col','detail')}>
                <div className={cx('title')}>

                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data','accompany')} onClick={()=>{
                             navigate(`${i}`)
                        }}>
                            Xem Chi Tiết
                        </div>
                    })
                }

            </div>
        </div>
    )
}

type IPartnerContentTable = {
    partners: partner[],
}

export const PartnerContentTable = ({ partners }: IPartnerContentTable) => {
    const arrPartner = partners;
    const navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('col', 'index')}>
                <div className={cx('title')}>
                    STT
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {i + 1}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'fullname')}>
                <div className={cx('title')}>
                   Họ tên
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.name}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'role')}>
                <div className={cx('title')}>
                    Tên đăng nhập
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.username}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'email')}>
                <div className={cx('title')}>
                    Email
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.email}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'username')}>
                <div className={cx('title')}>
                    Ngày hết hạn
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                                {item.expiredDate && item.expiredDate.slice(0,10)}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'last-update')}>
                <div className={cx('title')}>
                   Số điện thoại
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.number}
                        </div>
                    })
                }
            </div>
            <div className={cx('col', 'status')}>
                <div className={cx('title')}>
                    Trạng thái
                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data')}>
                            {item.status == 'active' ? <span className={cx('green-dot')}></span> : <span className={cx('red-dot')}></span>}
                            {item.status == 'active' ? 'Hoạt động' : 'Ngưng hoạt động'}
                        </div>
                    })
                }
            </div>
            <div className={cx('col','detail') } >
                <div className={cx('title')}>

                </div>
                {
                    arrPartner.map((item, i) => {
                        return <div className={cx('data','accompany')} onClick={()=>{
                             navigate(`update/${item.username}`)
                        }}>
                           Cập nhập
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default ContractTable