
import './App.css';
import { useEffect, createContext, useState } from 'react';

import './data.json'
import Review from './reviews/review';
export const Usercontext = createContext();
function App() {

  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    const axios = require('axios');

// Make a request for a user with a given ID
axios
  .get('./data.json')
  .then(function (response) {
    // handle success
    setreviews(response.data);
  
  });
  },[])
  return (
    <Usercontext.Provider value={reviews}>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
       
            <Review />
       
        </section>
      </main>
    </Usercontext.Provider>
  );
 
}

export default App;
