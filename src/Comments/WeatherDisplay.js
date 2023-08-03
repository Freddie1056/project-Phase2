import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className='container mx-auto p-4'>
      {data.main && (
        <div className='top bg-blue-200 p-4 rounded-lg text-center'>
          <p className='text-xl font-bold mb-2'>{data.name}</p>
          <h1 className='text-4xl font-semibold mb-2'>{data.main.temp}°F</h1>
          <p className='text-lg'>{data.weather[0].main}</p>
        </div>
      )}
      {data.main && (
        <div className='bottom mt-4 bg-blue-100 p-4 rounded-lg'>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed}MPH</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;

