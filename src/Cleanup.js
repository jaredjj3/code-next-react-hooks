import React, { useState, useEffect } from 'react';

// TODO: Without changing anything, what does this component do?
export const Cleanup = () => {
  const [isSecondsAgoVisible, setIsSecondsAgoVisible] = useState(false);

  const onButtonClick = () => {
    setIsSecondsAgoVisible((isSecondsAgoVisible) => !isSecondsAgoVisible);
  };

  // TODO: Create state and an effect to show how many seconds ago the 
  // "shown seconds ago" has been visible. Does it behave correctly when
  // you show the text, wait a few seconds, then show it again?

  return (
    <>
      <h2>Cleanup</h2>

      <div>
        <button className="btn btn-primary" onClick={onButtonClick}>
          {isSecondsAgoVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {/* TODO: Show how many seconds ago the text was shown. */}
      {isSecondsAgoVisible && <div>shown seconds ago:</div>}
    </>
  );
};
