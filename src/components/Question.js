import ProgressBar from './ProgressBar';
import Button from './Button';
import '../styles/Question.css';

export const questions = [
  {
    question: 'What country are you streaming from?',
    content: <></>,
  },
  {
    question: 'Which of these streaming services do you have?',
    content: <></>,
  },
  {
    question: 'What vibe are you in the mood for?',
    content: <></>,
  },
  {
    question: 'Pick your top 3 favourite chick flick tropes and themes.`',
    content: <></>,
  },
  {
    question: 'What decade do you want the movie to be in?',
    content: <></>,
  },
];

const Question = ({ questionIndex, next, prev }) => (
  <div className='question-container'>
    <div>
      <ProgressBar progress={questionIndex / questions.length} />
      <button className='back-button' onClick={prev}>
        &lt; Back
      </button>
    </div>
    <div className='question'>
      <div className='title'>
        <span>Q{questionIndex + 1}</span>
        <h2>{questions[questionIndex].question}</h2>
      </div>
      <div className='content'>{questions[questionIndex].content}</div>
      <Button className='next-button' onClick={next}>
        {questionIndex === questions.length - 1
          ? 'Find my perfect flick!'
          : 'Next'}
      </Button>
    </div>
  </div>
);

export default Question;
