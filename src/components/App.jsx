import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistic from "./Statistic";
import React, { useState } from "react";

function App() {
  // const [feedback, setFeedBack] = useState({ good: 0, neutral: 0, bad: 0 });
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleFeedback = (type) => {
    
    switch (type) {
      case "good":
          setGood((state => state + 1))        
        break;
        case "neutral":
          setNeutral((state => state + 1))        
        break; 
        case "bad":
        setBad((state => state + 1))        
      break;
      default:
        break;
    }
    // setFeedBack((prevState) => ({
    //   ...prevState,
    //   [type]: prevState[type] + 1,
    // }));
  };
  const total = good + neutral + bad;

  const countPositiveFeedback = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
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
          good={good}
          neutral={neutral}
          bad={bad}
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
