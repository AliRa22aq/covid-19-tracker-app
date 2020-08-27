import React, {useState, useEffect} from 'react'

function CountryChartDaily({x}) {

    const [fetchedCountry, SetfetchedCountry] = useState([{}]);
    const [URL, SetURL] = useState("ALL");
    const [fetchedTimelineData, SetfetchedTimelineData] = useState([{}]);

    useEffect(() => {
        async function fetchCountry() {
            const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const countriesData = await Countryresponse.json();
            
            SetfetchedCountry(countriesData.countryitems[0])
            
        }
        fetchCountry();
    }, [])


 var countryCodeee = fetchedCountry && fetchedCountry[x] && fetchedCountry[x].code

console.log(countryCodeee)
 
    const urlurl = 'https://api.thevirustracker.com/free-api?countryTimeline='
    const newurl = `${api.thevirustracker.com/free-api?countryTimeline=}''${countryCodeee}`
    //SetURL(newurl)


       // console.log(newurl)
    
    useEffect(() => {
        async function fetchTimeLineData() {
            const timelineresponse = await fetch("https://api.thevirustracker.com/free-api?countryTimeline=}"+"countryCodeee");
            const timelineresponse1 = await timelineresponse.json();
            //SetfetchedCountry(countriesData.countryitems[0])
           // SetfetchedTimelineData(countriesData)
          
            //SetfetchedTimelineData(timelineresponse1.timelineitems[0])
            
             SetfetchedTimelineData(timelineresponse1.timelineitems); } fetchTimeLineData()
            }, [])

 console.log(fetchedTimelineData)

return (
        <div>

            Daily Data Chart {x}
            
        </div>
    )

}
export default CountryChartDaily;
