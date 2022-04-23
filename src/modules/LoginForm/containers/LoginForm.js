import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";

import validateForm from "../../../utils/validate";

import store from "../../../redux/store";

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    validate: (values) => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },
    //Функция обрабатывающся результаты формы
    //setSubmitting - функция библиотеки formik для изменения статуса отправки isSubmitting
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            // .dispatch(userActions.fetchUserLogin(values))
            .then(({ status }) => {
                if (status === "success") {
                    props.history.push("/");
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
