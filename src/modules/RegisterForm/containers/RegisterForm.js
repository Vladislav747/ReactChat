import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';

//import validateForm from 'utils/validate';
import { userActions } from 'redux/actions';

import store from 'redux/store';

const RegisterFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    let errors = {};

    //validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserLogin(values))
      .then(({ status }) => {
        if (status === 'success') {
          props.history.push('/');
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'RegisterForm',
})(RegisterForm);

export default RegisterFormContainer;