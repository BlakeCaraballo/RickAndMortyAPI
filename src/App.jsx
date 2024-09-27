import styles from './App.module.css'
import DataSection from './components/DataSection/DataSection';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { fetchCharacters } from './api/rickAndMortyAPI';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      console.log("Fetched characters:", data); // Check if characters are fetched
      setCharacters(data);
    };

    loadCharacters();
  }, []);

  return(
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <DataSection characters={characters}/>
      </div>
    </>
  );

}

export default App

