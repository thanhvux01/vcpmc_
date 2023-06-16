import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Search from '../Search';
import { list, loop, publics, random, tab, upload } from '../../assets/svg';
import { DetailPlayListTable, PlaylistTable } from '../Table';
import { TestBG } from '../../assets/png';
import Input from '../CustomInput/Input';
import { Button, Switch } from '@mui/material';
import { playlist } from '../../type/playlist';
import { CustomSelect } from '../CustomSelect';
import { record } from '../../type/record';
import { Navigate, useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from '../BreadCrumb';
import Hover, { HoverArray } from '../Hover';
import { u_plust } from '../../assets/svg';
let cx = classNames.bind(styles);


type IPlaylistContent = {

  playlists: playlist[],
}

const PlaylistContent = ({ playlists }: IPlaylistContent) => {
  const [category, setCategory] = useState(true);

  return (
    <div className={cx('container')}>
      <Header />
      <h2>Playlist</h2>
      <div className={cx('view-section')}>
        <Search className={cx('search')} />
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
      <div className={cx('table-section')}>
        <PlaylistTable playlists={playlists} />
      </div>
      <HoverArray icon={[u_plust]} label={['Thêm playlist']} href={['create']} />
    </div>
  )
}

type IDetailPlaylistContent = {
  playlist: playlist
}

export const DetailPlaylistContent = ({ playlist }: IDetailPlaylistContent) => {
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Playlist', 'Chi tiết playlist']} href={['/playlist', '#']} />
      <h2>{playlist.title}</h2>
      <div className={cx('detail-section')}>
        <div className={cx('desc')}>
          <img src={TestBG} className={cx('img')} />
          <label>{playlist.title}</label>
          <div className={cx('divider')}>
            <div className={cx('row')}>
              <label>Người tạo:</label>
              <span>{playlist.user} Admin</span>
            </div>
            <div className={cx('row')}>
              <label>Tổng số:</label>
              <span>{playlist.records.length}</span>
            </div>
            <div className={cx('row')}>
              <label>Tổng thời lượng:</label>
              <span> {'0' + Math.floor(playlist.records.reduce((acc, curr) => {
                return acc + curr.length
              }, 0) / 60) + ':' + playlist.records.reduce((acc, curr) => {
                return acc + curr.length
              }, 0) % 60}</span>
            </div>
          </div>
          <div className={cx('desc-text')}>
            {playlist.desc}
          </div>
          <div className={cx('topic')}>
            {playlist.topic.split(' ').map((item) => {
              return <span className={cx('column')}>
                <span className={cx('dot')}></span>
                <label>{item}</label>
              </span>
            })}
          </div>
          <div className={cx('mode')}>
            <div className={cx('row-withicon', 'public')}>
              <img src={publics} />
              <span>
                Hiển thị chế độ công khai
              </span>
            </div>
            <div className={cx('row-withicon', 'random')}>
              <img src={random} />
              <span>
                Phát ngẫu nhiên
              </span>
            </div>
            <div className={cx('row-withicon', 'loops')}>
              <img src={loop} />
              <span>
                Lặp lại
              </span>
            </div>
          </div>
        </div>
        <div className={cx('table-section')}>
          {<DetailPlayListTable records={playlist.records} mode='remove' />}
        </div>
        <HoverArray label={['Chỉnh sửa', 'Xoá playlist']} icon={[u_plust, u_plust]} href={[`/playlist/edit/${playlist.id}`, '/playlist']} />
      </div>
    </div>
  )
}
type IEditPlaylistContent = {
  playlist: playlist
  handleChange: (e:ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,field : keyof playlist) => void
}
export const EditPlaylistContent = ({ playlist , handleChange }: IEditPlaylistContent) => {
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Playlist', 'Chi tiết playlist']} href={['/playlist', '#']} />
      <h2>{playlist.title}</h2>
      <div className={cx('detail-section')}>
        <div className={cx('desc')}>
          <img src={TestBG} className={cx('img')} />
           <div className={cx('title-edit')}>
            <label>Tiêu đề:</label>
           <Input defaultValue={playlist.title} className={cx('input')}/>
           </div>
          <div className={cx('divider')}>
            <div className={cx('row')}>
              <label>Người tạo:</label>
              <span>{playlist.user} Admin</span>
            </div>
            <div className={cx('row')}>
              <label>Tổng số:</label>
              <span>{playlist.records.length}</span>
            </div>
            <div className={cx('row')}>
              <label>Tổng thời lượng:</label>
              <span> { + Math.floor(playlist.records.reduce((acc, curr) => {
                return acc + curr.length
              }, 0) / 60) + ':' + playlist.records.reduce((acc, curr) => {
                return acc + curr.length
              }, 0) % 60}</span>
            </div>
          </div>
          <div className={cx('desc-text')}>
            <label>Mô tả:</label>
            <textarea className={cx('input')} style={{ resize: 'none' }} onChange={(e)=>{
               handleChange(e,'desc');
            }} />
          </div>
          <div className={cx('topic','col')}>
            <label>Chủ đề</label>
            <textarea className={cx('input')} style={{ resize: 'none' }} defaultValue={playlist.topic} onChange={(e)=>{
               handleChange(e,'topic');
            }}/>
          </div>
          <div className={cx('mode')}>

            <div className={cx('public')}>

              <Switch
                defaultChecked
                onChange={(e) => {
                  handleChange(e,'public');
                }}


              />
              <label>Chế độ công khai</label>
              <p className={cx('alert')}> là những trường thông tin bắt buộc</p>
            </div>
          </div>
        </div>
        <div className={cx('table-section')}>
          {<DetailPlayListTable records={playlist.records} mode='remove' className={cx('table')}/>}
          <div className={cx('button-section')}>
          <Button sx={{ width: 208, height: 56, border: '1px solid #FF7506', color: '#FF7506', marginRight: '40px' }} onClick={() => {

          }}>Huỷ</Button>
          <Button sx={{ width: 208, height: 56, background: "#FF7506", color: '#FFFF' }} onClick={() => {
          }}>Lưu</Button>
        </div>
        </div>
        <Hover  icon={u_plust} label='Thêm bản ghi' href={`/playlist/add/${playlist.id}`} />
      </div>
    </div>
  )
}


type ICreatePlaylistTable = {
  publicc: boolean,
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: keyof playlist) => void;
  handleSubmit: () => void;
  records: record[],
  removeRecordFromPlaylist: (index: number) => void

}
export const CreatePlaylistContent = ({ publicc, handleChange, handleSubmit, records, removeRecordFromPlaylist }: ICreatePlaylistTable) => {
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Quản lý', 'Thêm playlist mới']} href={['/playlist', '/playlist/create/']} />
      <h2>Thêm Playlist</h2>
      <div className={cx('wrapper-create-section')}>
        <div className={cx('create-section')}>
          <div className={cx('desc')}>
            <div className={cx('upload-bg')}>
              <label>Ảnh bìa: </label>
              <div className={cx('btn-upload')}>
                <img src={upload} />
                <span>Tải lên</span>
              </div>
            </div>
            <div className={cx('title')}>
              <label>Tiêu đề  : </label>
              <Input className={cx('input')} onChange={(e) => {
                handleChange(e, 'title');
              }} />
            </div>
            <div className={cx('divider')}>
              <div className={cx('row')}>
                <label>Tổng số</label>
                <span>{records.length}</span>
              </div>
              <div className={cx('row')}>
                <label>Tổng thời lượng</label>
                <span>
                  {'0' + Math.floor(records.reduce((acc, curr) => {
                    return acc + curr.length
                  }, 0) / 60) + ':' + records.reduce((acc, curr) => {
                    return acc + curr.length
                  }, 0) % 60}
                </span>
              </div>
            </div>
            <div className={cx('desc-text')}>
              <label>Mô tả</label>
              <Input className={cx('input')} onChange={(e) => {
                handleChange(e, 'desc');
              }} />
            </div>
            <div className={cx('topic')}>
              <label>Chủ đề</label>
              <Input className={cx('input')} onChange={(e) => {
                handleChange(e, 'topic');
              }} />
            </div>
            <div className={cx('public')}>

              <Switch
                defaultChecked
                onChange={(e) => {
                  handleChange(e, 'public');
                }}


              />
              <span>Chế độ công khai</span>
            </div>
          </div>
          <div className={cx('table-section')}>
            <DetailPlayListTable records={records} mode='remove' removeRecordFromPlaylist={removeRecordFromPlaylist} className={cx('table')} />
          </div>

        </div>
        <div className={cx('button-section')}>
          <Button sx={{ width: 208, height: 56, border: '1px solid #FF7506', color: '#FF7506', marginRight: '40px' }} onClick={() => {

          }}>Huỷ</Button>
          <Button sx={{ width: 208, height: 56, background: "#FF7506", color: '#FFFF' }} onClick={() => {
            handleSubmit();
          }}>Lưu</Button>
        </div>
        <Hover href='/playlist/create/addrecord' icon={u_plust} label='Thêm bản ghi' />
      </div>
    </div>
  )
}

type IAddRecordPlaylist = {
  records: record[],
  recordsPlaylist: record[],
  addRecordToPlaylist: (rc: record) => void
  removeRecordFromPlaylist: (index: number) => void
}

export const AddRecordPlaylist = ({ records, recordsPlaylist, addRecordToPlaylist, removeRecordFromPlaylist }: IAddRecordPlaylist) => {
  const navigate = useNavigate();
  return (
    <div className={cx('container')}>
      <Header />
      <BreadCrumb label={['Quản lý', 'Chi tiết playlist', 'Chỉnh sửa']} href={['/playlist', '/playlist/create/', '/playlist/create/addrecord']} />
      <h2>Thêm Playlist</h2>
      <div className={cx('wrapper-add-record')}>
        <div className={cx('add-record-section')}>
          <div className={cx('playlist-table')}>
            <label>Kho bản ghi</label>
            <div className={cx('view-area')}>
              <CustomSelect label='Thể loại' choice={["Tất cả", 'Còn thời hạn', 'Hết hạn']} value={['All', 'Living', 'Expire']} />
              <CustomSelect label='Playlist Mẫu' choice={["Tất cả"]} value={['All']} />
            </div>
            <Search className={cx('search')} />
            <div className={cx('table-section')}>
              <DetailPlayListTable min={true} records={records} addRecordToPlayList={addRecordToPlaylist} />
            </div>
          </div>
          <div className={cx('added-list')}>
            <label>Danh sách bản ghi được thêm vào playlist</label>
            <div className={cx('info')}>
              <div className={cx('column')}>
                <label>Tổng số</label>
                <span>1 bản ghi</span>
              </div>
              <div className={cx('column')}>
                <label>Thời lượng</label>
                <span>1 bản ghi</span>
              </div>
            </div>
            <Search className={cx('search')} />
            <div className={cx('table-section')}>
              <DetailPlayListTable min={true} records={recordsPlaylist} mode='remove' removeRecordFromPlaylist={removeRecordFromPlaylist} />
            </div>

          </div>
        </div>
        <div className={cx('button-section')}>
          <Button sx={{ width: 208, height: 56, border: '1px solid #FF7506', color: '#FF7506', marginRight: '40px' }} onClick={() => {

          }}>Huỷ</Button>
          <Button sx={{ width: 208, height: 56, background: "#FF7506", color: '#FFFF' }} onClick={() => {
            navigate('/playlist/create');
          }}>Lưu</Button>
        </div>
      </div>
    </div>
  )
}

type IAddedRecordPlaylist = {
  records: record[],
  playlist: playlist,
  addRecordToPlaylist: (rc: record) => void
  removeRecordFromPlaylist: (index: number) => void
  id?:string,
  handleSubmit : () => void
 
}

export const AddedRecordPlaylist = ({id, records, playlist, addRecordToPlaylist, removeRecordFromPlaylist , handleSubmit }: IAddedRecordPlaylist) => {
  const navigate = useNavigate();
  const recordsPlaylist = playlist.records;
  return (
    <div className={cx('container')}>
      <Header />
    
      <BreadCrumb label={['Quản lý', 'Chi tiết playlist', 'Chỉnh sửa']} href={['/playlist', `/playlist/${id}`, `/playlist/edit/${id}`]} />
      <h2>Thêm Playlist</h2>
      <div className={cx('wrapper-add-record')}>
        <div className={cx('add-record-section')}>
          <div className={cx('playlist-table')}>
            <label>Kho bản ghi</label>
            <div className={cx('view-area')}>
              <CustomSelect label='Thể loại' choice={["Tất cả", 'Còn thời hạn', 'Hết hạn']} value={['All', 'Living', 'Expire']} />
              <CustomSelect label='Playlist Mẫu' choice={["Tất cả"]} value={['All']} />
            </div>
            <Search className={cx('search')} />
            <div className={cx('table-section')}>
              <DetailPlayListTable min={true} records={records} addRecordToPlayList={addRecordToPlaylist} />
            </div>
          </div>
          <div className={cx('added-list')}>
            <label>Danh sách bản ghi được thêm vào playlist</label>
            <div className={cx('info')}>
              <div className={cx('column')}>
                <label>Tổng số</label>
                <span>1 bản ghi</span>
              </div>
              <div className={cx('column')}>
                <label>Thời lượng</label>
                <span>1 bản ghi</span>
              </div>
            </div>
            <div className={cx('view-type')}>
                 <CustomSelect choice={['All']} label={'Định dạng'} value={['All']}/>
                <Search className={cx('search')}/>
            </div>
            <div className={cx('table-section')}>
              <DetailPlayListTable min={true} records={recordsPlaylist} mode='remove' removeRecordFromPlaylist={removeRecordFromPlaylist} />
            </div>

          </div>
        </div>
        <div className={cx('button-section')}>
          <Button sx={{ width: 208, height: 56, border: '1px solid #FF7506', color: '#FF7506', marginRight: '40px' }} onClick={() => {

          }}>Huỷ</Button>
          <Button sx={{ width: 208, height: 56, background: "#FF7506", color: '#FFFF' }} onClick={() => {
            handleSubmit();
          }}>Lưu</Button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistContent