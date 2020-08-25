import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';




export const ContryPicker = () => {

    const [fetchedCountry, SetfetchedCountry] = useState([{}]);

    useEffect(() => {
        async function fetchCountry() {

            const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const countriesData = await Countryresponse.json();
            SetfetchedCountry(countriesData.countryitems[0])

        }
        fetchCountry();
    }, [])

    //const countryObject = fetchedCountry;  // object
    // const countryArray = Object.keys(fetchedCountry) // Array of objects
    // const countryArrayval = Object.values(fetchedCountry) // Array of objects
    // const countrydata = countryArray[0]
    // const sepcificcountry = countrydata["1"]
    // //const countryArraystuff = fetchedCountry[countryArray]
    // const totalcountries = countryArray.length   // number of countries

    // console.log(fetchedCountry)
    // console.log(countryArray)
    // console.log(countryArrayval)
    // console.log(countryArrayval)

   //console.log(countryArrayval)

    return (
        <div>
            <FormControl>
                <NativeSelect>

                    {Object.values(fetchedCountry).map((val) => {
                        return( 
                            <option> {val.title}  </option>
                        )
                    })}

                
                </NativeSelect>
            </FormControl>
        </div>
    )
}
