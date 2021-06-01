import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {

constructor(){
    super()

    this.state ={
        email:"",
        password:""
    }
}

handleSubmit = async (event)=>{
    event.preventDefault();

    const {email,password} = this.state;

    try{
        auth.signInWithEmailAndPassword(email,password);
        this.setState({email:"",password:""});


    }catch(error){
        console.log(error);
    }

}

handleChange =(event)=>{
    
const {name,value} = event.target;

this.setState({
    [name]:value
    
})


}


render(){

    return(

        <div className="sign-in">
            <h2> I already have a account</h2>
            <span> Sign in with your email and password</span>

            <form className="form" onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} 
                label="Email" name="email" value= {this.state.email} type="email" required/>
                
                <FormInput handleChange={this.handleChange} label="Password"
                 name="password" value= {this.state.password} type="password" required/>
                
                <div className="buttons">
                <CustomButton type="submit" > sign in </CustomButton>
                <CustomButton type ="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>
                

            </form>

        </div>



    )
}


}

export default SignIn;