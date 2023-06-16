import React, { useEffect, useState } from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import PlaylistContent from '../../component/Playlist';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { playlist } from '../../type/playlist';
let cx = classNames.bind(styles);

const Playlist = () => {
   const [playlists,setPlaylists] = useState<playlist[]>([]);
  
   const getPlaylist = async () => {
    let store : playlist[] = [];
    const playlistSnapshot = await getDocs(collection(db, "playlist"));
    playlistSnapshot.forEach((doc) => {
       const playlist = doc.data() as playlist;
       playlist.id = doc.id;
       store.push(playlist);
   })
   setPlaylists(store);
  }
   useEffect(()=>{
    getPlaylist();
   },[])

   
  return (
    <div className={cx('container')}>
     <SideBar/>
     <PlaylistContent playlists={playlists}/>
    </div>
  )
}

export default Playlist