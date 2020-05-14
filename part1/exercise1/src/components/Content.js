import React from 'react';

const Content = ({content}) => (
  <>
    {content.map(({part, exercises}) => (
      <p>{part} {exercises}</p>
    ))}
  </>
);

export default Content;