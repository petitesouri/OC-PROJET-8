import { useEffect, useState } from 'react';

function useFetch(url) {

  const [data, setData] = useState({});
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          //setLoading(true);
          const response = await fetch(`http://localhost:3000/datas/ad.json`);
          const datas = await response.json();
          setData(datas);
          //setLoading(false);
      }
      fetchData();
  }, [])

  const arrayData = Array.from(data)

  if ( document.URL === 'http://localhost:3000/') {
    return (
      <ul className='ad-list'>
        {arrayData.map((ad, id) => (
          <div key={ id } id={ id } className="card">
              { ad.title }
          </div>
        ))}
      </ul>
    )
  }
}       

export default useFetch;