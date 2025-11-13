import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../pages/Home';
import HomeLayOut from '../layout/HomeLayOut';

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
        ],
    },
]);
