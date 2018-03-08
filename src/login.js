import React, { Component } from "react";
import "./login.css";

class Login extends Component {

   

    render(){
        return( 
            
            <div className="container mainContainer">
            <div className="container sideContainer">
                <h1 className="leftHeading">Sign up</h1>
                <input type="text" className="userName input" placeholder="Username"></input>
                <hr className="horizontalLine"></hr>
                <input type="email" className="email input" placeholder="E-Mail"></input>
                <hr class="horizontalLine"></hr>
                <input type="password" className="password input" placeholder="Password"></input>
                <hr class="horizontalLine"></hr>
                <input type="password" className="repeatPassword input" placeholder="Retype Password"></input>
                <hr className="horizontalLine"></hr>
                <h6 className="correct">Please Retype the Correct Password.</h6>
                <button className="btn btn-info button" type="submit" name="action">Sign Up
                <i className="material-icons right"></i>
              </button>
            </div>
            <div className="container rightContainer">
                <h1 className="rightHeading"><span className="up">Sign In with</span><br></br>Social Network</h1>
                <button className="btn btn-lg facebook baton"><i className="fa fa-facebook-square" aria-hidden="true"></i> Log In with Facebook</button>
                <button className="btn btn-lg twitter baton"><i className="fa fa-twitter" aria-hidden="true"></i> Log In with Twitter</button>
                <button class="btn btn-lg google baton"><i className="fa fa-google-plus" aria-hidden="true"></i> Log In with Google+</button>
    
            </div>
            <button className="circle"><h3>OR</h3></button>
    </div>

        );
    }
}

export default Login;