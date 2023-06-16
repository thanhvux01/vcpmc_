import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { DetailPlaylistContent } from '../../component/Playlist';
import { useParams } from 'react-router';
import { playlist } from '../../type/playlist';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
let cx = classNames.bind(styles);

const DetailPlaylist = () => {

  const params = useParams();

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

  useEffect(() => {
    getPlaylist();
  }, [])

  return (
    <div className={cx('container')}>
      <SideBar />
      <DetailPlaylistContent playlist={playlist} />
    </div>
  )
}

export default DetailPlaylist