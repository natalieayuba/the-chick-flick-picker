import styles from './StreamingServices.module.css';
import List from '../List';
import { services } from '../../config';

const StreamingServices = ({ prevAnswer, updateAnswers }) => (
  <div className={styles['card-grid']}>
    <List
      list={services}
      name='services'
      prevAnswer={prevAnswer}
      updateAnswers={updateAnswers}
    />
  </div>
);

export default StreamingServices;
