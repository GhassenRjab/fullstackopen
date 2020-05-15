import React from 'react';
import Part from './Part';

const Content = ({content}) => (
  <>
    <Part part={content[0].part} exercises={content[0].exercises} />
    <Part part={content[1].part} exercises={content[1].exercises} />
    <Part part={content[2].part} exercises={content[2].exercises} />
  </>
);

export default Content;
