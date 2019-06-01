import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const FoodGallery = props => {
  const { food } = props;
  return (
    <main role="main">
      <div className="container page-content">

        <div className="row">
          
          {
            food.map(food => (
              <div className="col-lg-4" key={food._id}>

                <Link to={`/${food._id}`}>
                  <Card className="text-center">
                    <CardImg top width="100%" src="https://i.postimg.cc/Vk812NFQ/Nigerian-Vegetable-Soup-edit.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle className="font-weight-bold text-decoration-none">{food.name}</CardTitle>
                      <CardSubtitle>{food.rating} stars</CardSubtitle>
                      <CardText>{food.description}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            ))
          }
          {/* <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardImg top width="100%" src="https://i.postimg.cc/jSLKYfHN/mp.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card> */}

          
        </div>
      </div>
    </main>
  );
}

export default FoodGallery;