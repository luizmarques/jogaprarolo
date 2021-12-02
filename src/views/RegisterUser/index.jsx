import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup";
import { IMaskInput } from 'react-imask';
import { PageTitle } from '../../components/PageTitle'
import { FormField } from '../../components/FormField'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {registerUser} from "../../services/userServices"
import { useHistory } from 'react-router'


function Register() {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      birthday: "",
      phone: "",
      cpf: "",
      email: "",
      password: "",
      agree: false,
      isGenericUser: true,
      isPartner: false,
      isAdministrator: false,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Preencha o nome.")
        .min(5, "Informe pelo menos 5 caracteres."),
      address: yup
        .string()
        .required("Preencha o endereço."),
      cpf: yup
        .string()
        .required("Preencha o cpf"),
      birthday: yup
        .date()
        .required("Preencha a data de nacimento"),
      email: yup
        .string()
        .required("Preencha o e-mail.")
        .email("Preencha um e-mail válido."),
      phone: yup.string().required("Preencha o telefone."),
      password: yup
        .string()
        .required("Preencha a senha.")
        .min(8, "Informe pelo menos 8 caracteres.")
        .max(50, "Informe no máximo 50 caracteres."),
      agree: yup.boolean().equals([true], "É preciso aceitar os termos."),
    }),
    onSubmit: async (values, { setErrors }) => {
      // const response = 
      await registerUser(values)
      history.push("/user/login")

      // const { error, response } = await loginUser(values);
      // if (response) {
      //   dispatch(updateUser(response));
      //   history.push("/novo-pedido");
      //   return;
      // } else {
      //   setError("Erro ao tentar fazer o login, verique seu e-mail e/ou senha");
      // }
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
          <PageTitle>Registrar</PageTitle>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <FormField
                {...getFieldProps("name")}
                label="Nome"
                placeholder="Nome"
              />
            </div>
            <div>
              <FormField
                {...getFieldProps("address")}
                label="Endereço"
                placeholder="Endereço"
              />
            </div>
            <div>
              <FormField
                {...getFieldProps("email")}
                label="E-mail"
                placeholder="E-mail"
              />
            </div>
            <div>
              <FormField
                {...getFieldProps("birthday")}
                type="date"
                label="Data de nascimento"
                placeholder="Data de nascimento"
              />
            </div>
            <div>
              <FormField
                {...getFieldProps("cpf")}
                label="CPF"
                placeholder="000.000.000-00"
                as={IMaskInput}
                mask={[
                  { mask: '000.000.000-00' },
                ]}
              />
            </div>
            <div>
              <FormField
                {...getFieldProps("phone")}
                label="Telefone"
                placeholder="(00) 00000-0000"
                as={IMaskInput}
                mask={[
                  { mask: '(00) 00000-0000' },
                ]}
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
            <Form.Group>
                <Form.Check
                  {...formik.getFieldProps("agree")}
                  type="checkbox"
                  label={
                    <span>
                      Li e aceito os{" "}
                      <a href="/termos-de-uso.pdf" target="_blank">
                        Termos de Uso
                      </a>
                      .
                    </span>
                  }
                />
                {formik.touched.agree && formik.errors.agree && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.agree}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            <div>
              <Button
                variant="primary"
                type="submit"
                loading={formik.isValidating || formik.isSubmitting  || false}
                disabled={!formik.isValid || formik.isSubmitting || false}
              >
                Criar
              </Button>
            </div>
          </Form >
        </Col>
      </Row>
    </Container>
  )
}

export default Register