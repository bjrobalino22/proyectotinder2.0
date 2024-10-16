// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h2>Contacto</h2>
            <p>
                Si tienes preguntas o necesitas asistencia, no dudes en contactarnos. 
                Puedes enviarnos un correo electrónico a <a href="mailto:info@tinder2mascotas.com">info@tinder2mascotas.com</a> 
                y estaremos encantados de ayudarte. Nuestro equipo responde a los correos electrónicos en un plazo de 24 horas.
            </p>
            <p>
                También puedes visitarnos en nuestra sede principal ubicada en Calle Esperanza, y Rio Coca, Ciudad Quito-Ecuador. 
                Nuestro equipo estará encantado de ayudarte y responder cualquier pregunta que tengas sobre nuestra plataforma.
            </p>
            <p>
                Si prefieres hablar directamente, puedes llamarnos al <a href="tel:+593968465097">+593 96 846 5097</a>. 
                Estamos disponibles para atencion al cliente de lunes a viernes de 9:00 a 18:00.
            </p>
            <p>
                Además, si deseas recibir información sobre nuestras últimas actualizaciones y noticias, puedes suscribirte a nuestro boletín informativo. 
                Simplemente envía un correo a <a href="mailto:subscribe@tinder2mascotas.com">subscribe@tinder2mascotas.com</a> y te añadiremos a nuestra lista de correo.
            </p>
        </div>
    );
};

export default Contact;
