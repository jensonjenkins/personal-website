import Navbar from './components/Navbar'
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [rateUSD, setRateUSD] = useState('')
  const [rateEUR, setRateEUR] = useState('')
  const [rateGBP, setRateGBP] = useState('')
  const [time, setTime] = useState('')
  const getJoke = () =>{
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) =>{
      console.log(response);
      
      setRateUSD(' USD : $' + response.data.bpi.USD.rate)
      setTime('Time : '+ response.data.time.updated)
      setRateEUR(' EUR : €' + response.data.bpi.EUR.rate)
      setRateGBP(' GBP : £' + response.data.bpi.GBP.rate)

    })
  }
  return (
    <div className="App">
      <Navbar />
      <h1 className='hellotext'>Hello</h1>

      <section id='page1'>
        {/* <h1 className='test1'>About Me</h1> */}
        <button onClick={getJoke} className="BitButton">Check BitCoin Rate</button>
        
        <p>{time}</p>
        <p>{rateUSD}</p>
        <p>{rateEUR}</p>
        <p>{rateGBP}</p>
        

      </section>
              
      <section id='page2'>
        <h1 className='test2'>What I've Achieved</h1>
        <p>This is still my website</p>
      </section>

      <section id='page3'>
        <h1 className='test3'>Education</h1>
        <p>This is still my website</p>
      </section>

      <section id='page4'>
        <h1 className='test4'>Projects</h1>
        <p>This is still my website</p>
      </section>


    </div>
  );
}

export default App;
