import axios from "axios";
import { useForm } from "react-hook-form";

const ModalNuevoCliente = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5223/api/Clientes", data);
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
                      <label htmlFor="txtNombre">Nombre</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("nombreCliente")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtNombre">Apellido</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("apellidoCliente")}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">Direccion</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("direccionCliente")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">telefono</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("telefonoCliente")}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="txtTelefono">Institucion</label>
                      <input
                        className="form-control form-control-sm input-validar"
                        {...register("institución")}
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

export default ModalNuevoCliente;
