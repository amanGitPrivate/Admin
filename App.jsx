import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends React.Component {


   render() {
      return (
         <div className = "mainWrapper">
            <MuiThemeProvider>
               <Login/>
             </MuiThemeProvider>
         </div>
      );
   }


}



export default App;
