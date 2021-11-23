import { Form } from "react-bootstrap"

export const FormField = ({ label, error, ...inputProps }) => {
  return <Form.Group>
    <Form.Label className='mb-1'>{label}</Form.Label>
    <Form.Control {...inputProps} />
    <Form.Control.Feedback type="invalid">
      {error}
    </Form.Control.Feedback>
  </Form.Group>
}