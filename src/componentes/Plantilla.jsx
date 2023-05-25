import { Link, Outlet } from "react-router-dom";

const Plantilla = () => {
  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-desktop"></i>
          </div>
          <div className="sidebar-brand-text mx-3">MI TIENDA</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/administracion"
            data-toggle="collapse"
            data-target="#collapseAdministracion"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Administración</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/inventarios"
            data-toggle="collapse"
            data-target="#collapseInventario"
          >
            <i className="fas fa-fw fa-clipboard-list"></i>
            <span>Inventario</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/compras"
            data-toggle="collapse"
            data-target="#collapseVenta"
          >
            <i className="fas fa-fw fa-tags"></i>
            <span>Compras</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Douglas McGee
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300"
                  />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="perfil.html">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Perfil
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Salir
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <Outlet />
          </div>
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Plantilla;
