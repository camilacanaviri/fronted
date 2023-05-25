import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
const Reporte = (props) => {
  const { nombre, direccion, descripcion } = props;

  const [rand, setRand] = useState(null)

  const aleatorio = () => {
    const value =  Math.floor(Math.random() * 100000);
    setRand(value)
  };

  useEffect(()=>{
    aleatorio()
  },[])

  return (
    <>
    <br />
      <div className="contenedor">
        <table style={{ width: "100%" }}>
          <tr>
            <td>
             
            </td>
            <td style={{ textAlign: "right" }}>
              <table style={{ marginRight: "0", marginLeft: "auto" }}>
                <tr>
                  <td>
                    <p className="title2">NÚMERO COMPRA</p>
                  </td>
                </tr>
                <tr>
                  <td>{rand}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <p className="title uppercase">{"velmotormecanica"}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text">Direccion: Av. Anticucho # 115</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text">
                      Correo: velmotormecanica@mecanica.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
            <td style={{ textAlign: "right" }}>
              <table style={{ marginRight: "0", marginLeft: "auto" }}>
                <tr>
                  <td>
                    <p className="title">CLIENTE</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text">{nombre}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <table className="tbproductos" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="tbth">Producto</th>
              <th className="tbth" style={{ width: "130px" }}>
                Cantidad
              </th>
              <th className="tbth" style={{ width: "130px" }}>
                Precio
              </th>
              <th className="tbth" style={{ width: "130px" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" rowSpan="3">
                {descripcion}
              </td>
              <td className="td-item">
                <p className="item-2">Sub Total</p>
              </td>
              <td className="item-3">
                <p>bs.</p>
              </td>
            </tr>
            <tr>
              <td className="td-item">
                <p className="item-2">IGV</p>
              </td>
              <td className="item-3">
                <p>bs.</p>
              </td>
            </tr>
            <tr>
              <td className="item-3">
                <p>Total</p>
              </td>
              <td className="item-3">
                <p>bs.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reporte;
