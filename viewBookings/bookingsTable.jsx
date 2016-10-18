import FixedDataTable from 'fixed-data-table';
import LocationBasedTable from './locationBasedTable.jsx';
import React from 'react';
import Avatar from 'material-ui/Avatar';
import Dimensions from 'react-dimensions'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const {Table, Column, Cell} = FixedDataTable;

const styles = {
  customWidth: {
    width: 200,
  },
};

const TextCell = ({rowIndex, data, col}) => (
  <Cell>
    <div className = "userID">{data[rowIndex]["id"]}</div>
  </Cell>
);

const TextCellLocation = ({rowIndex, data, col}) => (
  <Cell>
    <div className = "guestHouseName">H & H GuestHouse</div>
    <div className = "guestHouseAddress">D 7 Alpha Beta,M G Road Near Thane Sanata Cruz,Mumbai-282007</div>
  </Cell>
);

const TextCellCheckIn = ({rowIndex, data, col}) => (
  <Cell>
    <div className = "checkInOut">23 Sept, 8:00pm</div>
    <div className = "checkInOut">23 Sept, 8:00pm</div>
  </Cell>
);

const TextCellAvtar = ({rowIndex, data, col}) => (
  <div className = "cellAvatar">
    <Avatar
       size={60}
       style={{margin: 5}}
     />
    <div className = "avtarDetailsWrapper">
      <div className = "avtarDetails">Alexandre Tan</div>
      <div className = "avtarDetails">ZAB123456</div>
    </div>
  </div>
);

class BookingsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value :1,
      showLocationBasedPage:false
    };
  }

  handleChange(event, index, value)
  {
    this.setState({value});
  }

  showLocationId(criteria){
    if(criteria === "id"){
      this.setState({showLocationBasedPage:false});
    }else{
      this.setState({showLocationBasedPage:true});
    }
  }

  render() {
    var dataList = [{
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg",
      bs: "next-generation synergize deliverables",
      catchPhrase: "Multi-layered explicit moratorium",
      city: "New Bonitamouth",
      companyName: "Tillman - Fadel",
      date: "Fri Mar 04 2016 13:46:29 GMT+0530 (IST)",
      email: "Shana.Hartmann14@yahoo.com",
      firstName: "Mandy",
      id: 2222,
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

    return (
    <div className = "tableWrapper">
      <div className = "headerDropDownContainer">
        <div className = "bookingsHeaderUpcoming">{this.props.pageName}</div>
        <div className = "idLocationDropDownContainer">
            <div className = "idLocationContainer">
              <span className = {!this.state.showLocationBasedPage ? "idClass selectedBlue":"idClass"} onClick = {this.showLocationId.bind(this,"id")}>Id</span>
              <span>|</span>
              <span className = {!this.state.showLocationBasedPage ? "locationClass":"locationClass selectedBlue"} onClick = {this.showLocationId.bind(this,"location")}>Location</span>
            </div>
            <div className = {this.state.showLocationBasedPage ? "dropDownContainer" : "displayNone"}>
              <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  style={styles.customWidth}
                  autoWidth={false}
                  style = {{backgroundColor:"white",height:"28px"}}
                  underlineStyle = {{borderTopStyle:"none"}}
                  className = "regionDropDown"
                >
                <MenuItem value={1} primaryText="Mumbai" />
                <MenuItem value={2} primaryText="Delhi" />
                <MenuItem value={3} primaryText="Bangalore" />
                <MenuItem value={4} primaryText="Agra" />
            </DropDownMenu>
           </div>
        </div>
      </div>
      {
      this.state.showLocationBasedPage
      ?
      <LocationBasedTable data = {dataList}/>
      :
      <Table
        rowHeight={80}
        headerHeight={50}
        rowsCount={dataList.length}
        width={this.props.containerWidth-140}
        height={500}
        className = {"hello"}
        {...this.props}>
        <Column
          header={<Cell>Id</Cell>}
          cell={<TextCell data={dataList} col="firstName" />}
          fixed={true}
          width={(this.props.containerWidth-140)/10}
        />
        <Column
          header={<Cell>Profile & Charge Code</Cell>}
          cell={<TextCellAvtar data={dataList} col="companyName" />}
          width={(this.props.containerWidth-140)/5}
        />
        <Column
          width={(this.props.containerWidth-140)/3}
          header={<Cell>Guest House Location & Address</Cell>}
          cell={<TextCellLocation data={dataList} col="lastName" />}
        />
        <Column
          width={(this.props.containerWidth-140)/5}
          header={<Cell>Check in & Check out</Cell>}
          cell={<TextCellCheckIn data={dataList} col="lastName" />}
        />
        <Column
          width={(this.props.containerWidth-140)/10}
          header={<Cell>Status</Cell>}
          cellClassName = {"check"}
          cell={<TextCell data={dataList} col="lastName" />}
        />
      </Table>
    }
    </div>
    );
  }
}

module.exports = Dimensions()(BookingsTable);
