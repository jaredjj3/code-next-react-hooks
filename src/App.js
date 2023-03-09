import React from "react";
import { UseEffect } from './UseEffect';
import { Cleanup } from './Cleanup';
import { CustomHooks } from './CustomHooks';

export default function App() {
  return (
    <div className="container">
      <h1>code-next-react-hooks</h1>

      <hr />

      <UseEffect />

      <br />

      <Cleanup />

      <br />

      <CustomHooks />
    </div>
  );
}
