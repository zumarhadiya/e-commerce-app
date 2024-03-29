import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
} from '@chakra-ui/react'
import Navbar from './Navbar'

const Login = () => {
    return (
        <Box>
            <Navbar />
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl>
                <FormLabel>password</FormLabel>
                <Input type='password' />
            </FormControl>
        </Box>
    )
}

export default Login