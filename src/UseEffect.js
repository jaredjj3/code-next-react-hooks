import React, { useState, useEffect } from 'react';

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  // TODO: Wire up delta to be synced with the <input> element.

  // TODO: Create an effect that increases the count by delta every 3000 milliseconds.

  return (
    <>
      <h2>UseEffect</h2>
      <div>count: {count}</div>

      <br />

      <label for="delta">delta</label>
      <div>
        <input
          id="delta"
          type="number"
          className="form-control"
        />
      </div>
    </>
  );
};
