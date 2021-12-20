import React, {ChangeEvent, useState, useEffect} from 'react'
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'; 
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )
    
    /*
        - Função que atualiza valores na camada model para realização do login
        - spread operator (...): permite realizar uma copia dos atributos ou elementos de objeto, no qual ele está operando.
        - evento.target
    */
    function updateModel(evento: ChangeEvent<HTMLInputElement>){

        setUserLogin({
            ...userLogin,
            [evento.target.name]: evento.target.value
        })
    }

    useEffect(() => {
        if(token != ''){
            history.push('/home')
        }
    }, [token])
    /*
        - Função que atua validação do login.
        - atua sobre o formulario de login para confirmar a requisição post realizada para logar.
     */
    async function onSubmit(evento: ChangeEvent<HTMLFormElement>){
        evento.preventDefault();
        try{
            await login('/usuarios/logar', userLogin, setToken)
            

            alert('Usuário logado com sucesso!')
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" align="center" component="h3">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(evento:ChangeEvent<HTMLInputElement>) => updateModel(evento)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(evento:ChangeEvent<HTMLInputElement>) => updateModel(evento)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                    
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>

                        </Box>
                    </form>
                    <Box>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' style={{textDecoration:'none',color:"black"}}>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1621677053994-bd9a30db6741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>

    );
}

export default Login
