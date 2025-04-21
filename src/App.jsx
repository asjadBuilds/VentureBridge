import { MantineProvider } from "@mantine/core";
import AppRouter from "./routes/AppRouter"
import { ToastContainer } from "react-toastify";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import "react-country-state-city/dist/react-country-state-city.css";
import "react-chat-elements/dist/main.css"
import {  useLoginStatus } from "./contexts/LoginStatusContext";
import { useUserDetails } from "./contexts/UserDetailContext";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
function App() {
 const [isLogin, setIsLogin] = useState(false);
 const {setLoginStatus} = useLoginStatus()
 const {setUserDetails} = useUserDetails()
 useEffect(()=>{
  //  const userLogin = Cookies.get('accessToken');
  //  const userDetails = Cookies.get('userDetails');
const userLogin = localStorage.getItem('accessToken');
const userDetails = localStorage.getItem('userDetails');
   if(userLogin || userDetails){
     setIsLogin(true)
     setLoginStatus(true);
     setUserDetails(JSON.parse(userDetails))
   }
   
 },[])

  return (
    <MantineProvider>
      <AppRouter/>
      <ToastContainer/>
    </MantineProvider>
  )
}

export default App
