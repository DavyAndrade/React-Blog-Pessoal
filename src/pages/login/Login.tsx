import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';

function Login() {

    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    // 1 - Criaremos o Hook useState do tipo UserLogin, definindo os seus valores iniciais.
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })


    // Método para recuperar as informações do usuário.
    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        }), [token]
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    })

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {

            await login('/usuarios/logar', userLogin, setToken)

            alert('Usuário Logado com Sucesso')

        } catch (error) {
            alert('Dados Inválidos')
        }
    }

    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>

                <Grid item alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center' className='negrito'>Entrar</Typography>

                            {/* Input de Usuário */}
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>

                            {/* Input de Senha */}
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' margin='normal' name='senha' fullWidth type='password'></TextField>

                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>Logar</Button>
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