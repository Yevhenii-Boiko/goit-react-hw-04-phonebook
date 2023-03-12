import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorMessage, Form, FormField, Button } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(7).required(),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
