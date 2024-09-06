import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { styled } from '@mui/system';
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import icon from '../assets/Icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(() => ({
  background: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: '1px solid #E0E0E0',
}));

const Logo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const NavItem = styled(Typography)(({ theme }) => ({
  color: '#323A3A',
  cursor: 'pointer',
  marginRight: theme.spacing(3),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const navigateTo = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 5, flexGrow: 1 }}
        >
          <Logo component={Link} to='/'>
            <img
              src={icon}
              alt='EnergyX Icon'
              style={{ width: '24px', height: '24px' }}
            />
            <Typography variant='h6' component='div' sx={{ color: '#323A3A' }}>
              EnergyX
            </Typography>
          </Logo>
          <Box>
            <NavItem component={Link} to='/dashboard'>
              Workouts
            </NavItem>
            <NavItem component={Link} to='/dashboard'>
              Coaches
            </NavItem>
          </Box>
        </Box>
        <Box>
          <IconButton color='inherit'>
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box sx={{ px: 3, py: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <div>Johnson Doe</div>
                <small>johnsondoe@nomail.com</small>
              </Box>
              <hr />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleCloseUserMenu();
                  navigateTo('/account');
                }}
              >
                <TuneIcon />
                <div>
                  <div>My Account</div>
                  <small>Edit Account Profile</small>
                </div>
              </Box>
              <hr />
              <Box sx={{ textAlign: 'center' }}>
                <Button variant='outlined' fullWidth>
                  Logout{' '}
                </Button>
              </Box>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
