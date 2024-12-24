import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router'





function Item({ item }) {
    return (
        <Col lg={4}  md={5} className='small-cart' >
         <Card style={{ width: '18rem' }} className="cards-1">
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            ${item.price}
          </Card.Text>
          <Button variant="primary" as={ Link } to={`/item/${item.id}`} >Ver detalle</Button>
        </Card.Body>
      </Card>
      </Col>
    )
}

export default Item;