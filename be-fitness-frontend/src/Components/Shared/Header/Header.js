import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { FitnessCenter } from '@mui/icons-material/'

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <FitnessCenter />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <Link className="link" to="/">be-fitness</Link>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'><Link className="link" to="/dashboard">Dashboard</Link></Button>
                    <Button color='inherit'><Link className="link" to="/sessions">Sessions</Link></Button>
                    <Button color='inherit'><Link className="link" to="/about">About</Link></Button>
                    <Button color='inherit'>Register/Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header