import s from './Options.module.css';

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={() => onFeedback('good')}>
        Good
      </button>
      <button className={s.btn} onClick={() => onFeedback('neutral')}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onFeedback('bad')}>
        Bad
      </button>
      {/* Кнопка Reset з умовним рендерингом на основі totalFeedback */}
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
