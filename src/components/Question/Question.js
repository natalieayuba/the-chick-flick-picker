import Button from '../Button';
import styles from './Question.module.css';
import CountrySelect from '../CountrySelect/CountrySelect';
import { cloneElement, useState, useEffect, useRef } from 'react';
import DecadeRange from '../DecadeRange/DecadeRange';
import Bar from '../Bar/Bar';
import List from '../List';
import { tropes, vibes } from '../../config';
import StreamingServices from '../StreamingServices/StreamingServices';

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
    content: <List list={vibes} />,
  },
  {
    question: 'Pick your top 3 favourite chick flick tropes',
    content: <List list={tropes} />,
  },
  {
    question: 'What decade do you want the movie to be in?',
    content: <DecadeRange />,
  },
];

const Question = ({ questionIndex, next, prev }) => {
  const defaultAnswers = {
    country: '',
    services: [],
    vibes: [],
    tropes: [],
    decade: {
      start: 1960,
      end: Math.round(new Date().getFullYear() / 10) * 10,
    },
  };

  const contentRef = useRef(null);
  const [answers, setAnswers] = useState(defaultAnswers);
  const buttonDisabled = Array.isArray(Object.values(answers)[questionIndex])
    ? Object.values(answers)[questionIndex][0] ===
      Object.values(defaultAnswers)[questionIndex][0]
    : Object.values(answers)[questionIndex] ===
      Object.values(defaultAnswers)[questionIndex];

  const updateAnswers = (key, value) =>
    setAnswers({ ...answers, [key]: value });

  const handleScroll = () => {
    if (contentRef.current) {
      const listOverflow = {
        top: contentRef.current.scrollTop >= 20,
        bottom:
          contentRef.current.scrollTop <=
          contentRef.current.scrollHeight -
            contentRef.current.clientHeight -
            10,
      };
      Object.keys(listOverflow).forEach((side) => {
        listOverflow[side]
          ? contentRef.current.classList.add(`fade-${side}`)
          : contentRef.current.classList.remove(`fade-${side}`);
      });
    }
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollHeight > contentRef.current.clientHeight
        ? contentRef.current.classList.add('fade-bottom')
        : contentRef.current.classList.remove('fade-bottom');
    }
  }, [questionIndex]);

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.topnav}>
        <Bar
          offsets={{ start: 0, end: questionIndex / questions.length }}
          id='progress-bar'
        />
        <button className={styles['back-button']} onClick={prev}>
          &lt; Back {questionIndex === 0 && ' to home'}
        </button>
      </div>
      <div className={styles.title}>
        <span>Q{questionIndex + 1}</span>
        <h2>{questions[questionIndex].question}</h2>
      </div>
      <div className={`${styles['content-container']}`}>
        <div
          ref={contentRef}
          className={styles.content}
          onScroll={handleScroll}
        >
          {cloneElement(questions[questionIndex].content, {
            updateAnswers,
            prevAnswer: Object.values(answers)[questionIndex],
            name: Object.keys(answers)[questionIndex],
          })}
        </div>
      </div>
      <Button
        className={styles['next-button']}
        onClick={next}
        disabled={buttonDisabled}
      >
        {questionIndex === questions.length - 1
          ? 'Find my perfect flick!'
          : 'Next'}
        {Array.isArray(Object.values(answers)[questionIndex]) &&
          Object.values(answers)[questionIndex].length > 0 &&
          ` (${Object.values(answers)[questionIndex].length})`}
      </Button>
    </div>
  );
};

export default Question;
