import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { FormField } from '../../components/FormField'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from "yup";
import {loginUser} from "../../services/userServices"
import { saveToken } from '../../config/storage'
import { updateUser } from "../../store/slices/userSlice"
import { useDispatch } from "react-redux";


function Login() {
  const history = useHistory()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Preencha o e-mail"),
      password: yup
        .string()
        .required("Preencha a senha.")
        .min(8, "Informe pelo menos 8 caracteres.")
        .max(50, "Informe no máximo 50 caracteres."),
    }),
    onSubmit: async (values, { setErrors }) => {
      const { response } = await loginUser(values);
      saveToken(response.data.token)

      if (response) {
        dispatch(updateUser(response));
        history.push("/user/dashboard");
        return;
      } else {
        setErrors("Erro ao tentar fazer o login, verique seu e-mail e/ou senha");
      }
    },
  })
  
  const getFieldProps = (fieldName) => ({
    ...formik.getFieldProps(fieldName),
    isValid: formik.touched[fieldName] && !formik.errors[fieldName],
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    error: formik.errors[fieldName],
  });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4}>
          <PageTitle>Login</PageTitle>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <FormField
                {...getFieldProps("email")}
                label="Email"
                placeholder="E-mail"
              />

            </div>
            <div>
            <FormField
              {...getFieldProps("password")}
                type="password"
                label="Senha"
                placeholder="Informe sua senha de acesso"
                maxLength={50}
              />
            </div>
            <div>
            <Button
                variant="primary"
                type="submit"
                loading={formik.isValidating || formik.isSubmitting  || false}
                disabled={!formik.isValid || formik.isSubmitting || false}
              >
                Login
              </Button>
            </div>
            <div>
              <Link to="/user/register">Registrar aqui</Link>
            </div>
          </Form >
        </Col>
      </Row>
    </Container >
  )
}

export default Login