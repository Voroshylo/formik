import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from 'react'
import * as Yup from 'yup'

const initialValues = {
  username: '',
  email: '',
  password: '',
  textarea: '',
  level: 'long'
}

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, 'short!').max(50, 'long!').required('required!'),
  email: Yup.string().email('must be a valid email!').required('required'),
  password: Yup.string().min(2, 'short').max(10, 'long!').required('required'),
  textarea: Yup.string().min(15, 'short').max(100, 'long').required('required'),
  level: Yup.string().oneOf(['small', 'medium', 'long']).required('required')
}
);

const FeedbackForm = () => {
  const username = useId();
  const email = useId();
  const password = useId();
  const textarea = useId();
  const select = useId();
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm()
  }
  return (
    <Formik initialValues={initialValues
  
    }
      onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}
    >
      <Form>
        <>
        <Field
          type="text"
          name="username"
          placeholder="username"
        id = {username}
        />
        <ErrorMessage name='username' component='span'/>
        </>
        <>
        <Field
          type='email'
          name='email'
          placeholder='email'
        id = {email}
        />
        <ErrorMessage name='email' component='span'/>
      </>
      <>
        <Field
          type='password'
          name='password'
          placeholder='password'
          id={password}
          />
          <ErrorMessage name='password' component='span'/>
      </>
    <>
        <Field
          as='textarea'
          cols='20'
          rows='5'
          name='textarea'
          id={textarea}
        />
        <ErrorMessage name='textarea' component='span'/>
    </>
      <>
        <Field
          as='select'
            id={select}
            name="level"
        >
          <option value='small'>small</option>
          <option value='medium'>medium</option>
          <option value='long'>long</option>
        </Field>
        <ErrorMessage name='level' component='span'/>
      </>
<button type="submit">Submit</button>
      </Form>
      
    </Formik>
  );
};

export default FeedbackForm