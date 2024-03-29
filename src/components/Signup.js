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
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    const SignupSchema = Yup.object().shape({
            username: Yup.string()
            .min(4,"too short")
            .max(6,"too long")
            .required(),
            email: Yup.string()
            .email("invalid email")
            .required(),
            password: Yup.string()
            .min(6,"too short")
            .max(10,"too long")
            .required(),
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2))
        },
        // validationSchema: SignupSchema
    })
    
    return (
        <>
            <Navbar />
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.touched.username && formik.errors.username}>
                        <FormLabel>User Name</FormLabel>
                        <Input
                            type='text'
                            name='username' 
                            onChange={formik.handleChange}
                            value={formik.values.username}/>
                            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                        <FormLabel>password</FormLabel>
                        <Input
                            type='password'
                            name='password' 
                            onChange={formik.handleChange}
                            value={formik.values.password}/>
                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <button type="submit">sign up</button>

                </form>
            </Box>
        </>
    )
}

export default Signup