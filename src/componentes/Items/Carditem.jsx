import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





const Carditem = ({ item }) => {
        return (
            <Card style={{ width: '18rem' }} className='mt-2 mt-4'>
                <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>
                            {item.title}
                        </Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Link to={`/detalle/${item.id}`}>
                            <Button variant="primary">Ver Detalles</Button>
                        </Link>
                    </Card.Body>
            </Card>
        );
    }

export default Carditem