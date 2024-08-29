import React, { useState } from 'react';
import { Container, Box, Grid, TextField, Button, Typography, InputAdornment, IconButton, MenuItem } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import gymImg from '../assets/Image.jpg';
import { z } from 'zod';
import { Link } from 'react-router-dom';

const validationSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(20, 'Name must be 1-20 characters long')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z.string()
    .email('Invalid email address'),
  password: z.string()
    .min(5, 'Password must be at least 5 characters long')
    .regex(/(?=.*[a-z])/, 'Password must include lowercase letter')
    .regex(/(?=.*[A-Z])/, 'Password must include uppercase letter')
    .regex(/(?=.*\d)/, 'Password must include a number')
    .regex(/(?=.*[@$!%*?&])/, 'Password must include a special character'),
});

function SignUpForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [target, setTarget] = useState('');
  const [activity, setActivity] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [targets] = useState([
    { value: 'lose_weight', label: 'Lose weight' },
    { value: 'build_muscle', label: 'Build muscle' },
    { value: 'improve_endurance', label: 'Improve endurance' },
  ]);

  const [activities, setActivities] = useState([
    { value: 'yoga', label: 'Yoga' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'strength_training', label: 'Strength Training' },
  ]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    try {
      validationSchema.parse({
        name,
        email,
        password,
      });
      setErrors({});
      return true;
    } catch (error) {
      const fieldErrors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const apiRegister = 'https://hrzokqb538.execute-api.eu-west-2.amazonaws.com/api/signup';

    const userData = {
      fullName: name,
      email: email,
      password: password,
      target: target,
      preferableActivity:activity
  };

  try {
    const response = await axios.post(apiRegister, userData);
    alert('User created successfully! Check the console for API response.');
  } catch (error) {
    alert('Failed to create user. Check the console for details.');
  }
  };
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ minHeight: '100vh', alignItems: 'center' }}>
        {/* Left Side - Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: { xs: 2, sm: 4, md: 6 } }}>
            <Typography variant="h6" gutterBottom sx={{color: '#757575'}}>
              LET'S GET YOU STARTED
            </Typography>
            <Typography variant="h4" gutterBottom sx={{fontWeight: '700'}}>
              Create an Account
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                type="email"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Your target"
                margin="normal"
                variant="outlined"
                select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              >
                {targets.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Preferable Activity"
                margin="normal"
                variant="outlined"
                select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              >
                {activities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, bgcolor: '#B8FF3B', color: 'black', ':hover': { bgcolor: '#9FF421' } }}
                type="submit"
              >
                Create An Account
              </Button>
              <Typography variant="body2" align="center">
                Already have an account? <Link to= "/login">LOGIN HERE</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Image and Quote */}
        <Grid item xs={12} md={6}>
  <Box
    sx={{
      height: '852px',
      width: '664px',
      backgroundImage: `url(${gymImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 8,
      marginTop: 2.5,
      marginBottom: 2.5,
      marginLeft: 35,
      display: { xs: 'none', md: 'flex' }, // Hide on screens smaller than 'md'
      alignItems: 'flex-end',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        position: 'absolute',
        bottom: 150,
        left: 20,
        right: 20,
        textAlign: '',
        color: 'white',
        padding: '16px',
        fontWeight: 500,
        fontStyle:'Lexend',
      }}
    >
      “The path to triumph is paved with the <span style={{ color: '#A1F522' }}>strength to train hard</span> and the perseverance to <span style={{ color: '#A1F522' }}>rise each time you fall</span>.”
    </Typography>
  </Box>
</Grid>

      </Grid>
    </Container>
  );
}

export default SignUpForm;
;