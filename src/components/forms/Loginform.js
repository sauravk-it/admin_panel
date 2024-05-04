import React from 'react'
import { Formik, Form } from 'formik';

import { TextField } from '@mui/material'
import * as Yup from 'yup'
import SubmittButton from '../common/Button';

const Loginform = ({handleSubmit,loginLoading,response}) => {
    const validate = Yup.object({
        email: Yup.string().email()
            .required('Enter your email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters.')
            .required('Enter Password'),
    })
   
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validate}
            onSubmit={async (values) => {
                const { email, password } = values
                handleSubmit(email, password)
            }}

        >
            {({
                errors,
                touched,
                values,
                handleChange,
                handleSubmit,

            }) => (
                <Form onSubmit={handleSubmit} style={{ width: 300 }}>
                    <div>
                        <TextField label="Email" name="email" variant="outlined" size='small' fullWidth value={values.email} onChange={handleChange} />
                        {errors.email && touched.email && errors.email}
                    </div>
                    <div>
                        <TextField label="Password" name="password" variant="outlined" size='small' fullWidth value={values.password} sx={{mt:2}}onChange={handleChange} />
                        {errors.password && touched.password && errors.password} 
                    </div>
                    <div>
                    <SubmittButton
                    loading={loginLoading}
                    fullWidth
                    label='Sign In'
                />

                    </div>
                    {response && !response.success && <div className="alert alert-danger mt-3" role="alert">{response.error}</div>}
                </Form>
            )}
        </Formik>
    )
}

export default Loginform
