import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

function HomeLayOut() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet />
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
}

export default HomeLayOut;
