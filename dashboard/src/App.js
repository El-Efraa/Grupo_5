import './App.css';
import FotoPerfil from './assets/images/jordan-walke.png';
import logo from './assets/images/logo.jpeg'


import React from "react";
// import Sidebar from "./components/Sidebar/Sidebar";
import Table from './components/Table/Table';
import Index from './views/Index';
import TableUsers from './components/TableUsers/TableUsers';
import CategoryView from './views/CategoryView'

import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div id="wrapper">

      {/* <Sidebar /> */}


      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

              {/* <!-- Nav Item - Alerts --> */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                  <i className="fas fa-bell fa-fw"></i>
                  {/* <!-- Counter - Alerts --> */}
                  <span className="badge badge-danger badge-counter">3+</span>
                </a>
              </li>

              {/* <!-- Nav Item - Messages --> */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                  <i className="fas fa-envelope fa-fw"></i>
                  {/* <!-- Counter - Messages --> */}
                  <span className="badge badge-danger badge-counter">7</span>
                </a>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              {/* <!-- Nav Item - User Information --> */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
                  <img className="img-profile rounded-circle" src={FotoPerfil} alt="Jordan Walke - Creador de React" width="60" />
                </a>
              </li>

            </ul>

          </nav>
          {/* <!-- End of Topbar --> */}

          {/* <!-- Content Row Top --> */}

          <div className="container-fluid">

            <div className="d-sm-flex align-items-center  mb-4">
              <Link to="/">
                <img src={logo} alt="Logo" style={{ width: '8rem' }} />
              </Link>
              <h1 className="h3 mb-0 text-gray-800">App Dashboard - Delicias Jujeñas</h1>
            </div>

            <Routes>
              <Route path='/' Component={Index} />
              <Route path='/table-products' Component={Table} />
              <Route path='/table-users' Component={TableUsers} />
              <Route path='/category' Component={CategoryView} />

            </Routes>

          </div>





          {/* <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/content-row' Component={ContentRowView} />
            <Route path='/row-movies' element={<RowMoviesView />} />
            <Route path='/table' Component={TableView} />
            <Route path='/movie/:title' element={<MovieView />} />
            <Route path='*' element={<h1>404 - Not Found</h1>} />

          </Routes> */}

          {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}



        {/* <!-- Footer --> */}
        {/* <Footer /> */}
        {/* <!-- End of Footer --> */}

      </div>
      {/* <!-- End of Content Wrapper --> */}

    </div>
  );
}

export default App;
