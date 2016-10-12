import React from 'react';
import Welcome from './Welcome.jsx'
class App extends React.Component {

  constructor(){
     super();
     this.state = {
        showSignInPage:false
     }
  }

  signIn(){

    this.setState({
      showSignInPage:true
    })

  }

   render() {
      return (
         <div className = "mainWrapper">
          {
          this.state.showSignInPage
          ?
          <Welcome/>
          :
          <div className = "loginBlockWrapper">
            <div className = "loginSection">
              <div className = "adminWrapper">Admin Login</div>
              <input type = "text" className = "loginPageTextBox" placeholder = "enter username or email" refs = "username"></input>
              <div className = "lineBreak"></div>
              <input type = "text" className = "loginPageTextBox" placeholder = "enter password" refs = "password"></input>
              <div className = "lineBreak"></div>
              <div className = "signIn" onClick = {this.signIn.bind(this)}>X</div>
            </div>
          </div>
         }
         </div>
      );
   }


}



export default App;
