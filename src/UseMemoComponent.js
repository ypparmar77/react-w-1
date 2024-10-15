import React, { useState, useMemo } from 'react';

export default function UseMemoComponent() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(10);

    // Memoize the result of the expensive calculation
    const expensiveResult = useMemo(() => {
        console.log('Calculating...');
        return value * 2; 
    }, [value]);

    return (
        <div>
            <h1>Expensive Calculation Component</h1>
            <p>Count: {count}</p>
            <p>Expensive Calculation Result: {expensiveResult}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setValue(value + 1)}>Change Value</button>
        </div>
    );
}
