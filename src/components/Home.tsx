import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Location } from '../types/location';
import CityPicker from './CityPicker';

const Home = () => {
  const [location, setLocation] = useState<Location | undefined>();

  useEffect(() => {
    // (async () => {
    //   const resp = await fetch(
    //     `${process.env.REACT_APP_API_URL}/geolocation/weather/45.1053146/7.6353317`
    //   );
    //   const data = await resp.json();
    //   console.log(data);
    // })();
    // (async () => {
    //   const resp = await fetch(
    //     `${process.env.REACT_APP_API_URL}/geolocation/reverse/45.1053146/7.6353317`
    //   );
    //   const data = await resp.json();
    //   console.log(data);
    // })();
    // (async () => {
    //   const resp = await fetch(
    //     `${process.env.REACT_APP_API_URL}/geolocation/milan`
    //   );
    //   const data = await resp.json();
    //   console.log(data);
    // })();
    // if ('geolocation' in navigator) {
    //   console.log('Available');
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     console.log('Latitude is :', position.coords.latitude);
    //     console.log('Longitude is :', position.coords.longitude);
    //   });
    // } else {
    //   console.log('Not Available');
    // }
  }, []);

  return (
    <Container fluid>
      <CityPicker setLocation={setLocation} />
    </Container>
  );
};

export default Home;
