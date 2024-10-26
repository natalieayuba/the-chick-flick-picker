import styles from './StreamingServices.module.css';
import List from '../List';
import { services } from '../../config';

const StreamingServices = ({ prevAnswer, updateAnswers, answerKey }) => (
  <div className={styles['card-grid']}>
    <List
      list={services}
      answerKey={answerKey}
      prevAnswer={prevAnswer}
      updateAnswers={updateAnswers}
    />
  </div>
);

export default StreamingServices;
