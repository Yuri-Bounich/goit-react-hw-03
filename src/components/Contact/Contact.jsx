import s from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={s.item}>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
};

export default Contact;
