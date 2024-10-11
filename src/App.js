import React from 'react'
import { useEffect } from "react";

import Routers from './router/Routers';
import Aos from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
   <>
   <Routers/>  
   
   </>
  )
}

export default App