import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container style={{ textAlign: 'center', padding: '16px' }}>
      <Typography variant="h4" style={{ marginBottom: '16px', color: '#1976D2' }}>
        ¡Descubre el Barroco con Nosotros!
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '32px' }}>
        Sumérgete en la riqueza artística y cultural de la era barroca. Ya sea que quieras registrarte en nuestros recorridos o simplemente obtener información, estás en el lugar correcto.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '16px' }}>
        Al registrarte, tendrás la oportunidad de explorar los lugares más emblemáticos del Barroco de la mano de guías turísticos apasionados. Desde majestuosas catedrales hasta encantadoras plazas, cada recorrido te sumergirá en la belleza y la historia de esta época fascinante.
      </Typography>
      <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '16px' }}>
        No dudes en dejarnos cualquier pregunta o comentario en el campo de "Mensaje". Estamos aquí para ayudarte y hacer de tu experiencia barroca algo inolvidable.
      </Typography>
      <Typography variant="body1" style={{ marginTop: '32px', fontWeight: 'bold' }}>
        ¡Gracias por elegirnos como tu guía en este extraordinario viaje a través del tiempo y la historia! 🎨🏰✈️
      </Typography>
    </Container>
  );
};

export default ContactForm;
