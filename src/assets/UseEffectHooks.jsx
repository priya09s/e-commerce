import React, { useState, useEffect } from 'react';

function useEffectHook() {
    const [name, setName] = useState('Your First Name');
    const [lastname, setLastname] = useState('Your Last Name');

    useEffect(() => {

        document.title = `${name} ${lastname}`;


        return () => {
            document.title = 'React App';
        };
    }, [name, lastname]);
    return (
        <div>
            <p>{`First Name: ${name}`}</p>
            <p>{`Last Name: ${lastname}`}</p>
        </div>
    );
}

export default useEffectHook;
