import "../App.css";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistic from "./Statistic";
import React, { useState } from "react";

function App() {
  const [feedback, setFeedBack] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    console.log(`Feedback type: ${type}`);
    console.log(feedback);
    setFeedBack((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  const total = feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedback = () => {
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };
  const positiveFeedback = countPositiveFeedback();

  return (
    <div className="container">
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={handleFeedback}
      />
      <h2>Statistic</h2>
      {total > 0 ? (
        <Statistic
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default App;
