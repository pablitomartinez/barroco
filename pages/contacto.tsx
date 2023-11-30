import React, { useState,ChangeEvent,FocusEvent } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { sendContactForm } from '../lib/api';
// interface ContactFormProps {
//   onSubmit: (formData: FormData) => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  values: FormValues;
  isLoading: boolean;
};

const initValues: FormValues = { name: "", email: "", message: "" };

const initState: FormState = { values: initValues, isLoading: false };


const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { values, isLoading } = state;

  // const onBlur = ({ target }: FocusEvent<HTMLInputElement>) =>
  //   setTouched((prev:any) => ({
  //     ...prev,
  //     [target.name]: true,
  //   }));

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev:any) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev:any) => ({
      ...prev,
      isLoading: true,
    }));
    await sendContactForm(values);
    // setState({
    //   values: initValues,
    //   isLoading: false,
    // });
  };


  return (
    <Container style={{ textAlign: 'center', padding: '16px' }} id='contacto'>
      <Typography variant="h4" style={{ marginBottom: '16px', color: '#1976D2' }}>
        ¡Descubre el Barroco con Nosotros!
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '32px' }}>
        Sumérgete en la riqueza artística y cultural de la era barroca. Ya sea que quieras registrarte en nuestros recorridos o simplemente obtener información, estás en el lugar correcto.
      </Typography>
      {/* <form onSubmit={onSubmit}> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='text'
              label="Nombre"
              name="name"
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='text'
              label="Correo Electrónico"
              name="email"
              value={values.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='text'
              label="Mensaje"
              name="message"
              value={values.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={onSubmit} type="submit" variant="contained" color="primary">
              Registrarse
            </Button>
          </Grid>
        </Grid>
      {/* </form> */}
      {/* <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '16px' }}>
        Al registrarte, tendrás la oportunidad de explorar los lugares más emblemáticos del Barroco de la mano de guías turísticos apasionados. Desde majestuosas catedrales hasta encantadoras plazas, cada recorrido te sumergirá en la belleza y la historia de esta época fascinante.
      </Typography>
      <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '16px' }}>
        No dudes en dejarnos cualquier pregunta o comentario en el campo de "Mensaje". Estamos aquí para ayudarte y hacer de tu experiencia barroca algo inolvidable.
      </Typography>
      <Typography variant="body1" style={{ marginTop: '32px', fontWeight: 'bold' }}>
        ¡Gracias por elegirnos como tu guía en este extraordinario viaje a través del tiempo y la historia! 🎨🏰✈️
      </Typography> */}
    </Container>
  );
};

export default ContactForm;
