import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../pages/Home';
import HomeLayOut from '../layout/HomeLayOut';
import CategoryNews from '../pages/CategoryNews';
import AuthLayOut from '../layout/AuthLayOut';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayOut,
        errorElement: <div>Hi error</div>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            },
        ],
    },
    {
        path: '/auth',
        Component: AuthLayOut,
        children: [
            {
                index: true,
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register,
            },
        ],
    },
]);
