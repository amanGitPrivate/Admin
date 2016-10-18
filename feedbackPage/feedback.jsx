import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class FeedbackPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      roomStatus:[],
      roomList:[
        {
          guestHouseName:"Azure Villa",
          guestHouseAddress:"Powai Mumbai",
          careTakerStart:3,
          food:4,
          ameneties:2,
          comments:"Telephone is not working"
        },
        {
          guestHouseName:"Pan Villa",
          guestHouseAddress:"Bandra Mumbai",
          careTakerStart:4,
          food:5,
          ameneties:3,
          comments:"Food is Awesome"
        },
        {
          guestHouseName:"Tax Villa",
          guestHouseAddress:"Marine Drive",
          careTakerStart:1,
          food:2,
          ameneties:3,
          comments:"Awesome Bar"
        }
      ]
    };
  }

  makeFeedBackList(){
      let completeSetWrapper = [];

      this.state.roomList.map(function(data,index){

        let detailsDiv = [];

        let occupiedDiv = <div className = "detailsDivFeedback">
                            <div className = "detailsHeader">{data["guestHouseName"]}</div>
                            <div className = "detailsValue">{data["guestHouseAddress"]}</div>
                          </div>
        let caretaker = <div className = "detailsDivFeedback">
                                <StarRatingComponent
                                  name="rate2"
                                    editing={false}
                                    starCount={5}
                                    value={data["careTakerStart"]}
                                    starColor={"#616161"}
                                    emptyStarColor={"#ececec"}
                                  />
                             </div>
       let food = <div className = "detailsDivFeedback">
                               <StarRatingComponent
                                 name="rate2"
                                   editing={false}
                                   starCount={5}
                                   value={data["food"]}
                                   starColor={"#616161"}
                                   emptyStarColor={"#ececec"}
                                 />
                          </div>
      let ameneties = <div className = "detailsDivFeedback">
                              <StarRatingComponent
                                name="rate2"
                                  editing={false}
                                  starCount={5}
                                  value={data["ameneties"]}
                                  starColor={"#616161"}
                                  emptyStarColor={"#ececec"}
                                />
                           </div>
          let checkOut = <div className = "detailsDivFeedback">
                              <div className = "commentsValue">{data["comments"]}</div>
                         </div>
          completeSetWrapper.push(<div className = "eachFeedBackWrapper">{occupiedDiv}{caretaker}{food}{ameneties}{checkOut}</div>);
      });

      return completeSetWrapper
  }

  render() {
    let roomFeedbackList = this.makeFeedBackList();
    return (
    <div className = "feedbackRoom">
        <div className = "feedbackPageContentWrapper">
          <div className = "feedbackLabel">Feedback Page</div>
          <div className = "headerStarContainer">
          <div className = "feebbackPageHeader">
              <div className = "guestHouseLocation">Guest House Location & Address</div>
              <div className = "guestHouseLocation">Caretaker</div>
              <div className = "guestHouseLocation">Food</div>
              <div className = "guestHouseLocation">Ameneties</div>
              <div className = "guestHouseLocation">Comments</div>
          </div>
          <div className = "feedBackStarContainer">
              {roomFeedbackList}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

module.exports = FeedbackPage;
