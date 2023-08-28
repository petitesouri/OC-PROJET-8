import { useEffect, useState } from 'react';

import Card from './Card'
// utiliser un usestate avec destructuration pour afficher 2 états différents
function useFetch(url, options) {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/datas/ad.json`, options);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [])

    const arrayData = Array.from(data)

    return (
        <div className='ad-list-container'>
        <ul className='ad-list'>
          {arrayData.map((ad, id) => (
            <div key={ id } className="card">
                <Card title= { ad.title } />
            </div>
          ))}
        </ul>
      </div>
    )
}       

export default useFetch;