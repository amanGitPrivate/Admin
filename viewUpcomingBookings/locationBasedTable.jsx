import React from 'react';
import RoomStatus from './RoomStatus.jsx';

class LocationBasedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: this.props.data,
      value :1,
      roomStatus:[],
      showLocationBasedPage:false
    };
  }

  makeTableFunction(){

    let oneAddressContainer=[],
        self = this;

    this.props.data.map(function(data,index){
      let addressContainer=[];
      addressContainer.push(
      <div className = "locationTableRowWrapper">
        <div className = "addressSet">
          <div className = "guestHouseName">{data["companyName"]}</div>
          <div className = "guestHouseAddress">{data["sentence"]}</div>
        </div>
        {self.makeRoomSet(data["roomsList"])}
      </div>
    );
      oneAddressContainer.push(addressContainer);
    });
    return oneAddressContainer;
  }


  makeRoomSet(data){
    if(data)
    return (<RoomStatus data = {data}/>);
  }

  render() {
    let locationStructure = this.makeTableFunction();
    return (
    <div className = "locationTableWrapper">
      <div className = "loactionTableHeaderWrapper">
          <div className = "guestHouseLabel">Guest House Location & Address</div>
          <div className = "roomsLabel">Rooms</div>
      </div>
      <div className = "locationContainer">
        <div className = "locationWrapper">
              {locationStructure}
        </div>
      </div>
    </div>
    );
  }
}

module.exports = LocationBasedTable;
