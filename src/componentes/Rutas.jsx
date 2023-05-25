import { Routes, Route } from "react-router-dom";
import Administracion from "../paginas/Administracion";

import Inventarios from "../paginas/Inventarios";

import Compra from "../paginas/Compra";
import Principal from "../paginas/Principal";
import Plantilla from "./Plantilla";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Plantilla />}>
          <Route path="/" element={<Principal />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/inventarios" element={<Inventarios />} />
          <Route path="/compras" element={<Compra />} />
        </Route>
      </Routes>
    </>
  );
};

export default Rutas;
