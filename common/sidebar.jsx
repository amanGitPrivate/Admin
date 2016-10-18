import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import BookingsTable from '../viewBookings/bookingsTable.jsx';
import UpcomingBookings from '../viewUpcomingBookings/upcomingBookings.jsx';
import Feedback from '../feedbackPage/feedback.jsx';
import AddGuestHouse from '../addGuestHouse/addGuestHouse.jsx';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Sidebar extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        open: false,
        upComingBookings:true,
        viewBookings:false,
        feebackPage:false,
        addNew:false,
        listOfUpcomingBookings:'',
        listOfOnlyHotels:'',
        upComingHotelBookings:false
      };
    }

    handleToggle(){
      this.setState({open: !this.state.open})
    };

    componentWillMount(){

   let dataList = [{
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg",
        bs: "next-generation synergize deliverables",
        catchPhrase: "Multi-layered explicit moratorium",
        city: "New Bonitamouth",
        companyName: "Tillman - Fadel",
        date: "Fri Mar 04 2016 13:46:29 GMT+0530 (IST)",
        email: "Shana.Hartmann14@yahoo.com",
        firstName: "Mandy",
        id: 2222,
        type:"hotel",
        lastName: "Bashirian",
        sentence: "Aliquid deleniti dolorem sed unde ipsa rem delectus saepe in.",
        street: "Velva Throughway",
        words: "a culpa cumque",
        roomsList:[
          {roomName:"B1",OccupiedBy:"Aman Seth",chargeCode:"z12334",checkInDate:"23 Sept,8:00pm",checkOutDate:"25 Spet,9:00"},
          {roomName:"B2",OccupiedBy:false},
        ],
        zipCode: "42971"
      },{
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg",
        bs: "next-generation synergize deliverables",
        catchPhrase: "Multi-layered explicit moratorium",
        city: "New Bonitamouth",
        companyName: "Tillman - Fadel",
        date: "Fri Mar 04 2016 13:46:29 GMT+0530 (IST)",
        email: "Shana.Hartmann14@yahoo.com",
        firstName: "Mandy",
        type:"guestHouse",
        id: 333333,
        lastName: "Bashirian",
        sentence: "Aliquid deleniti dolorem sed unde ipsa rem delectus saepe in.",
        street: "Velva Throughway",
        words: "a culpa",
        roomsList:[
          {roomName:"C1",OccupiedBy:"Aman Seth",chargeCode:"z12334",checkInDate:"23 Oct,8:00pm",checkOutDate:"25 Oct,9:00"},
          {roomName:"C2",OccupiedBy:false},
        ],
        zipCode: "42971"
      }
    ];
      this.setState({listOfUpcomingBookings:dataList})
    }

    filterDataForHotel(){
      let mainData = this.state.listOfUpcomingBookings,
          onlyHotelData = [];

      mainData.map(function(data,index){
        if(data["type"] === "hotel"){
          onlyHotelData.push(data);
        }
      })
      this.setState({listOfOnlyHotels:onlyHotelData});
    }

    showNewPage(state){
      if(state === "all"){
        this.setState({viewBookings:true,upComingHotelBookings:false,upComingBookings:false,feebackPage:false,addNew:false,open: !this.state.open});
      }else if(state === "upcoming"){
        this.setState({viewBookings:false,upComingHotelBookings:false,upComingBookings:true,feebackPage:false,addNew:false,open: !this.state.open});
      }else if(state === "feedback"){
        this.setState({feebackPage:true,upComingHotelBookings:false,viewBookings:false,upComingBookings:false,addNew:false,open: !this.state.open});
      }else if (state === "addNew") {
        this.setState({addNew:true,upComingHotelBookings:false,feebackPage:false,viewBookings:false,upComingBookings:false,open: !this.state.open});
      }else if (state === "upcomingHotel") {
        this.filterDataForHotel();
        this.setState({upComingHotelBookings:true,addNew:false,feebackPage:false,viewBookings:false,upComingBookings:false,open: !this.state.open});
      }
    }

    render() {
      return (
        <div className = "sideBarPagesContainer">
        <AppBar
            title="Accomodation Admin"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            onClick={this.handleToggle.bind(this)}
            style = {{"backgroundColor":"#292a4b"}}
          />
          <Badge
            badgeContent={this.state.listOfUpcomingBookings.length}
            badgeStyle={{top: 12, right: 12,backgroundColor:"red",color:"white"}}
            style = {{"padding":"12px 12px 12px 12px","float":"right","marginTop":"-60px","zIndex":"2000"}}
            className = "badge"
          >
            <IconButton tooltip="Pending Requests">
              <NotificationsIcon
                style = {{"backgroundColor":"red"}}
                />
            </IconButton>
          </Badge>
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
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"all")}>Home</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"addNew")}>Add GuestHouse</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"all")}>View bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"upcoming")}>Upcoming Bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"upcomingHotel")}>Upcoming Hotel Bookings</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}}>Reports</MenuItem>
              <MenuItem style={{color: "white",fontSize:"12px"}} onClick = {this.showNewPage.bind(this,"feedback")}>Feedback</MenuItem>
          </Drawer>
        <div className = "sideBarContentWrapper">
          {this.state.viewBookings ? <BookingsTable pageName = {"View Bookings"}/> : this.state.upComingBookings ? <UpcomingBookings listOfUpcomingBookings = {this.state.listOfUpcomingBookings} pageName = {"Upcoming Bookings"}/> : null}
          {this.state.feebackPage ? <Feedback/> : null}
          {this.state.feebackPage ? <Feedback/> : null}
          {this.state.addNew ? <AddGuestHouse/> : null}
          {this.state.upComingHotelBookings ? <UpcomingBookings listOfUpcomingBookings = {this.state.listOfOnlyHotels} pageName = {"Upcoming Hotel Bookings"}/> : null}
        </div>
        </div>
      );
    }

}
export default Sidebar;
