import { useState } from 'react'
import {Link} from "react-router-dom";

import useFetch from './useFetch'


function AdList() {
  const [dataId, setDataId] = useState()
  
  return (
    <div className='ad-list-container'>
      <Link to="/Location" onClick={(e) => {
          const dataId = e.target.id
          setDataId(dataId)
          console.log(dataId)
        }}>
        { useFetch () }
      </Link>
    </div>
  )
}

export default AdList;