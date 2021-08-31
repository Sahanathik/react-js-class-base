import React from "react";

class Register extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="container">
             <div class="row">
             
        <div class="col-md-offset-5 col-md text-left">
            <h3>Register</h3>
      <hr />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">User Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="User Name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Phone Number" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label> 
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" /><br />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        
    

      </form>
</div>
</div>
    </div>
  
        );
    }
}

export default Register;