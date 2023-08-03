import React ,{useState} from 'react'
import axios from 'axios';
import SearchBar from './Comments/SearchBar';
import WeatherDisplay from './Comments/WeatherDisplay';
import 'tailwindcss/tailwind.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './Comments/About';
import Home from './Comments/Home';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const apiKey = '3a18b15a356af68ac3dcac145a70418e';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const city = encodeURIComponent(location);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      axios.get(apiUrl).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation('');
    }
  };

  return (
    <div className='app'>
     <nav className='bg-blue-200 p-3 mb-15'>
      <ul className='flex space-x-5'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/search">Search Weather</Link>
        </li>
      </ul>
     </nav>
     <div>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/search" element={ <SearchBar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />}/>

      </Routes>
     </div>
      
      <WeatherDisplay data={data} />
    </div>
  );
}

export default App;

