// import { useId } from 'react';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.input}>
          <span>Name</span>
          <input type="text" name="login" />
        </label>
        <label className={s.input}>
          <span>Number</span>
          <input type="password" name="password" />{' '}
        </label>
        <button type="submit">Add contact</button>
      </form>
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
