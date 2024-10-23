import { useState } from 'react';
import CheckboxListItem from './CheckboxListItem';

const StreamingServices = () => {
  const streamingServices = ['Netflix', 'Disney Plus'];
  const [selectedStreamingServices, setSelectedStreamingServices] = useState(
    []
  );

  const handleChange = (e) => {
    setSelectedStreamingServices(
      e.target.checked
        ? [...selectedStreamingServices, e.target.value]
        : selectedStreamingServices.filter(
            (service) => service !== e.target.value
          )
    );
  };

  return (
    <div className='card-grid'>
      {streamingServices.map((service) => (
        <CheckboxListItem
          value={service}
          key={service}
          handleChange={handleChange}
          className='checkbox-card'
          image='https://fellowstudio.com/wp-content/uploads/2023/08/Netflix-Logo-2006-500x333-1.png'
        />
      ))}
    </div>
  );
};

export default StreamingServices;
