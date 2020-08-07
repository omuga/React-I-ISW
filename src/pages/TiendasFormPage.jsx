import React, {useState} from "react";
import  { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import tiendasService from '../services/tiendas.services';
import NavigationComponent from "../components/NavigationComponent";

const TiendasFormPage = () => {

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleChange = (event) =>{
        const keyname = event.target.name;
        if (keyname === "nombre") {
            setNombre(event.target.value);
        } else if (keyname === "direccion") {
            setDireccion(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        tiendasService.addTiendas(nombre, direccion).then(response => {
            console.log(response);
        });
    }

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <NavigationComponent></NavigationComponent>

            <Container>
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <h2> Agregar Tienda  </h2>
                    </Col>
                <Container>
                    <Form>
                        <FormGroup>
                            <Input type = "text" name = "nombre" placeholder = "Nombre" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type = "text" name = "direccion" placeholder = "Dirección" onChange = {(event) => handleChange(event)}> </Input>
                        </FormGroup>
                        <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Submit</Button>
                    </Form>
                </Container>    
            </Container>
        </div>
    );
} 

export default TiendasFormPage;