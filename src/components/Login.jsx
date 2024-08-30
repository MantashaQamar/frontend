import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    Container,
  } from '@mui/material';
  
  import loginImage from '../assets/Image.jpg';
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import axios from 'axios';
  import { Visibility, VisibilityOff } from '@mui/icons-material';
  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom'; // Import Link
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'We couldn’t find an account matching the email.'
      )
      .required('Email is Required'),
    password: Yup.string().required('Password is Required'),
  });
  
  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigateTo = useNavigate();
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleLogin = async (values) => {
      navigateTo('/');
      const baseURL =
        'https://xb0h50540b.execute-api.eu-west-2.amazonaws.com/api/signin';
      try {
        const response = await axios.post(baseURL, { ...values });
        console.log(response);
      } catch (error) {
        alert(error.message);
      }
    };
    const {
      values: { email, password },
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
  
      onSubmit: handleLogin,
    });
    return (
      <Container maxWidth='lg'>
        <Grid container padding={2}>
          <Grid item xs={12} sm={6}>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              height={'100%'}
            >
              <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, px: { sm: 10 } }}
              >
                <Typography
                  component='div'
                  variant='body1'
                  sx={{ color: '#757575', fontSize: '12px', fontWeight: 300 }}
                  gutterBottom
                >
                  WELCOME BACK
                </Typography>
                <Typography
                  component='div'
                  variant='h5'
                  sx={{
                    mb: 5,
                    fontSize: '24px',
                    fontWeight: 500,
                  }}
                  gutterBottom
                >
                  Log in to Your Account
                </Typography>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  placeholder='johnsondoe222@nomail.com'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  helperText={errors.email}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  placeholder='Enter Your Password'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1,
                    backgroundColor: '#9EF300',
                    color: 'black',
                    ':hover': {
                      backgroundColor: '#9EF300',
                      opacity: 0.8,
                    },
                  }}
                >
                  Log In
                </Button>
                <Typography
                  component={'div'}
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {"Don't have an account? "}
                  <Typography
                    sx={{
                      fontSize: '12.8px',
                      fontWeight: 600,
                      color: '#212121',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    component={Link} // Use Link component here
                    to='/signup'
                    variant='body2'
                  >
                    CREATE NEW ACCOUNT
                  </Typography>
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={0} sm={6}>
            <Box
              sx={{
                height: '94vh',
                width: '100%',
                backgroundImage: `url(${loginImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  color: 'white',
                  padding: '0 16px',
                }}
              >
                “The path to triumph is paved with{' '}
                <span style={{ color: '#A1F522' }}>strength to train hard</span>{' '}
                and the perseverance to{' '}
                <span style={{ color: '#A1F522' }}> rise each time you fall</span>
                .”
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }