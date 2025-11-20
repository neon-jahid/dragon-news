import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/Home/LeftAside';
import RightAside from '../components/Home/RightAside';

function HomeLayOut() {
    return (
        <div>
            <header>
                <Header />
                <section className='my-4'>
                    <LatestNews />
                </section>
                <nav>
                    <Navbar />
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                    <Outlet />
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
}

export default HomeLayOut;
