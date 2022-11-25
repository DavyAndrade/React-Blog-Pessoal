import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Login.css'

function Login() {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>

                <Grid item alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form>
                            <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center'>Login</Typography>
                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                            <TextField id='senha' label='senha' variant='outlined' margin='normal' name='senha' fullWidth type='password' ></TextField>
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>Entrar</Button>
                            </Box>
                        </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>

                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>

                            <Typography variant='subtitle1' gutterBottom align='center' className='negrito'>Cadastre-se</Typography>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={6} className='imagem'></Grid>

            </Grid>
        </>
    )
}

export default Login;