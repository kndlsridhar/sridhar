import React, { useState,useEffect } from 'react'
import Child from './Child';

const Sports = {
    no:'1',
    playername:'Cricket',
    matches:'5',
    rank:'1',
    points:'350',
    runs:'655',
}
const Dashboard = (props)=> {

     const [ScreenSize,setScreenSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
     });

     function changeScreen(){
        setScreenSize({
            width:window.innerWidth,
            height:window.innerHeight
         })
     }

     useEffect(() => {
       window.addEventListener('resize',changeScreen);
     
       return () => {
        window.removeEventListener('resize',changeScreen);
       }
     }, [])
     
    return (
        
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <h2 className="text-center mt-5 text-white">Welcome, !</h2  >

                    <Child sports={Sports}/>

                    <div className='screensize'><h1> Width : {ScreenSize.width}</h1>
                    <h1> Height : {ScreenSize.height}</h1></div>
                </div>
            </div>
            
    );
}
   
export default Dashboard;