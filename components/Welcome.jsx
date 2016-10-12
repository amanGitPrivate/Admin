import React from 'react';
import Sidebar from '../common/sidebar.jsx';
class Welcome extends React.Component {

  constructor(props) {
      super(props);
      this.state = {showBookingsPage: false};
  }

  showViewBookingsPage(){
    this.setState({showViewBookingsPage:true})
  }

   render() {
      return (
        <div className = "contentContainer">
         {
        this.state.showViewBookingsPage ?
        <Sidebar/>
        :
        <div className = "welcomePageWrapper">
          <div className = "welcomeNameWrapper">
            <div className = "welcomeBack">Welcome back.</div>
            <div className = "welcomeUserName">Aman</div>
          </div>
          <div className = "optionWrapper">
            <div className = "selectOption">Select an option</div>
            <div className = "roomWrapper">
              <div className = "rooms"></div>
              <div className = "roomLabel">Rooms</div>
            </div>
            <div className = "satelliteWrapper">
              <div className = "satelliteOffices"></div>
              <div className = "satelliteOfficeLabel">Satellite Offices</div>
            </div>
            <div className = "signIn" onClick = {this.showViewBookingsPage.bind(this)}>X</div>
          </div>
         </div>
       }
     </div>
      );
   }


}

export default Welcome;
