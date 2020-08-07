import React, { useEffect } from 'react';

import NavigationComponent from '../components/NavigationComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import  { Container, Row, Col, Form, FormGroup, Input  } from 'reactstrap';

const WelcomePage = () => {

    const [nombre,setNombre] = React.useState(""); //Crea la variable "nombre", y lo inicializa con un string vacío.

    useEffect(() => { // Hook de Efecto, Añade funcionalidades en el ciclo de vida de la página

        console.log("Render") // Función que se ejecuta cada vez que se renderiza la página
        return () => {
            console.log("Fin") // Función que se ejecuta al momento de desmontar el componente
        }
    },[nombre]) // Se agrega este segundo parámetro para que las funciones no se ejecuten cada vez que la página de renderiza
                // Con un array vacío, solo se ejecuta una vez , y si se agrega dentro una variable
                //La función se ejecuta cada vez que el valor de esa variable cambie


    const handleChange = (e) =>{
        e.preventDefault();
        setNombre(e.target.value);
        console.log(nombre);
    }

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <title> Título de 'WelcomePage'</title>
            <NavigationComponent/>
            <Row>
                <Col>
                    <Container className='p-5'>
                        <Jumbotron>
                            <Row>
                                <Col>
                                    <h1 className='header' style={{textAlign:"center"}}>
                                        Esta es la página "Welcome"
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className='header' style={{textAlign:"center"}}>
                                        Bienvenido/a {nombre}
                                    </h1>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Container>
                </Col>
            </Row>
            <Container>
                <Form>
                    <FormGroup> 
                    <Input type = "text" name = "nombre" placeholder = "Nombre" onChange = {(event) => handleChange(event)}> </Input>      
                    </FormGroup> 
                    <Row>
                        <Col>
                            <div className="text-center">
                                <button className="btn btn-primary" id="singlebutton" > Submit!</button>
                            </div>
                        </Col>
                    </Row>
                </Form> 
            </Container>

            </div>
    )
}

export default WelcomePage;