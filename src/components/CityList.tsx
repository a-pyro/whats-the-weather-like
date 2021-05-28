import { Location } from '../types/location';
import { Accordion, ListGroup } from 'react-bootstrap';
interface Props {
  locationList: Location[];
}
const CityList = ({ locationList }: Props) => {
  return (
    <ListGroup>
      {locationList.map((loc) => (
        <ListGroup.Item key={loc.latitude + loc.longitude}>
          {loc.city} - {loc.stateCode} - {loc.countryCode}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;
