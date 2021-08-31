import React from "react";

class ResetPassword extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="container">
             <div class="row">
             
        <div class="col-md-offset-5 col-md text-left">
            <h3>Reset Password</h3>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Old Password</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Old Password" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">New Password</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="New Password" />
        </div>
        <button type="submit" class="btn btn-primary">Reset Password</button>
        
      </form>
</div>
</div>
    </div>
  
        );
    }
}

export default ResetPassword;