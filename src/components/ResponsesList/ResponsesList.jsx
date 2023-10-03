import React from 'react';
import ResponseCard from './ResponseCard/ResponseCard';

const ResponsesList = ({responses}) => {
  return (
    <div>
      <div>
      {
        responses.map((data) => (
          <ResponseCard data={data}/>
        ))
      }
    </div>
    </div>
  )
}

export default ResponsesList;