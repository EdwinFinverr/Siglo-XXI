import React, {useState} from 'react'; //el usestate son los estados que estamos guardadndo(como una variable para ir actualizando) 
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import FigureCaption from 'react-bootstrap/FigureCaption'

function Main(){
    
    return (
    <Container fluid >
      <Alert variant="success">
        <Alert.Heading>Welcome to Siglo XXl</Alert.Heading>   
      </Alert>
      <Row>
            <Col  sm={3} md={3} lg={3} xl={3} >
            <Card style={{ width: '18rem', marginLeft:15 }}>
            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
                <Card.Title>Hospital de la Mujer</Card.Title>
                <Card.Text>
                El Hospital de la Mujer está encargado de brindar atención médico - quirúrgica en las áreas de Ginecología, Obstetricia y Neonatología. Es hospital sede de la especialidad de Ginecología y Obstetricia y de los programas estratégicos de salud materna, de la Secretaría de Salud; además de ser subsede para las Anestesiología y Pediatría, y uno de los llamados “hospitales ancla” del Régimen Estatal de Protección Social en Salud (Seguro Popular).
                </Card.Text>
                
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginLeft:15, marginTop:10 }}>
            <Card.Img style={{margin:5, width:275, height:200}} variant="top" src="https://www.elsoldelcentro.com.mx/local/u3qnxm-hospital/ALTERNATES/LANDSCAPE_1140/hospital"  />
            <Card.Body >
                <Card.Title>Servicios</Card.Title>
                <Card.Text>
                <ListGroup style={{margin:5}}>
                    <ListGroup.Item>Ginecología y Obstetricia</ListGroup.Item>
                    <ListGroup.Item variant="info">Cirugía</ListGroup.Item>
                    <ListGroup.Item>Pediatría</ListGroup.Item>
                    <ListGroup.Item variant="info">Medicina Interna</ListGroup.Item>
                    <ListGroup.Item>Clínica de Displasias</ListGroup.Item>
                    <ListGroup.Item variant="info">Urgencias</ListGroup.Item>
                    <ListGroup.Item>Apoyo de Diagnosticos: Laboratorio, Imagenología</ListGroup.Item>
                    <ListGroup.Item variant="info">Terapia Intensiva Adulto</ListGroup.Item>
                    <ListGroup.Item> Clínica de Embarazo de Alto Riesgo</ListGroup.Item>
                    <ListGroup.Item variant="info">Información Básica y Egresos Hospitalarios</ListGroup.Item>
                    </ListGroup>
                    
                </Card.Text>
                
            </Card.Body>
            </Card>
            
            </Col>
            

            <Col sm={9} md={9} lg={9} xl={9} >
            <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://www.consalud.es/uploads/s1/12/15/30/3/embarazada.jpeg" width="450" height="450"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="https://gacetamedica.com/wp-content/uploads/2020/03/gettyimages-1091665232-170667a.jpg" width="450" height="450"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.bbmundo.com/wp-content/uploads/2014/09/consultas-cuidados-prenatales.jpg" width="450" height="450"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
            </Col>
            
    </Row>



        
    
        </Container>
        )    
    }
    export default Main;

    if (document.getElementById('main')) {
        ReactDOM.render(<Main />, document.getElementById('main'));
    }