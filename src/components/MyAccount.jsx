import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Container, styled } from '@mui/system';

const SubHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(331.61deg, #628D12 -99.16%, #8ED902 142.87%)',
  padding: theme.spacing(4),
  color: 'white',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: '0 auto',
}));

export default function MyAccount() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <SubHeader>
        <Typography variant={isMobile ? 'h5' : 'h4'}>My Account</Typography>
      </SubHeader>
      <FormContainer>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography
              variant='h6'
              sx={{ padding: 2, mb: 3, borderLeft: '5px solid #8ED902' }}
              gutterBottom
            >
              GENERAL INFORMATION
            </Typography>
            <Box display='flex' justifyContent='space-between'>
              <Button variant='outlined' color='primary'>
                Log Out
              </Button>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Container maxWidth='md'>
              <Grid container spacing={3}>
                <Grid item xs={9} display='flex' alignItems='center' mb={2}>
                  <Avatar sx={{ width: 64, height: 64, mr: 2 }}>JD</Avatar>
                  <Box>
                    <Typography variant='h6'>Johnson Doe</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      johnsondoe@nomail.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    label='Your Name'
                    variant='outlined'
                    defaultValue='Johnson Doe'
                  />
                </Grid>
                <Grid item xs={9}>
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel>Your target</InputLabel>
                    <Select label='Your target' defaultValue='lose-weight'>
                      <MenuItem value='lose-weight'>Lose weight</MenuItem>
                      <MenuItem value='gain-muscle'>Gain muscle</MenuItem>
                      <MenuItem value='improve-fitness'>
                        Improve fitness
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={9}>
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel>Preferable Activity</InputLabel>
                    <Select label='Preferable Activity' defaultValue='yoga'>
                      <MenuItem value='yoga'>Yoga</MenuItem>
                      <MenuItem value='fitness'>Fitness</MenuItem>
                      <MenuItem value='rock-climbing'>Rock Climbing</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={9}>
                  <Box display='flex' justifyContent='flex-end'>
                    <Button variant='contained' color='primary'>
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </FormContainer>
    </Box>
  );
}