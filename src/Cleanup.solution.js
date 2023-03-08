import React, { useState, useEffect } from 'react';

export const Cleanup = () => {
  const [isSecondsAgoVisible, setIsSecondsAgoVisible] = useState(false);

  const onButtonClick = () => {
    setIsSecondsAgoVisible((isSecondsAgoVisible) => !isSecondsAgoVisible);
  };

  // TODO: Create state and an effect to show how many seconds ago the
  // "shown seconds ago" has been visible.
  const [secondsAgo, setSecondsAgo] = useState(0);
  useEffect(() => {
    // I like the return early if the conditions aren't met because it's
    // easier to read compared to indented code.
    if (!isSecondsAgoVisible) {
      return;
    }
    const startMs = Date.now();
    const handle = setInterval(() => {
      const endMs = Date.now();
      const ms = endMs - startMs;
      const sec = Math.round(ms / 1000);
      setSecondsAgo(sec);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, [isSecondsAgoVisible]);

  return (
    <>
      <h2>Cleanup</h2>

      <div>
        <button onClick={onButtonClick}>
          {isSecondsAgoVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {isSecondsAgoVisible && <div>shown seconds ago: {secondsAgo}</div>}
    </>
  );
};
