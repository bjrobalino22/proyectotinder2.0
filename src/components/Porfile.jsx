import React from 'react';
import './Porfile.css'; 
import { Card, Button } from 'react-bootstrap';
import bryanPhoto from './ruta/bryanPhoto.jpg'; // Ajusta la ruta según tu proyecto

const Profile = () => {
  // Información del usuario
  const userProfile = {
    name: 'Nombre usuario',
    lastName: 'Apellido usuario',
    petname: 'Nombre mascota',
    legend: 'Aquí encontrarás un resumen de tus notificaciones.',
    photo: bryanPhoto, // Imagen importada
  };

  // Funciones para manejar los eventos
  const handleContactClick = () => {
    alert('Has hecho clic en Matchs.');
  };

  const handleContactClick1 = () => {
    alert('Has hecho clic en Mensajes.');
  };

  return (
    <div className="User-details">
      <Card style={{ width: '20rem', margin: 'auto', marginTop: '2rem' }}>
        <Card.Img 
          variant="top" 
          src={userProfile.photo} 
          alt={`${userProfile.name} ${userProfile.lastName}`} 
        />
        <Card.Body>
          <Card.Title>
            {userProfile.name} {userProfile.lastName}
          </Card.Title>
          <Card.Text>
            <strong>{userProfile.petname}</strong> <br />
            {userProfile.legend}
          </Card.Text>
          <div className="buttons">
            <Button 
              variant="primary" 
              className="btn-custom" 
              onClick={handleContactClick}
            >
              Matchs
            </Button>
            <Button 
              variant="secondary" 
              className="btn-custom" 
              onClick={handleContactClick1}
            >
              Mensajes
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
