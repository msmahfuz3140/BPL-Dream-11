
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';

const fetchPlayers = async () => {
  const res = await fetch('/playersData.json');
  return res.json();
}

function App() {
  const playersPromiss = fetchPlayers()

  return (
    <div className='w-[90%] mx-auto space-y-8'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>

      }>
        <Players playersPromiss={playersPromiss}></Players>
      </Suspense>

    </div>

  )
}

export default App
