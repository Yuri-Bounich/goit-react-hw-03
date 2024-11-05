import Description from './Description/Description';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import Feedback from './Feedback/Feedback';
import '../index.css';
import { useState, useEffect } from 'react';

const App = () => {
  // Зчитування збережених значень з локального сховища при завантаженні сторінки
  const getInitialValues = () => {
    const savedValues = localStorage.getItem('feedback-values');
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  };

  // Ініціалізація стану з локального сховища або початкових значень
  const [values, setValues] = useState(getInitialValues);

  // Збереження стану в локальному сховищі кожного разу, коли він змінюється
  useEffect(() => {
    localStorage.setItem('feedback-values', JSON.stringify(values));
  }, [values]);

  // Функція для оновлення стану за типом фідбеку
  const updateFeedback = feedbackType => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  // Функція для скидання всіх відгуків
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = values.good + values.neutral + values.bad;

  // Обчислення відсотка позитивних відгуків
  const positiveFeedback = totalFeedback
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      {/* Передаємо функції та totalFeedback у компонент Options */}
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {/* Умовний рендеринг на основі totalFeedback */}
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;
