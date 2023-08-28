import { useState, useEffect } from 'react'
//import {Link} from "react-router-dom";

import Card from './Card'



function AdList() {

  const [data, updateData] = useState({})
  const [fetchState, setFetch] = useState(false) 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (`http://localhost:3000/datas/ad.json`)
      const data = await response.json()
      updateData(data)
    }
    fetchData()
    setFetch(true)
  }, [])

  const arrayData = Array.from(data)

  return (
    <div className='ad-list-container'>
      <ul className='ad-list'>
        {arrayData.map((ad, id) => (
          <div key={ id } className="card">
            {/*<Card title= { ad.title }>*/}
            <Card>
              <span>
                Titre de la location
              </span>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default AdList;