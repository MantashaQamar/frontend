import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';

const SubHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(331.61deg, #628D12 -99.16%, #8ED902 142.87%)',
  padding: theme.spacing(4),
  color: 'white',
}));

const WorkoutCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const workouts = [
  { id: 1, type: 'Yoga', date: 'July 9, 12:30', status: 'Scheduled' },
  {
    id: 2,
    type: 'Yoga',
    date: 'July 1, 12:30',
    status: 'Waiting for feedback',
  },
  {
    id: 3,
    type: 'Fitness',
    date: 'June 25, 12:30',
    status: 'Waiting for feedback',
  },
  { id: 4, type: 'Rock Climbing', date: 'June 17, 12:30', status: 'Finished' },
  { id: 5, type: 'Yoga', date: 'June 9, 12:30', status: 'Finished' },
  { id: 6, type: 'Yoga', date: 'June 1, 12:30', status: 'Cancelled' },
];

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <SubHeader>
        <Typography variant={isMobile ? 'h5' : 'h4'}>
          Hello, Johnson Doe!
        </Typography>
      </SubHeader>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {workouts.map((workout) => (
            <Grid item xs={12} sm={6} key={workout.id}>
              <WorkoutCard>
                <CardContent>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    mb={2}
                  >
                    <Typography variant='h6'>{workout.type}</Typography>
                    <Chip
                      label={workout.status}
                      color={
                        workout.status === 'Scheduled'
                          ? 'primary'
                          : workout.status === 'Finished'
                          ? 'success'
                          : workout.status === 'Cancelled'
                          ? 'error'
                          : 'default'
                      }
                      size='small'
                    />
                  </Box>
                  <Typography variant='body2' color='text.secondary' paragraph>
                    Enhance your flexibility and balance with this calming{' '}
                    {workout.type.toLowerCase()} session. Flow through a series
                    of poses designed to stretch and strengthen your entire body
                    while promoting relaxation.
                  </Typography>
                  <Box display='flex' alignItems='center' mb={2}>
                    <CalendarIcon fontSize='small' sx={{ mr: 1 }} />
                    <Typography variant='body2'>{workout.date}</Typography>
                  </Box>
                </CardContent>
                <Box p={2} pt={0}>
                  <Button
                    variant={
                      workout.status === 'Scheduled' ? 'contained' : 'outlined'
                    }
                    color={
                      workout.status === 'Scheduled' ? 'primary' : 'inherit'
                    }
                    fullWidth
                  >
                    {workout.status === 'Scheduled'
                      ? 'Finish Workout'
                      : 'Leave Feedback'}
                  </Button>
                </Box>
              </WorkoutCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}