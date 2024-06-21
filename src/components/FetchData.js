import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = ({ cat }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          cat
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=2c9d24624b4a4f87bf590510eaf5b495`
            : "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2c9d24624b4a4f87bf590510eaf5b495"
        );
        setData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className='container my-4'>
      <h3 style={{textAlign: "center"}}>
        <u>TOP HEADLINES</u>
      </h3>
      <div
        className='container d-flex justify-content-center align-items-center flex-column my-3'
        style={{ minHeight: '100vh' }}
      >
        {loading ? (
          <p>Loading....</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className='container my-3 p-3'
              style={{
                width: '600px',
                boxShadow: '2px 2px 10px silver',
                borderRadius: '10px',
              }}
            >
              <h5 className='my-1'>{item.title}</h5>
              <div className='d-flex justify-content-center align-items-center'>
                <img
                  src={item.urlToImage}
                  alt="news"
                  className='img-fluid'
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <p className='my-1'>{item.content}</p>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                View More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchData;
