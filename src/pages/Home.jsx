import React from 'react';
import { Navigate } from 'react-router';

function Home() {
    return (
        <div>
            <Navigate to='/category/0' />
        </div>
    );
}

export default Home;
