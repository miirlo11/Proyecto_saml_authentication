import React from "react";

function Login(){
    return(
        <div className='container shadow-lg hola'>
        <br/>
        <div className='hola1'>
          <h2 className='text-center Welcome' sstyle={{color: "white"}}>Welcome</h2>
          <br/>
          <form>
            <div className='mb-3'>
              <label for="username" className='username form-label' style={{color: "white"}}>  <strong> <h4> Email address</h4></strong></label>
              <input type="email" required className='form-control' id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className='mb-3'>
              <label for="exampleInputPassword1" className='form-label' style={{color: "white"}}> <strong> <h4>Password </h4></strong></label>
              <input type="password" required className='form-control' id="exampleInputPassword1"/>
            </div>
            <button type="submit"  className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div> 
    )
}

export default Login;