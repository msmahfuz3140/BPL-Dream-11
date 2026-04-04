
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';
import { ToastContainer } from 'react-toastify';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';

const fetchPlayers = async () => {
  const res = await fetch('/playersData.json');
  return res.json();
}

function App() {
  const playersPromiss = fetchPlayers()
  const [coin, setCoin] = useState(1000000)

  return (
    <div className='w-[90%] mx-auto space-y-8'>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>

      }>
        <Players playersPromiss={playersPromiss} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      <NewsLetter></NewsLetter>
      <Footer></Footer>


      {/* tost */}
       <ToastContainer />

    </div>

  )
}

export default App
