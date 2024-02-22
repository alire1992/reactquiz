import useQuiz from "../hooks/useQuiz";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage > 0) emoji = "🤔";
  if (percentage >= 50) emoji = "😊";
  if (percentage >= 80) emoji = "🎉";
  if (percentage >= 80) emoji = "🎆";
  if (percentage === 100) emoji = "🥇";
  if (percentage === 0) emoji = "🙊";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.floor(percentage * 10) / 10}%)
      </p>
      <p className="highscore">
        (Highscore : <strong>{highscore}</strong> points)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiez
      </button>
    </>
  );
};

export default FinishScreen;
