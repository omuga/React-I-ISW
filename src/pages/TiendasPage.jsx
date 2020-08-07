import React,{useState, useEffect} from 'react';

import NavigationComponent from '../components/NavigationComponent';
import { Table, Col } from 'reactstrap';
import tiendasService from '../services/tiendas.services';

const TiendasPage = () => {

    const [tiendas, setTiendas] = useState([]);
    useEffect(() => {
        tiendasService.getTiendas().then(res =>{
            setTiendas(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
  const tiendasItems = tiendas.map((tienda) =>
  <tr key={tienda.id}>
      <td> {tienda.id} </td>
      <td> {tienda.nombre} </td>
      <td> {tienda.direccion}</td>
  </tr>
);
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <NavigationComponent></NavigationComponent>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th> # </th>
                                <th> Nombre </th>
                                <th> Direccion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiendasItems}
                        </tbody>
                    </Table>
                </Col>
        </div>
    )
}

export default TiendasPage;