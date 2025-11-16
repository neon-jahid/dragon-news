import React from 'react';

function Button({ children }) {
    return <button className='border px-4 py-2 rounded bg-amber-200'>{children}</button>;
}

export default Button;
