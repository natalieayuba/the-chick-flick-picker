import Button from './Button';
import '../styles/Question.css';
import CountrySelect from './CountrySelect';
import { useRef, useState } from 'react';
import StreamingServices from './StreamingServices';
import Vibes from './Vibes';
import Tropes from './Tropes';
import DecadeRange from './DecadeRange';
import Bar from './Bar';

export const questions = [
  {
    question: 'What country are you streaming from?',
    content: <CountrySelect />,
  },
  {
    question: 'Which of these streaming services do you have?',
    content: <StreamingServices />,
  },
  {
    question: 'What vibe are you in the mood for?',
    content: <Vibes />,
  },
  {
    question: 'Pick your top 3 favourite chick flick tropes',
    content: <Tropes />,
  },
  {
    question: 'What decade do you want the movie to be in?',
    content: <DecadeRange />,
  },
];

const Question = ({ questionIndex, next, prev }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const contentRef = useRef(null);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    if (el.scrollTop <= el.scrollHeight - el.clientHeight - 10) {
      el.classList.add('fade-bottom');
    } else {
      el.classList.remove('fade-bottom');
    }
    if (el.scrollTop >= 20) {
      el.classList.add('fade-top');
    } else {
      el.classList.remove('fade-top');
    }
  };

  return (
    <div className='container question-container'>
      <div className='topnav'>
        <Bar
          offsets={{ start: 0, end: questionIndex / questions.length }}
          gradientId='progress-bar'
        />
        <button className='back-button' onClick={prev}>
          &lt; Back
        </button>
      </div>
      <div className='title'>
        <span>Q{questionIndex + 1}</span>
        <h2>{questions[questionIndex].question}</h2>
      </div>
      <div className='content-container'>
        <div ref={contentRef} className='content' onScroll={handleScroll}>
          {questions[questionIndex].content}
        </div>
      </div>

      <Button
        className='next-button'
        onClick={next}
        // disabled={buttonDisabled}
      >
        {questionIndex === questions.length - 1
          ? 'Find my perfect flick!'
          : 'Next'}
      </Button>
    </div>
  );
};

export default Question;
