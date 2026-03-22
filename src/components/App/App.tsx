import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
// Використовуємо 'import type', щоб Vite точно знав, що це не JS-об'єкти
import type { Votes, VoteType } from '../../types/votes';
import css from './App.module.css';

const App: React.FC = () => {
  // Крок 3: Стан додатка
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення голосів
  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // Функція для скидання голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Крок 6: Обчислення статистики
  const totalVotes = votes.good + votes.neutral + votes.bad;
  
  const positiveRate = totalVotes 
    ? Math.round((votes.good / totalVotes) * 100) 
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      
      {/* Передаємо пропси в VoteOptions */}
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} 
      />

      {/* Крок 7: Умовний рендеринг статистики або повідомлення */}
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;