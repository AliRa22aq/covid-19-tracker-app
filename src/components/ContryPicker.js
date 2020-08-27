import React, { useState, useEffect, useStyles } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
  }));


export default function ContryPicker({ handleCountryChange }) {

    const classes = useStyles2();

    const [fetchedCountry, SetfetchedCountry] = useState([{}]);

    useEffect(() => {
        async function fetchCountry() {
            const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const countriesData = await Countryresponse.json();
            SetfetchedCountry(countriesData.countryitems[0])
        }
        fetchCountry();
    }, [])

    return (
        <div>
            <FormControl >
                <NativeSelect defaultValue="Select" onChange={(e) => handleCountryChange(e.target.value)} >
                    <option value={0}>  Global  </option>
                    {Object.keys(fetchedCountry).map((val, i) => {
                        return (
                            <option key={i} value={val}>  {fetchedCountry[val].title}  </option>
                        )
                    })}

                </NativeSelect>
            </FormControl>
        </div>
    )
}
