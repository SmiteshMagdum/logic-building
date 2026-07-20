import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      <p>Current Date: {date.toLocaleDateString()}</p>
      <p>Current Time: {date.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentDateTime;   