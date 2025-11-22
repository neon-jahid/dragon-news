import { useState } from 'react';
import { AuthContext } from './AuthContext';

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        user: 'Zahid Hasan',
        email: 'BokaZahid@hasan.com',
    });

    const AuthData = { user, setUser };

    return <AuthContext value={AuthData}>{children}</AuthContext>;
}

export default AuthProvider;
