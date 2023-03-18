import React, { useState, useEffect } from 'react';

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  useEffect(() => {
    const handle = setInterval(() => {
      setCount((count) => count + delta);
    }, 3000);
    return () => clearInterval(handle);
  }, [delta]);

  const onDeltaChange = (e) => {
    setDelta(parseInt(e.target.value));
  }

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
          value={delta}
          onChange={onDeltaChange}
        />
      </div>
    </>
  );
};
