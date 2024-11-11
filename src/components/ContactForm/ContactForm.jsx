// import { useId } from 'react';
import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ handleAddTodo }) => {
  const onSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    login: Yup.string().min(3).max(50).required('this field is required'),
    password: Yup.string().min(3).max(50).required(),
  });

  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <div className={s.container}>
        <Formik
          validationSchema={orderSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          <Form className={s.form}>
            <label className={s.input}>
              <span>Name</span>
              <Field
                type="text"
                name="login"
                // value={newValue}
                onChange={e => handleAddTodo(e.target.value)}
              />
              <ErrorMessage name="login" component="span" />
            </label>
            <label className={s.input}>
              <span>Number</span>
              <Field type="text" name="password" />
              <ErrorMessage name="password" component="span" />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

//htmlFor, допомагає асистивним технологіям, зв'язуючи
//поле і label за ідентифікатором
// const NameId = useId();
// const NumberId = useId();

// return (
//   <div className={s.container}>
//     <form className={s.form} onSubmit={handleSubmit}>
//       <label htmlFor={NameId}>Name</label>
//       <input type="text" name="login" id={NameId} />
//       <label htmlFor={NumberId}>Number</label>
//       <input type="password" name="password" id={NumberId} />
//       <button type="submit">Add contact</button>
//     </form>
//   </div>
// );

// const ContactForm = ({ onFeedback, onReset, totalFeedback }) => {
//   return (
//     <div className={s.container}>
//       <button className={s.btn} onClick={() => onFeedback('good')}>
//         Good
//       </button>
//       <button className={s.btn} onClick={() => onFeedback('neutral')}>
//         Neutral
//       </button>
//       <button className={s.btn} onClick={() => onFeedback('bad')}>
//         Bad
//       </button>
//       {/* Кнопка Reset з умовним рендерингом на основі totalFeedback */}
//       {totalFeedback > 0 && (
//         <button className={s.btn} onClick={onReset}>
//           Reset
//         </button>
//       )}
//     </div>
//   );
// };

export default ContactForm;
