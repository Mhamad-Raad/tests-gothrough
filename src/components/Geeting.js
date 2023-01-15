import React, { useState } from 'react';

export default function Geeting() {
  const [available, setAvailable] = useState(false)

  const reverseAvailable = () => {
    setAvailable(!available)
  }

  return (
    <>
      <h1>Hello World</h1>
      {!available && <p>it is good to see you</p>}
      {available && <p>Changed</p>}
      <button onClick={reverseAvailable}>Reverse</button>
    </>
  );
}
