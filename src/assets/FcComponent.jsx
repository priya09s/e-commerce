import React, { useState } from 'react';

function FcComponent() {
    const [count, setCount] = useState(3);

    function increment() {
        setCount((count) => count + 1);
    }

    function decrement() {
        setCount((count) => count - 1);
    }

    return (
        <div>
            <h1>Increment and Decrement Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment} className='bg-green-700'>Increment</button>
            <button onClick={decrement} className='bg-red-700'>Decrement</button>
        </div>
    );
}

export default FcComponent;
