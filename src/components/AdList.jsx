import { useState, useEffect } from "react";
//import useFetch from "react-fetch-hook";

//import Card from './Card'

function AdList() {
  useEffect(() => {
    async function fetchAd () {
      const response = await fetch("https://github.com/petitesouri/OC-PROJET-8/blob/main/public/datas/ad.json")
      const datas = await response.json()

      //const testUseState = useState(0);

      return (
        //console.log(testUseState),
        console.log(datas)
        /*<div>
          <h1>Test </h1>
          {adList.map((profile, id) => (
            <Card
              key={profile.id}
              title={profile.title}
              name={profile.name}
            />
          ))}
        </div>*/
      )
    }
    fetchAd() 
  }, [])
}

export default AdList;