import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import MainGrid from './components/MainGrid'


function App() {

  const [D, SetD] = useState();

  const handleCountryChange = async (country) => {
    if (country == 0 ){
      SetD(0)
    } else { 
    SetD(country)
  }
}

  return (
    <div>
      <Header handleCountryChange = {handleCountryChange} />

      <MainGrid x = {D}/>

    </div>
  );
}

export default App;
