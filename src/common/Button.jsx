import React from 'react';

function Button({ children, className }) {
    return <button className={`border px-4 py-2 rounded bg-neutral-300 cursor-pointer ${className}`}>{children}</button>;
}

export default Button;
