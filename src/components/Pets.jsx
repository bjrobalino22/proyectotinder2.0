import React from 'react';

const Pets = () => {
    return (
        <section id="pets">
            <h2>Mascotas Disponibles</h2>
            <p>
                Explora nuestra amplia variedad de mascotas que están buscando un nuevo hogar o un compañero de aventuras. 
                Cada perfil incluye detalles sobre la personalidad, intereses y fotos adorables de cada mascota.
            </p>
            <div className="pet-profile">
                <img src="/images/dog1.jpg" alt="Perro 1" />
                <h3>Max</h3>
                <p>Raza: Labrador Retriever</p>
                <p>Edad: 2 años</p>
                <p>Personalidad: Amigable, juguetón</p>
            </div>
            <div className="pet-profile">
                <img src="/images/cat1.jpg" alt="Gato 1" />
                <h3>Whiskers</h3>
                <p>Raza: Siamés</p>
                <p>Edad: 1 año</p>
                <p>Personalidad: Cariñoso, curioso</p>
            </div>
            <h3>Otras Mascotas Disponibles</h3>
            <div className="pet-profile">
                <img src="/images/dog2.jpg" alt="Perro 2" />
                <h3>Bella</h3>
                <p>Raza: Golden Retriever</p>
                <p>Edad: 3 años</p>
                <p>Personalidad: Leal, tranquila</p>
            </div>
            <div className="pet-profile">
                <img src="/images/cat2.jpg" alt="Gato 2" />
                <h3>Gato Negro</h3>
                <p>Raza: Persa</p>
                <p>Edad: 2 años</p>
                <p>Personalidad: Juguetón, cariñoso</p>
            </div>
            {/* Agregar más perfiles de mascotas según sea necesario */}
        </section>
    );
};

export default Pets;
