import { React, useState, useEffect } from 'react';
import Setup from './components/Setup';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import './App.css';

function App() {

  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/32e5b05e-8ba1-4995-8a94-2b4575078f01');
        setdata(response.data);
       // console.log(data);
      }
      catch (err) {
        console.error('Error fetching data:', err);
      }
    }
    fetchData();
  }, [])


  return (
    <Container >
      <Setup petData={data} />
    </Container>
  );
}

export default App;
