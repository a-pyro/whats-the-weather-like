import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Location } from '../types/location';

interface Props {
  setLocation: (location: Location) => void;
}
// interface Coordinates {
//   lat: number;
//   lon: number;
// }

const CityPicker = ({ setLocation }: Props) => {
  // const [coordinates, setCoordinates] =
  //   useState<Coordinates | undefined>(undefined);

  const handleGetCurrentLocation = () => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(async function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        const resp = await fetch(
          `${process.env.REACT_APP_API_URL}/geolocation/reverse/${position.coords.latitude}/${position.coords.longitude}`
        );
        const data = await resp.json();
        console.log(data);
        setLocation(data);
      });
    } else {
      console.log('Not Available');
    }
  };

  // const handleChange = (e) => {};

  return (
    <Row className='justify-content-center'>
      <Col xs={6}>
        <div>CityPicker</div>
        <Button
          onClick={handleGetCurrentLocation}
          variant='outline-warning rounded-pill'
        >
          Get Current Location
        </Button>
      </Col>
    </Row>
  );
};

export default CityPicker;
