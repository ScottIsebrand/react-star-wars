import { useState, useEffect } from 'react';

import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

import './App.css';
import Header from './components/Header';

function App() {
  const [starshipsList, setStarshipsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships('');
      // console.log(data);
      setStarshipsList(data.results);
      // starshipsList = data.results
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="starships-list">
        {starshipsList.map((starship, index) => {
          return (
            <StarshipCard
              name={starship.name}
              crew={starship.crew}
              hyperdrive_rating={starship.hyperdrive_rating}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
