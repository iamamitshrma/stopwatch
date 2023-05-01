import React from 'react'
import { formatTime } from '../helpers/formatTime';

const Stopwatch = ({time}) => {
  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default Stopwatch