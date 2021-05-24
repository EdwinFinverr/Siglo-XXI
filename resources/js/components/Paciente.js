import React, {useState} from 'react'; //el usestate son los estados que estamos guardadndo(como una variable para ir actualizando) 
import ReactDOM from 'react-dom';
import Axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import FigureCaption from 'react-bootstrap/FigureCaption'


function Paciente(){
    
    const [data, setData] = useState({ //"data" es el objeto creado con los atributos
        Nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        CURP: ''
    })
    const [paciente, setPaciente] = useState([])
  
    const handleInputChange = (event) => { //recive el evento
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    
    }
   
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();// se crea un objeto formdata para enviar el objto a traves de la url
       
        formData.append('Nombre', data.Nombre)
        formData.append('Apellido Paterno', data.ApellidoPaterno)
        formData.append('Apellido Materno', data.ApellidoMaterno)  
        formData.append('Curp', data.CURP) 
          await Axios({ //
            method: 'get',
            url: 'api/Paciente',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(response=>{
              
            if (response.data.login== true){
                
              }
          })
          .catch(error => {
            console.log('Error Login', error )
          })
          console.log('props Login', data.Nombre);
        }
        const handleAll = async (e) =>{
            e.preventDefault()
           
              await Axios({
                method: 'get',
                url: 'api/Paciente'
              
              })
              .then(response=>{
                  console.log('response.data',response.data)
                  setStudent(response.data)
                  
              })
              .catch(error => {
                console.log('Error Login', error )
              })
              console.log('props Login', data.Nombre);
            }
    
            
    return (
    <Container fluid="md">
      <Alert variant="success">
        <Alert.Heading>Informacion del Paciente</Alert.Heading>   
      </Alert>

    <Row className="justify-content-md-center" style={{ margin: 10 }}>
      <Form onSubmit={handleSubmit}> 
      <Form.Row >
        <Container  className="text-center" style={{alignSelf:'center',margin:15}}>
          <Image src="https://cdn.icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png" align="center" width="250" height="250"  rounded />
        </Container>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirst">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
                type="text" 
                name="Nombre"
                placeholder="Enter First Name"
                
                onChange={handleInputChange} // aqui se invoca  
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLast">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control 
                type="text" 
                name="ApellidoPaterno"
                placeholder="Enter paterno"
               
                onChange={handleInputChange}
                />
            </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formGridLast">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control 
                type="text" 
                name="ApellidoMaterno"
                placeholder="Enter materno"
               
                onChange={handleInputChange}
                />
            </Form.Group>
        
       
        <Form.Row>
            <Form.Group as={Col} controlId="formGridControl">
            <Form.Label>Curp</Form.Label>
            <Form.Control
                type="text"  
                name="Curp"
                placeholder="AAAAABBBCCC"
                
                onChange={handleInputChange}
                />
            </Form.Group>
  
          </Form.Row>

          <Form.Row>
          
        <Badge pill variant="success" style={{marginRight:5}}>
            Estable
          </Badge>{' '}
          <Badge pill variant="warning" style={{marginRight:5}}>
            Delicada
          </Badge>{' '}
          <Badge pill variant="danger" style={{marginRight:5}}>
            Grave
          </Badge>{' '}
          
          </Form.Row>
        </Form>
        </Row>
        
        </Container>
        )    
    }

export default Paciente;
if (document.getElementById('paciente')) {
    ReactDOM.render(<Paciente />, document.getElementById('paciente'));
}