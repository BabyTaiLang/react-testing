import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@material-ui/core';
import {AccountCircle, Lock} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const Register = () => {
    let email = React.useRef();
    let password = React.useRef();
    let conpassword = React.useRef();
    const history = useHistory();

    const register = () => {
        if (conpassword.value !== password.value) {
            alert('Please rewrite password!');
            return ;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            alert('success')
            history.push('/')
        })
        .catch(() => {
            alert('failed')
        })
    }

    return (
        <Box component='div' display='flex' justifyContent='center' className='LogPage' alignItems='center'>
            <Box component='div' className='LogDial' display='flex' flexDirection='column' alignItems='center'>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <AccountCircle className='login-icon'/>
                    <TextField label="email" variant="standard" inputRef={(ref) => {email = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <Lock className='login-icon'/>
                    <TextField type="password" label="password" variant="standard" inputRef={(ref) => {password = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <Lock className='login-icon'/>
                    <TextField type="password" label="confirm password" variant="standard" inputRef={(ref) => {conpassword = ref}}/>
                </Box>
                <Box component='div' mt={4} mb={1}>
                    <Button color='primary' variant='contained' onClick={register}>Register</Button>
                </Box>
                <Box component='div'>
                    <Link component='a' href="/login">
                        <Typography component='span'>Have already your account?</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Register;