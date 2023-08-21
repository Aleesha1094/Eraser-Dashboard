import { Card } from 'react-bootstrap';
import { links } from './cardList';
import './card.css';


const Cards = () => {
  return (
    <div className='card-container'>
      {links.map((link, index) => (
        <Card key={index}  className='card'>
          <Card.Body>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Card.Img variant="left" src={link.pic} style={{width: '40px', height: '38px', paddingRight: '5px'}}/>
              <div style={{ flex: '1' }}>
                <Card.Title className='cardtitle'>
                  {link.title}{' '}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted cardsub">
                  {link.subtitle}
                </Card.Subtitle>
              </div>
              <span style={{fontSize: '1.4rem'}}>
                    {link.icon}
              </span>
            </div>
            <Card.Text style={{ color: 'gray', margin: '10px' }}>{link.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
