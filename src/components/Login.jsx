import React,{ useState } from "react";


const Login = () => {
  const [data,setData] = useState({
    username:'',
    password:''
  })

  //distructuring
  const {username,password} = data;

  //onchange

  const changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  // onsubmit
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
export default Login;