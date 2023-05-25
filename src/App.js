import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function App() {
    const imagen = require('./modulo1.jpeg')
    return (
        <div>
            <header className="container-fluid ">
                <h1 className="left-header">Proyecto</h1>
                <h1 className="right-header">Integrador</h1>,
            </header>
            <div className="container-fluid ">
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
                 <p className="text-center">Refaccionaria "El Profe"<br/> <br/>
                    Propietario: <br/> Miguel Rodríguez Cornelio <br/> <br/>
                 </p>
                <div className="justify-content-between d-flex align-items-center">
                    <p className="text-center">Teléfono: <br/> 961-649-5692</p> <br/>
                    <p className="text-center"> Empresa del sector terciario <br/></p>
                    <p className=" text-center">Dirección <br/> 4ta ote. sur. Carretera Villaflores #263</p>
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
                                        Proyecto integrador del los alumnos del 3° cuatrimestre, grupo B usando el conjunto de React-Bootstrap
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

                </MDBFooter>
            </div>
        </div>
    );
}



export default App;
