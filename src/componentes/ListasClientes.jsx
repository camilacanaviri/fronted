import axios from "axios";
import { useEffect, useState } from "react";
import ModalNuevoCliente from "./ModalNuevoCliente";

const Listas = () => {
  const [clientes, setClientes] = useState([]);

  const llamada = async () => {
    const data = await axios.get("http://localhost:5223/api/Clientes");
    setClientes(data.data);
  };

  useEffect(() => {
    llamada();
  }, []);


const handleDelete = (id) => {
  axios.delete("http://localhost:5223/api/Clientes/"+id)
  window.location.reload()
}

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-sm-3">
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modalData"
          >
            <i className="fas fa-user-plus"></i> Nuevo Usuario
          </button>
          <ModalNuevoCliente/>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered" id="tbdata" cellSpacing="0">
            <thead>
              <tr>
                <th>Numero</th>
                <th>nombreCliente</th>
                <th>apellidoCliente</th>
                <th>direccionCliente</th>
                <th>telefonoCliente</th>
                <th>institución</th>
                <th>vehiculos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{cliente.nombreCliente} </td>
                  <td>{cliente.apellidoCliente} </td>
                  <td>{cliente.direccionCliente} </td>
                  <td>{cliente.telefonoCliente} </td>
                  <td>{cliente.institución} </td>
                  <td>{cliente.vehiculos} </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-trash-alt" onClick={()=>handleDelete(cliente.idCliente)}>Eliminar</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listas;
