import React from 'react';
import logo from '../assets/learn.svg';
import Menu from './Menu';


function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r border-gray-200 min-h-screen">
           
            <header className="flex items-center gap-3 px-6 p-6 border-gray-200">
                <img
                    src={logo}
                    alt="Chapeu"
                    className="w-10 h-10"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Aluno Online</h2>
                </div>
            </header>
            <Menu />
        </aside>
    );
}


export default Sidebar;
