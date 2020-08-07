import React from 'react';

import NavigationComponent from '../components/NavigationComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import  { Container, Row, Col } from 'reactstrap';








const HomePage = () => {
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <title> Título de Home</title>
            <NavigationComponent></NavigationComponent>
            <Row>
                <Col>
                    <Container className='p-4'>
                        <Jumbotron>
                            <Row>
                                <Col>
                                    <h1 className='header' style={{textAlign:"center"}}>
                                        Esta es la página "Home"
                                    </h1>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;