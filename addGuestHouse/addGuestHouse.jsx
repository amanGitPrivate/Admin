import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class FeedbackPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    // Profile picture upload code
    var icon = document.querySelector('.pictureDiv');
    document.querySelector('#avatarUpload').addEventListener("change",function(e){
       icon.style.background = 'url('+URL.createObjectURL(e.target.files[0])+')';
    });

    // code for multiple upload

    var filesInput = document.getElementById("files");
        filesInput.addEventListener("change", function(event){

            let files = event.target.files; //FileList object
            let output = document.getElementById("multiPictureDiv");

            for(let i = 0; i< files.length; i++)
            {
                var file = files[i];
                //Only pics
                if(!file.type.match('image'))
                continue;
                var picReader = new FileReader();
                picReader.addEventListener("load",function(event){

                    let picFile = event.target;
                    let div = document.createElement("div");
                    div.className = "multipleUploadDiv";
                    div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/>";
                    output.insertBefore(div,null);
                });
                 //Read the image
                picReader.readAsDataURL(file);
            }
        });
  }



  makePrimarySection(){

    return(
    <div className = "addGuestPrimaryDetailsSection">
      <div className = "contentWrapperForAddRoom">
        <div className = "primaryDetailsSection">
          <div className = "addDisplayPicture">
              <div className = "pictureDiv">
                <input type="file" id="avatarUpload"/>
              </div>
              <div className = "addPictureLabel">Add display picture</div>
          </div>
          <div className = "prmiaryFieldWrapper">
            <div className = "primaryDetailsLabel">Primary Details</div>
            <div className = "guestHouseNameBooking">
              <TextField
                floatingLabelText="Add guesthouse name"
                style = {{"width":"100%"}}
              />
            </div>
            <div className = "contactNumberGuestHouseLocation">
              <div className = "phoneNumber">
                <TextField
                  floatingLabelText="Add Contact number"
                  style = {{"width":"100%"}}
                />
              </div>
              <div className = "addGuestHouseLocation">
                <TextField
                  floatingLabelText="Add location"
                  style = {{"width":"100%"}}
                />
              </div>
            </div>
            <div className = "addAddress">
              <TextField
                floatingLabelText="Add Address"
                style = {{"width":"100%"}}
              />
           </div>
            <div className = "addMorePicturesButton" id = "result">
              <div className = "addmoreWrapper">
                <div className = "addMoreLabel">ADD MORE PICTURES</div>
                <input id="files" type="file" multiple/>
              </div>
              <div id = "multiPictureDiv"></div>
            </div>
         </div>
       </div>
     </div>
   </div>
  )
}

  makeSecondorySection(){
    return (
    <div className = "secondorySectionWrapper">
      <div className = "amenitiesWrapper">
        <div className = "amenitiesLabel">Select Ameneties</div>
        <div className = "checkBoxElements">
        <div className = "amenities">
            <Checkbox
              label="Air Conditioner"
            />
        </div>
        <div className = "amenities">
           <Checkbox
             label="Wi-Fi"
           />
        </div>
        <div className = "amenities">
          <Checkbox
            label="Television"
          />
        </div>
        <div className = "amenities">
          <Checkbox
            label="Gymnasium"
          />
        </div>
        <div className = "amenities">
            <Checkbox
              label="Coffee Maker"
            />
        </div>
        <div className = "amenities">
            <Checkbox
              label="Induction stove"
            />
        </div>
        <div className = "amenities">
            <Checkbox
              label="Other"
            />
        </div>
      </div>
    </div>
    <div className = "caretakerDetailsWrapper">
      <div className = "careTakerLabel">Caretaker Details</div>
      <div className = "careTakerWrapper">
        <div className = "careTakerDetails">
          <TextField
            floatingLabelText="Caretaker name"
            style = {{"width":"90%"}}
          />
       </div>
       <div className = "careTakerDetails">
         <TextField
           floatingLabelText="Contact number"
           style = {{"width":"90%"}}
         />
      </div>
    </div>
  </div>
</div>
    )
  }

  render() {
    let primarySection = this.makePrimarySection();
    let secondorySection = this.makeSecondorySection();
    return (
    <div className = "addGuestHouseMainWrapper">
      <div className = "addGuestHousePage">
        <div className = "addGuestHouseLabel">Add GuestHouse</div>
        <div className = "primarySecondaryWrapper">
         {primarySection}
         {secondorySection}
        </div>
      </div>
    </div>
    );
  }
}

module.exports = FeedbackPage;
