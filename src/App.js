import { useState } from 'react';
import Start from './components/Start/Start';
import Question, { questions } from './components/Question/Question';
import End from './components/End/End';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(-1);

  const next = () => setQuestionIndex(questionIndex + 1);
  const prev = () => setQuestionIndex(questionIndex - 1);
  const reset = () => setQuestionIndex(-1);

  return questionIndex < 0 ? (
    <Start next={next} />
  ) : questionIndex < questions.length ? (
    <Question
      questionIndex={questionIndex}
      answers={answers}
      next={next}
      prev={prev}
    />
  ) : (
    <End reset={reset} />
  );
};

export default App;
