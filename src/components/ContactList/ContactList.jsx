import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteTodo }) => {
  return (
    <div className={s.cotainer}>
      <ul className={s.block}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact name={name} number={number} />
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
