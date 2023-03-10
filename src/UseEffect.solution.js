import React, { useState, useEffect } from 'react';

const MIN_CHARS = 3;
const MAX_CHARS = 16;

export const UseEffect = () => {
  const [username, setUsername] = useState('');
  const [statusEmoji, setStatusEmoji] = useState('');

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  // TODO: Create a side effect that updates statusEmoji based on the
  // username's length with respect to MIN_CHARS and MAX_CHARS.
  useEffect(() => {
    if (MIN_CHARS <= username.length && username.length <= MAX_CHARS) {
      setStatusEmoji('✅');
    } else if (username.length === 0) {
      setStatusEmoji('');
    } else {
      setStatusEmoji('❌');
    }
  }, [username]);

  return (
    <>
      <h2>UseEffect</h2>

      <label for="username">username</label>
      <div>
        <input
          id="username"
          className="form-control"
          onChange={onChange}
          value={username}
        />
        <span>{statusEmoji}</span>
      </div>

      {/* TODO: Show how many characters the username has. */}
      <small>char count: {username.length}</small>
    </>
  );
};
