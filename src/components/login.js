import React from "react";

class LoginForm extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="container">
             <div class="row">
             
        <div class="col-md-offset-5 col-md text-left">
            <h3>Login</h3>
      <hr />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label> 
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" /><br />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
       

      </form>
</div>
</div>
    </div>
 
        );
    }
}

export default LoginForm;