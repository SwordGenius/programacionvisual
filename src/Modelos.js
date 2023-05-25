import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Modelos() {
    const imagen = require('./ventas.jpeg')
    const imagen2 = require('./admin.jpeg')
    const imagen3 = require('./inventario.jpeg')
    const imagen4 = require('./agregar.jpeg')
    const imagen5 = require('./login.jpeg')
    return (
        <div>
            <header className="container-fluid ">
                <h1 className="left-header">Proyecto</h1>
                <h1 className="right-header">Integrador</h1>,
            </header>
            <div className="container-fluid">
                <Navbar expand="md" className="justify-content-between bg-nav">
                    <Container>
                        <Nav.Item>
                            <Nav.Link href="/Antecedentes" className="text-center color-font-nav">Antecedentes <br/>de la empresa</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Problematica" className="text-center color-font-nav">Problemática</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Modelos" className="text-center color-font-navd">Módulos<br/>propuestos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Soluciones" className="text-center color-font-nav">Solución<br/>propuesta</Nav.Link>
                        </Nav.Item>
                    </Container>
                </Navbar>
            </div>

            <div  className="container-fluid div-container rounded-main-box " bgColor="grey">

                <br/>
                <br/>
                <p className="text-center">Modulos propuestos"
                </p>
                <div className="justify-content-between d-flex">
                    <p><br/>Inicio de sesion<br/><br/></p>
                    <p><br/>Modulo principal (Pagina Principal)<br/><br/></p>
                </div>
                <div className="justify-content-between d-flex align-items-center">
                    <div><p className="text-center">Apartado de ventas<br/><br/>Agregar a la caja<br/><br/>Eliminar de la caja<br/><br/>Cobrar productos</p> <br/></div>
                    <div><p className="text-center"> Apartado de administrador <br/><br/><br/>Administracion de usuarios<br/><br/><br/>Apartado de facturas<br/><br/></p></div>
                    <div><p className=" text-center">Apartado de inventario<br/><br/>Registrar productos<br/><br/>Comprobar producto<br/><br/>Modificar inventario</p></div>
                </div>
                <div className="justify-content-between d-flex align-items-center">
                    <img width="30%" src={imagen}/>
                    <img width="30%" src={imagen2}/>
                    <img width="30%" src={imagen3}/>
                </div>
                <br/>
                <div className="justify-content-between d-flex align-items-center">
                    <img width="30%" src={imagen4}/>
                    <img width="30%" src={imagen5}/>
                </div>
                <br/>
                <br/>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f8f9fa" fillOpacity="1" d="M0,192L40,192C80,192,160,192,240,186.7C320,181,400,171,480,181.3C560,192,640,224,720,218.7C800,213,880,171,960,160C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg></div>
            <div>
                <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="google" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="instagram" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="linkedin" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="github" />
                            </a>
                        </div>
                    </section>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4 text-center'>
                                        <MDBIcon icon="gem" className="me-3" />
                                        Universad Politécnica de Chiapas
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Angular
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            React
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Vue
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Laravel
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Help
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Integrantes</h6>
                                    <p>
                                        {/*<MDBIcon icon="home" className="me-2" />*/}
                                        Manuel Arturo Guillen Hernandez
                                    </p>
                                    <p>
                                        {/*<MDBIcon icon="envelope" className="me-3" />*/}
                                        Cynthia Naomi Vazquéz Díaz
                                    </p>
                                    <p>

                                        Miguel Rodríguez Ruíz
                                    </p>
                                    {/*<p>*/}
                                    {/*    <MDBIcon icon="print" className="me-3" />*/}
                                    {/*</p>*/}
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © 2021 Copyright:
                        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                            MDBootstrap.com
                        </a>
                    </div>
                </MDBFooter>
            </div>
        </div>
    );
}



export default Modelos;
