import React , {useState, useEffect, ChangeEventHandler, ChangeEvent}from 'react';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Cadastro.css';
import { useThemeProps } from '@mui/material';


function Cadastro() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

        const [userResult, setUserResult] = useState<User>(
            {
                id: 0,
                nome: '',
                usuario: '',
                senha: ''
            })
        
        useEffect(() => {
            if (userResult.id != 0){
                history.push("/login")
            }
            console.log(userResult)
        }, [userResult])

        function confirmarSenhaHandle(evento: ChangeEvent<HTMLInputElement>) {
            setConfirmarSenha(evento.target.value)
        }

        function updateModel(evento: ChangeEvent<HTMLInputElement>){

            setUser({
                ...user,
                [evento.target.name]: evento.target.value
            })
        }

        async function onSubmit(evento: ChangeEvent<HTMLFormElement>) {
            evento.preventDefault()
            
            if(confirmarSenha == user.senha){
                cadastroUsuario("/usuarios/cadastrar", user, setUserResult)
                alert('Usuario cadastrado com sucesso.')
            }else{
                alert('Dados inconsistentes. Por favor, verificar as informações de cadastro.')
            }
        }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(evento: ChangeEvent<HTMLInputElement>) => updateModel(evento)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(evento: ChangeEvent<HTMLInputElement>) => updateModel(evento)}id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <TextField value={user.senha} onChange={(evento: ChangeEvent<HTMLInputElement>) => updateModel(evento)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(evento: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(evento)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' >
                                <Button variant='contained'  className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btnCadastrar'>
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default Cadastro;