import React from 'react';
import { useParams } from 'react-router-dom';

const Quiz: React.FC = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Quiz;
