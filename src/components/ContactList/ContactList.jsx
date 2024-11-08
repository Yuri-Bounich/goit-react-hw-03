import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={s.cotainer}>
      <h2 className={s.title}>Phonebook</h2>
      <ul className={s.block}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
