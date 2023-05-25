import axios from "axios";
import { useEffect, useState } from "react";
import Reporte from "../componentes/Reporte";



const Inventarios = () => {
  const [clientes, setClientes] = useState([]);
  const [servicios, setServicios] = useState([]);

  const [cliente, setCliente] = useState({});
  const [servicio, setServicio] = useState({});

  const [report, setReport] = useState(false)

  const CargarClientes = async () => {
    const data = await axios.get("http://localhost:5223/api/Clientes");
    setClientes(data.data);
  };

  const CargarServicios = async () => {
    const data = await axios.get("http://localhost:5223/api/Servicios");
    setServicios(data.data);
  };

  useEffect(() => {
    CargarClientes();
    CargarServicios();
  }, []);

  const handleChangeCliente = async ({ target }) => {
    const data = await axios.get(
      "http://localhost:5223/api/Clientes/" + target.value
    );
    setCliente(data.data)
  };
  const handleChangeServicio = async ({ target }) => {
    const data = await axios.get(
      "http://localhost:5223/api/Servicios/" + target.value
    );
    setServicio(data.data)
  };

  const handleClick = () => {
        setReport(!report)      
  };
  return (
    <>
      <h2>Listas</h2>
      <div className="row ">
        <select name="usuarios" className="col-6 form-control" onChange={handleChangeCliente}>
          <option value="">Seleccione un cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.idCliente} value={cliente.idCliente}>
              {cliente.nombreCliente} {cliente.apellidoCliente}
            </option>
          ))}
        </select>
        <select name="servicios" className="col-6 form-control" onChange={handleChangeServicio}>
          <option value="">Seleccione un servicio</option>

          {servicios.map((servicio) => (
            <option key={servicio.idServicio} value={servicio.idServicio}>
              {servicio.descripcion}{" "}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
        <button className="btn btn-warning" onClick={handleClick}>Generar PDF</button>
       
      </div>
      {report?<Reporte nombre={cliente.nombreCliente+" "+cliente.apellidoCliente} direccion={cliente.direccionCliente}  descripcion={servicio.descripcion} />:null}
    </>
  );
};

export default Inventarios;
