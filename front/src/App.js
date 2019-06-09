import React from 'react';
import logo from './logo.svg';
import './App.css';
const  { getWeahter }  = require('./services/weather') 

class App extends React.PureComponent {

  constructor(){
    super();
    this.state = {temp : ""};

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }

  componentDidMount(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.success , this.error, this.options)
      // console.log(success)
    }
  }

   options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
   success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    getWeahter(crd.latitude, crd.longitude).then(res =>{
      console.log(res)
      this.setState({  temp : res })
   })
  };
  
  error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  render() {
    const { temp } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> an11d save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        {temp && `${temp} °C` } 
        </header>
      </div>
    )
  }
}

export default App;
