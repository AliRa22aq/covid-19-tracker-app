import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import MainGrid from './components/MainGrid'


function App() {

  const [CountryNumber, SetCountryNumber] = useState();

  const handleCountryChange = async (country) => {
    if (country === "0" ){
      SetCountryNumber(0)
    } else { 
      SetCountryNumber(country)
    
  }
  }

  return (
    <div>
      <Header handleCountryChange = {handleCountryChange} />

      <MainGrid x = {CountryNumber}/>

    </div>
  );
}

export default App;
