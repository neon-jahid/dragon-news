import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router';
import { router } from './Router/Router.jsx';
import AuthProvider from './provider/Auth/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>,
);
