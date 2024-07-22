import React, { useState,useEffect } from 'react'
import Child from './Child';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sports = {
    no:'1',
    playername:'Cricket',
    matches:'5',
    rank:'1',
    points:'350',
    runs:'655',
}

const Url = 'https://jsonplaceholder.typicode.com/todos';


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


    //  Todo Api Data

    const [todo,setTodo] = useState([]);


    const handleTodo = async () =>{
        const res = await fetch(Url);
        const data = await res.json();

        setTodo(data)
    }

    useEffect(()=>{
         console.log(handleTodo());
    },[])
    
    console.log(todo);

    return (
        
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <h2 className="text-center mt-5 text-primary">Todo</h2>
                    <table className='table table-striped'>
                        <thead className='table-dark'>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>UserID</th>
                            </tr>
                        </thead>
                        <tbody>
                        {todo.map((item) => {
                            return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? (<FontAwesomeIcon className='text-success' icon="fas fa-circle" />) : (<FontAwesomeIcon className='text-warning' icon="far fa-circle" />)}</td>
                                <td>{item.userId}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>

                    <h2 className="text-center mt-5 text-white">Welcome, !</h2  >

                    <Child sports={Sports}/>

                    <div className='screensize'><h1> Width : {ScreenSize.width}</h1>
                    <h1> Height : {ScreenSize.height}</h1></div>
                </div>
            </div>
            
    );
}
   
export default Dashboard;