import "./App.css";
import SportsC from "./components/SportsC";
import ScienceC from "./components/ScienceC";
import Header from "./components/Header";
import HealthC from "./components/HealthC";
import GeneralC from "./components/GeneralC";
import Article from "./components/Article";
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Pagination from "./components/Pagination";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { gapi } from 'gapi-script';
import UserProfile from "./components/UserProfile";
const clientId="528072669011-3uqpfh7lun7fkcs85u80ek50cd0rsk7a.apps.googleusercontent.com"

function App() {
const [details, setDetails] = useState({});
const [search,setSearch] = useState()

useEffect(()=>{
  function start(){
  gapi.client.init({
    clientId:clientId,
    scope:""
  })
};
gapi.load('client:auth2',start);
})
  return (
    <>
      <Header setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<GeneralC search={search} setDetails={setDetails}/>} />
        <Route path="/sports" element={<SportsC search={search} setDetails={setDetails}/>} />
        <Route path="/health" element={<HealthC search={search} setDetails={setDetails}/>} />
        <Route path="/science" element={<ScienceC search={search} setDetails={setDetails}/>} />
        <Route path="/article/:id" element={<Article details={details}  />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes> 
      {/* <Pagination/> */}
    </>
  );
}

export default App;
