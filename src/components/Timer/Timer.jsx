import { useEffect, useState } from "react";
import "./Timer.scss";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Создаем дату один раз
  const [targetDate] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="timer">
      <div className="timer__time">
        <div>{timeLeft.days}</div> :<div>{timeLeft.hours}</div> :
        <div>{timeLeft.minutes}</div> :<div>{timeLeft.seconds}</div>
      </div>

      <div className="timer__text">
        <div className="timer__day">Дни</div>
        <div className="timer__hour">Часы</div>
        <div className="timer__min">Мин</div>
        <div className="timer__sek">Сек</div>
      </div>
    </div>
  );
}

export default Timer;
