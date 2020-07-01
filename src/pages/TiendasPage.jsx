import React,{useState, useEffect} from 'react';

import NavigationComponent from '../components/NavigationComponent';
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
  <li key={tienda.id}>
    {tienda.nombre} - {tienda.direccion}
  </li>
);
    return(
        <div>
            <NavigationComponent></NavigationComponent>
            <div>Lista de todas las Tiendas</div>
            <ul>
                {tiendasItems}
            </ul>
        </div>
    )
}

export default TiendasPage;