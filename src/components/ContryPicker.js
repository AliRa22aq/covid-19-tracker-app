import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';


export default function ContryPicker({handleCountryChange}) {

    const [fetchedCountry, SetfetchedCountry] = useState([{}]);


    useEffect(() => {
        async function fetchCountry() {
            const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const countriesData = await Countryresponse.json();
            SetfetchedCountry(countriesData.countryitems[0]) 

        }
        fetchCountry();
    }, [])

    //console.log(fetchedCountry)

    return (
        <div>
            <FormControl>
                <NativeSelect defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)} >

                    {Object.keys(fetchedCountry).map((val,i) => {
                        return (
                            <option key={i} value = {val}>  {fetchedCountry[val].title}  </option>
                        )
                    })}

                </NativeSelect>
            </FormControl>
        </div>
    )
}
