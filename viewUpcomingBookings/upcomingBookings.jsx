import FixedDataTable from 'fixed-data-table';
import React from 'react';
import FakeObjectDataListStore from './fakeDataListStore.js';
import Avatar from 'material-ui/Avatar';
import Dimensions from 'react-dimensions'

const {Table, Column, Cell} = FixedDataTable;


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

const TextCellAction = ({rowIndex, data, col}) => (
  <div className = "cellAvatar">
    <div className = "allocate"></div>
    <div className = "save"></div>
    <div className = "cancel"></div>
  </div>
);

class BookingsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: new FakeObjectDataListStore(1000000),
    };
  }

  render() {
    let dataList = this.props.listOfUpcomingBookings;
    console.log('listOfUpcomingBookings',this.props.listOfUpcomingBookings)
    return (
    <div className = "tableWrapper">
      <div className = "bookingsHeader">{this.props.pageName}</div>
      <Table
        rowHeight={80}
        headerHeight={50}
        rowsCount={dataList.length}
        width={this.props.containerWidth-140}
        height={500}
        className = {"hello"}
        {...this.props}>
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
          header={<Cell>Additional Request</Cell>}
          cell={<TextCell data={dataList} col="lastName" />}
        />
        <Column
          width={(this.props.containerWidth-140)/10}
          header={<Cell>Reason</Cell>}
          cell={<TextCell data={dataList} col="lastName" />}
        />
        <Column
          width={(this.props.containerWidth-140)/10}
          header={<Cell>Action</Cell>}
          cell={<TextCellAction data={dataList} col="lastName" />}
        />
      </Table>
    </div>
    );
  }
}

module.exports = Dimensions()(BookingsTable);
