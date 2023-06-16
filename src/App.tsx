import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import Login from './pages/Login';
import Recover from './pages/Recover';
import Contract from './pages/Contract';
import Personal from './pages/Personal';
import CreateContract from './pages/CreateContract';
import Record from './pages/Record';
import RecordDetail from './pages/RecordDetail';
import Playlist from './pages/Playlist';
import DetailPlaylist from './pages/DetailPlaylist';
import CreatePlaylist from './pages/CreatePlaylist';
import AddRecord from './pages/AddRecord';
import EditPlaylist from './pages/EditPlaylist';
import AddedRecord from './pages/AddedRecord';
import Manage from './pages/Accompany';
import AccompanyDetail from './pages/AccompanyDetail';
import User from './pages/User';
import Partner from './pages/Partner';
import UpdatePartner from './pages/UpdatePartner';
import CreateUser from './pages/CreateUser';
import Schedule from './pages/Schedule';
import ScheduleDetail from './pages/ScheduleDetail';
import Download from './pages/Support';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/personal" element={<Personal/>} />
         <Route path="/recover" element={<Recover/>} />
         <Route path="/create" element={<CreateContract/>} />
         <Route path="/record" element={<Record/>} />
         <Route path="/record/:id" element={<RecordDetail/>} />
         <Route path="/schedule" element={<Schedule/>} />
         <Route path="/schedule/:id" element={<ScheduleDetail/>} />
         <Route path="/playlist" element={<Playlist/>} />
         <Route path="/playlist/:id" element={<DetailPlaylist/>} />
         <Route path="/playlist/edit/:id" element={<EditPlaylist/>} />
         <Route path="/playlist/add/:id" element={<AddedRecord/>} />
         <Route path="/playlist/create" element={<CreatePlaylist/>} />
         <Route path="/accompany" element={<Manage/>} />
         <Route path="/contract" element={<Contract/>} />
         <Route path="/accompany/:id" element={<AccompanyDetail/>} />
         <Route path="/accompany/:id/:username" element={<User/>} />
         <Route path="/accompany/:id/create" element={<CreateUser/>} />
         <Route path="/partner" element={<Partner/>} />
         <Route path="/partner/update/:id" element={<UpdatePartner/>} />
         <Route path="/playlist/create/addrecord" element={<AddRecord/>} />
         <Route path="/download" element={<Download/>} />
         <Route path="/" element={<Record/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
      
  );
}

export default App;
