import '../styles/components/pages/ContactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = () => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error){
            setFormData(initialForm);
        }
    };

    return (
        <main className="holder">
            <div className='contacto'>
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                    <h2>Contacto Rápido</h2>
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
                <div className="datos">
                    <h2>Otras vías  de comunicación</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Teléfono: 4222244</li>
                        <li>email: aberturas@avib.com</li>
                        <li>Facebook: -</li>
                        <li>Twitter: -</li>
                        <li>Instagram: -</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default ContactoPage;