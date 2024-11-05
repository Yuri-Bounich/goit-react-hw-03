import s from './Description.module.css';

const Description = ({ title, text }) => {
  return (
    <div className={s.cotainer}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default Description;
