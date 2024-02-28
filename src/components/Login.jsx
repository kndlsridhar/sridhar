import axios from "axios";
import React,{ useState } from "react";


const Login = () => {

  //const [count,setCount]=useState(0);
// const increment=()=>{
  //   setCount(count => count+1);
  // }
  // const decrement=()=>{
  //   setCount(count => count-1);
  // }
  const [datab,setDatab] = useState({
    username: 'kminchelle',
    password: '0lelplR'
  })

  const [error,setError]=useState();

  
  
  //distructuring
  const {username,password} = datab;

  //onchange

  const changeHandler = e =>{
    setDatab({...datab,[e.target.name]:[e.target.value]})
  }

  // onsubmit
  const submitHandler = async e =>{
    e.preventDefault()
    //console.log(data);
    
    try{
      const res=await axios.post('https://dummyjson.com/auth/login',{
      datab
    });
    
    const token=res.data.token;
    localStorage.setItem('token',token)
    //window.location.href = '/dashboard';

    }catch(error){
      setError('error here')
    }

  }
    return (
      
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">Login</h4>
                <form onSubmit={submitHandler}>
                  <input type="text" name="username" className="form-control mb-3" placeholder="Email" value={username} onChange={changeHandler}/>
                  <input type="password" name="password" className="form-control mb-3" placeholder="Password" value={password} onChange={changeHandler} />
                  <button type="submit" className="btn btn-dark w-100 btn-block" name="submit">Login</button>


{error && <p>{error}</p>}
                </form>
                
                {/* <div className="d-flex"><button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button></div> */}
                  
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
export default Login;