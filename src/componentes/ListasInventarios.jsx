import axios from "axios";
import { useEffect, useState } from "react";

const Listas = () => {
  const [listas, setListas] = useState([]);

  const llamada = async () => {
    console.log("fgdfgdfgdfg");
    /*const data = await axios.get("http://localhost:5263/api/Servicio");
    const data = await axios.post("http://localhost:5263/api/Servicio",{Atributos});
    const data = await axios.put("http://localhost:5263/api/Servicio/idjuijuijih",{Atributos});
    const data = await axios.delete("http://localhost:5263/api/Servicio/jimkjlm");*/

  };

  useEffect(() => {
    llamada();
  }, []);

  return "inventarios";
};

export default Listas;
