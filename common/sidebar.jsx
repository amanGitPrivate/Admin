import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import BookingsTable from './bookingsTable.jsx'

class Sidebar extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        open: false,
        upComingBookings:false,
        viewBookings:false
      };
    }

    handleToggle(){
      this.setState({open: !this.state.open})
    };

    showAllBookings(){
      this.setState({viewBookings:true,open: !this.state.open});
    }

    render() {
      return (
        <div className = "sideBarPagesContainer">
        <AppBar
            title="Accomodation Admin"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onClick={this.handleToggle.bind(this)}
            style = {{"backgroundColor":"#292a4b"}}
          />
          <Drawer open={this.state.open}
          className = "sideDrawer"
          >
          <div className = "avtarWrapper">
               <Avatar
                  size={60}
                  style={{margin: 5}}
                />
                <div className = "whiteText">Welcome Back</div>
                <div className = "whiteText">Aman</div>
                <div className = "logout">Logout</div>
              </div>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Home</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Add Rooms</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showAllBookings.bind(this)}>View bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Upcoming Bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Upcoming Hotel Bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Reports</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Feedback</MenuItem>
          </Drawer>
        <div className = "sideBarContentWrapper">
          {this.state.viewBookings ? <BookingsTable pageName = {"View Bookings"}/> : null}
        </div>
        </div>
      );
    }

}
export default Sidebar;
