import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [petType, setPetType] = useState('');
  const [numberOf, setNumberOf] = useState('');
  const [pet, setPet] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3400/')
    .then(res => {
      console.log(res.data);
      setPet(res.data);
    })
  }, [])

  const submit = (e) => {
    e.preventDefault();
    console.log('STATE PETTYPE: ', petType);
    console.log('STATE NUMBER: ', numberOf);
    let data = {
      petType,
      numberOf
    };
    console.log('Data: ', data);
    console.log('Submitted');
    axios.post('http://localhost:3400/submit', data)
    .then(res => console.log('Response ', res));
  }
  console.log('PET: ', pet)
  // let petList;
  // if (pet.lenght && pet.pet.length > 0) {
  //   petList = pet.pet.map(el => <li> {el.petType}, {el.numberOf}) </li>)
  // }
  return (
    <div className='App'>
      <input type = 'text' placeholder='Type of Pet' value={petType} onChange={e => setPetType(e.target.value)} />
      <input type = 'number' placeholder='How many you have' value={numberOf} onChange={e => setNumberOf(e.target.value)} />
      <button onClick={e => submit(e)}>Submit</button>
      {/* {petList} */}
    </div>
  );
}

export default App;
