import React from 'react';

class RoomStatus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      roomStatus:[]
    };
  }

showRoomDetails(data,event){
      let stateVar = [],
          statusDiv,
          outerRingElement;

      outerRingElement = event.target.parentNode.parentNode.childNodes;
      for(let i = 0;i<outerRingElement.length;i++){
          outerRingElement[i].classList.remove('outerRingBorderClass');
      }
      event.target.parentElement.classList.add('outerRingBorderClass');
      if(data["OccupiedBy"]){
        let detailsDiv = [];

        let occupiedDiv = <div className = "detailsDiv">
                            <div className = "detailsHeader">OccupiedBy</div>
                            <div className = "detailsValue">{data["OccupiedBy"]}</div>
                          </div>
        let chargeCodeDiv = <div className = "detailsDiv">
                            <div className = "detailsHeader">Charge Code</div>
                            <div className = "detailsValue">{data["chargeCode"]}</div>
                          </div>
        let checkIn = <div className = "detailsDiv">
                            <div className = "detailsHeader">Check In</div>
                            <div className = "detailsValue">{data["checkInDate"]}</div>
                          </div>
        let checkOut = <div className = "detailsDiv">
                            <div className = "detailsHeader">Check Out</div>
                            <div className = "detailsValue">{data["checkOutDate"]}</div>
                          </div>
        detailsDiv.push(<div className = "userDetailsWrapper">{occupiedDiv}{chargeCodeDiv}{checkIn}{checkOut}</div>)
        stateVar.push(<div className = "unoccupied">{detailsDiv}</div>);
      }else{
        stateVar.push(<div className = "unoccupied">Unoccupied</div>);
      }
      this.setState({roomStatus:stateVar});
}

roomListMaker(){
  let roomSet=[],
      completeSetWrapper=[],
      self = this;
  this.props.data.map(function(data){

      roomSet.push(<div className = "outerRing"><div onClick = {self.showRoomDetails.bind(self,data)} className = {data["OccupiedBy"] ? "innerRingOccupied" : "innerRingEmpty"}></div></div>)
  });
  completeSetWrapper.push(<div className = "ringWrapper">{roomSet}</div>)
  completeSetWrapper.push(<div className = "roomStatus">{this.state.roomStatus}</div>)
  return completeSetWrapper;
}
  render() {

    return (
    <div className = "roomWrapper">
      {this.roomListMaker()}
    </div>
    );
  }
}

module.exports = RoomStatus;
