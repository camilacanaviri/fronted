import axios from "axios";
import { useEffect, useState } from "react";
import ModalNuevoCompra from "./ModalNuevoCompra";

const Listas = () => {
  const [listas, setListas] = useState([]);

  const llamada = async () => {
    const data = await axios.get("http://localhost:5223/api/Compras");
    setListas(data.data)


  };

  useEffect(() => {
    llamada();
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:5223/api/Compras/"+id)
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
            <i className="fas fa-user-plus"></i> Nueva Compra
          </button>
          <ModalNuevoCompra/>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered" id="tbdata" cellSpacing="0">
            <thead>
              <tr>
                <th>Numero</th>
                <th>Cliente</th>
                <th>Placa</th>
                <th>Servicio</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {listas.map((compra, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{compra.idCliente} </td>
                  <td>{compra.idPlaca} </td>
                  <td>{compra.idServicio} </td>
                  <td>{compra.cantidad} </td>
                  <td>{compra.precioTotal} </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-trash-alt" onClick={()=>handleDelete(compra.idCompra)}>Eliminar</i>
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
