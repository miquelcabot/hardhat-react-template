import Card from 'react-bootstrap/Card'
import { Greeter } from '../components/Greeter';

const Home = () => {
  return (
    <Card>
      <Card.Body>
        <Greeter />
      </Card.Body>
    </Card>
  );
};

export default Home;
