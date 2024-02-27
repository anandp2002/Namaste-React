import { useEffect, useState } from 'react';

const ProfileFunctional = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Namaste react OP');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>This is from Profile component</h1>
      <h2>name : {props.name}</h2>
      <h3>count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProfileFunctional;
