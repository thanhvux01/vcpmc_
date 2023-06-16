import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import { DetailPlaylistContent, EditPlaylistContent } from '../../component/Playlist';
import { useParams } from 'react-router';
import { playlist } from '../../type/playlist';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
let cx = classNames.bind(styles);

const EditPlaylist = () => {

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
      console.log("No such document!");
    }
  }
  const handleChange = async (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>, field: keyof playlist) => {
    console.log(e.target.value);
    if (field != 'public' && field != 'records') {
      setPlaylist((prev)=>{
         prev[field] = e.target.value;
         return prev;
      })
      const playlistRef = doc(db, "playlist",params.id+'');
      await updateDoc(playlistRef,
        playlist 
      );

    }
  }
  useEffect(() => {
    getPlaylist();
  }, [])

  return (
    <div className={cx('container')}>
      <SideBar />
      <EditPlaylistContent playlist={playlist} handleChange={handleChange} />
    </div>
  )
}

export default EditPlaylist