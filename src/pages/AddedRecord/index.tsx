import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { db } from '../../firebase';
import { getDoc, doc, getDocs, collection, updateDoc } from "firebase/firestore";
import { playlist } from '../../type/playlist';
import { useNavigate, useParams } from 'react-router';
import { record } from '../../type/record';
import { AddedRecordPlaylist } from '../../component/Playlist';
let cx = classNames.bind(styles);
const AddedRecord = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [records, setRecords] = useState<record[]>([]);
    const [playlist, setPlaylist] = useState<playlist>({
        title: '',
        topic: '',
        desc: '',
        public: false,
        createDate: '',
        user: '',
        records: [],
        id: ''
    });
    const getPlaylist = async () => {
        const playlistSnapshot = await getDoc(doc(db, "playlist", params.id + ''));
        if (playlistSnapshot.exists()) {
            const playliste = playlistSnapshot.data() as playlist;
            playliste.id = playlistSnapshot.id;
            setPlaylist(playliste as playlist);
        } else {

        }
    }
    const getRecord = async () => {
        let convertRecord: record[] = [];
        const record = await getDocs(collection(db, "record"));
        record.forEach((doc) => {
            convertRecord.push(doc.data() as record);
        });
        setRecords(convertRecord);
    }
    const addRecordToPlayList = (rc: record) => {
        const updatedPlaylist = { ...playlist };
        updatedPlaylist.records.filter((item) => {
            return item.isrc == rc.isrc;
        }).length == 0 &&
            updatedPlaylist.records.push(rc);
        setPlaylist(updatedPlaylist);
    }
    const removeRecordFromPlaylist = (index: number) => {
        const updatedPlaylist = { ...playlist };
        updatedPlaylist.records.splice(index, 1);
        setPlaylist(updatedPlaylist);
    }
    const handleSubmit = async () => {
        const playlistRef = doc(db, "playlist", params.id + '');
        await updateDoc(playlistRef, playlist);
        navigate(`/playlist/edit/${params.id}`)
    }


    useEffect(() => {
        getPlaylist();
        getRecord();
    }, [])

    return (
        <div className={cx('container')}>
            <SideBar />
            <AddedRecordPlaylist id={params.id} records={records} playlist={playlist} addRecordToPlaylist={addRecordToPlayList} removeRecordFromPlaylist={removeRecordFromPlaylist} handleSubmit={handleSubmit} />
        </div>
    )
}

export default AddedRecord