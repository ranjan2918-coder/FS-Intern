import React from 'react';
import Electronics from './Electronics';

function Flipkart(data) {
  return (
    <div>
      <h1>Welcome to Flipkart</h1>
      <Electronics mobile={data.mobile} />
    </div>
  );
}

export default Flipkart;