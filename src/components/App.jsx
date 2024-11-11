import contactsData from '../assets/contacts.json';
import ContactForm from './ContactForm/ContactForm';
import '../index.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useState /*useEffect*/ } from 'react';

const App = () => {
  // Ініціалізація стану з локального сховища або початкових значень
  const [values, setValues] = useState('');
  const [newLoginValue, setNewLoginValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');
  const [contacts, setContacts] = useState(contactsData);

  // Функція для обробки змін у фільтрі
  const handleFilterChange = event => {
    setValues(event.target.value); // Оновлює значення фільтру
  };

  // Фільтрування контактів на основі фільтру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(values.toLowerCase())
  );

  // Збереження стану в локальному сховищі кожного разу, коли він змінюється
  // useEffect(() => {
  //   localStorage.setItem('feedback-values', JSON.stringify(values));
  // }, [values]);

  // Функція для оновлення стану за типом фідбеку
  // const updateFeedback = feedbackType => {
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     [feedbackType]: prevValues[feedbackType] + 1,
  //   }));
  // };

  const handleDeleteTodo = id => {
    // console.log(id);
    // const newContacts = contacts.filter(item => item.id != id);
    // //використовуємо фільт для відсіювання id які не дорівнюють id що видаляється
    // console.log(newContacts);
    setContacts(prev => prev.filter(item => item.id != id));
    // у setContacts перезаписали відфільтрований масив
  };

  return (
    <div>
      <ContactForm
        newLoginValue={newLoginValue}
        setNewLoginValue={setNewLoginValue}
        newPasswordValue={newPasswordValue}
        setNewPasswordValue={setNewPasswordValue}
      />
      <SearchBox
        values={values}
        onFilterChange={handleFilterChange}
        /* Передаємо значення фільтру та функцію для його оновлення */
      />
      <ContactList
        contacts={filteredContacts}
        /* Передаємо відфільтрований список контактів */
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
