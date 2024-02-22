import { useEffect } from "react";
import useQuiz from "../hooks/useQuiz";

const Timer = () => {
  const { dispatch, remainedSecounds } = useQuiz();
  const minutes = Math.floor(remainedSecounds / 60);
  const secounds = remainedSecounds % 60;
  console.log(minutes);
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes > 9 ? `${minutes}` : `0${minutes}`} :{" "}
      {secounds > 9 ? `${secounds}` : `0${secounds}`}
    </div>
  );
};

export default Timer;
