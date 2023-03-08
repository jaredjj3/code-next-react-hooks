import React, { useState, useEffect } from 'react';

export const Cleanup = () => {
  const [isSecondsAgoVisible, setIsSecondsAgoVisible] = useState(false);

  const onButtonClick = () => {
    setIsSecondsAgoVisible((isSecondsAgoVisible) => !isSecondsAgoVisible);
  };

  // TODO: Create state and an effect to show how many seconds ago the 
  // "shown seconds ago" has been visible.

  return (
    <>
      <h2>Cleanup</h2>

      <div>
        <button onClick={onButtonClick}>
          {isSecondsAgoVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {isSecondsAgoVisible && <div>shown seconds ago: {}</div>}
    </>
  );
};
