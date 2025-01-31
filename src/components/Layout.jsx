import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <div className="flex min-h-screen">
                <aside className="w-64 bg-gray-800">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-4 bg-gray-100">
                    <Outlet />
                </main>

          
            </div>
            <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <Footer />
                </footer>
        </>
    );
}
