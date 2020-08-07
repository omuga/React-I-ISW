import axios from 'axios';

const API_URL = "https://isw-omuga-spring.herokuapp.com"

const getTiendas = () => {
  let url = `${API_URL}/tiendas`;
  return axios.get(url);
}

const addTiendas = (nombre, direccion) => {
  let url = `${API_URL}/tiendas`;
  return axios.post(url,{
    nombre: nombre,
    direccion: direccion
  });
}

const tiendasService = {
    getTiendas,
    addTiendas
};

export default tiendasService;