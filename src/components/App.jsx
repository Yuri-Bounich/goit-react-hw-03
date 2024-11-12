import contactsData from '../assets/contacts.json';
import ContactForm from './ContactForm/ContactForm';
import '../index.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useState /*useEffect*/ } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  // Ініціалізація стану з локального сховища або початкових значень
  const [values, setValues] = useState('');
  const [contacts, setContacts] = useState(contactsData);

  // // 1. Створюємо один стейт для всіх полів
  // const [formValues, setFormValues] = useState({
  //   login: '',
  //   password: '',
  // });

  // // 2. Оновлення стану при зміні значення поля
  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormValues(prevState => ({
  //     ...prevState,
  //     [name]: value, // оновлюємо значення тільки того поля, яке змінилося
  //   }));
  // };

  // Функція для обробки змін у фільтрі
  const handleFilterChange = event => {
    setValues(event.target.value); // Оновлює значення фільтру
  };

  // Фільтрування контактів на основі фільтру
  const filteredContacts = contacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(values ? values.toLowerCase() : '')
  );

  const handleDeleteTodo = id => {
    // console.log(id);
    // const newContacts = contacts.filter(item => item.id != id);
    // //використовуємо фільт для відсіювання id які не дорівнюють id що видаляється
    // console.log(newContacts);
    setContacts(prev => prev.filter(item => item.id != id));
    // у setContacts перезаписали відфільтрований масив
  };

  const handleAddTodo = ({ login, password }) => {
    const newTodo = {
      id: nanoid(),
      name: login,
      number: password,
    };
    setContacts(prev => [...prev, newTodo]);
  };

  return (
    <div>
      <ContactForm
        // formValues={formValues}
        // handleChange={handleChange}
        handleAddTodo={handleAddTodo}
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
