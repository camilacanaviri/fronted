import axios from "axios";
import { useForm } from "react-hook-form";

const ModalNuevoCompra = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5223/api/Compras", data);
    window.location.reload();
  };

  return (
    <div
      className="modal fade"
      id="modalData"
      role="dialog"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6>Detalle Usuario</h6>
            <button className="close" type="button" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtNombre">Cliente</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("idCLiente")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtNombre">Placa</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("idPlaca")}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">Servicio</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("idServicio")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">Cantidad</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("cantidad")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">Precio Total</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("precioTotal")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-sm" id="btnGuardar">
                Guardar
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger btn-sm" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNuevoCompra;
