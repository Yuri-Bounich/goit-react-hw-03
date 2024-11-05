import s from './Feedback.module.css';

const Feedback = ({ values, total, positive }) => {
  return (
    <div className={s.cotainer}>
      <p className={s.results}>Good: {values.good}</p>
      <p className={s.results}>Neutral: {values.neutral}</p>
      <p className={s.results}>Bad: {values.bad}</p>
      <p className={s.results}>Total: {total}</p>
      <p className={s.results}>Positive Feedback: {positive}%</p>
    </div>
  );
};

export default Feedback;
