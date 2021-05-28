import { useState } from 'react';
import { Button, Col, Row, Form, FormControl } from 'react-bootstrap';
import { Location } from '../types/location';
import CityList from './CityList';

interface Props {
  setLocation: (location: Location) => void;
}
// interface Coordinates {
//   lat: number;
//   lon: number;
// }

const CityPicker = ({ setLocation }: Props) => {
  const [city, setCity] = useState<string>('');
  const [locationList, setLocationList] = useState<Location[]>([]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleCitySubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(city);
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/geolocation/${city}`
    );
    const data = await resp.json();
    console.log(data);
    setLocationList(data);
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col xs={6}>
          <div>CityPicker</div>
          <div className='d-flex justify-content-center'>
            <div>
              <Button
                onClick={handleGetCurrentLocation}
                variant='outline-warning rounded-pill'
              >
                Get Current Location
              </Button>
            </div>
            <div>
              {' '}
              <Form onSubmit={handleCitySubmit} className='d-flex'>
                <FormControl
                  onChange={handleChange}
                  value={city}
                  type='search'
                  placeholder='City Name'
                  className='mx-3 rounded-pill'
                  aria-label='Search'
                />
                <Button
                  type='submit'
                  className='rounded-pill'
                  variant='outline-success'
                >
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      {locationList.length > 0 && (
        <Row className='justify-content-center'>
          <Col xs={6}>
            <CityList locationList={locationList} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default CityPicker;
