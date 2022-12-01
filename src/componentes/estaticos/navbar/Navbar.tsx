import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>


                    <Box display="flex" justifyContent="start">
                        <Link to='/Home' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-none'>
                            <Box mx={1} className='cursor'>

                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>

                        <Link to='/login' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;