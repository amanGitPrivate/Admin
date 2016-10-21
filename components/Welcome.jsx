import React from 'react';
import Sidebar from '../common/sidebar.jsx';
class Welcome extends React.Component {

  constructor(props) {
      super(props);
      this.state = {showBookingsPage: false,room:false};
  }

  showViewBookingsPage(){
    this.setState({showViewBookingsPage:true})
  }

  makeSelected(selection,event){
    if(selection === "roomSelected"){
      document.querySelector('.rooms').classList.add('roomSelected');
      document.querySelector('.satelliteOffices').classList.remove('satelliteSelected');
      this.setState({room:true});
    }else{
      document.querySelector('.rooms').classList.remove('roomSelected');
      document.querySelector('.satelliteOffices').classList.add('satelliteSelected');
      this.setState({room:false});
    }
  }

   render() {
      return (
        <div className = "contentContainer">
         {
        this.state.showViewBookingsPage ?
        <Sidebar showHotelUpComing = {this.state.room}/>
        :
        <div className = "welcomePageWrapper">
          <div className = "welcomeNameWrapper">
            <div className = "welcomeBack">Welcome back.</div>
            <div className = "welcomeUserName">Aman</div>
          </div>
          <div className = "optionWrapper">
            <div className = "selectOption">Select an option</div>
            <div className = "roomWrapper" onClick = {this.makeSelected.bind(this,"roomSelected")}>
              <div className = "rooms"></div>
              <div className = "roomLabel">Rooms</div>
            </div>
            <div className = "satelliteWrapper" onClick = {this.makeSelected.bind(this,"satelliteSelected")}>
              <div className = "satelliteOffices"></div>
              <div className = "satelliteOfficeLabel">Satellite Offices</div>
            </div>
            <div className = "signIn" onClick = {this.showViewBookingsPage.bind(this)}></div>
          </div>
         </div>
       }
     </div>
      );
   }


}

export default Welcome;
