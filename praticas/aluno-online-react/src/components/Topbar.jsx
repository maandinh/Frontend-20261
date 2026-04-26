import React from 'react';
import user from '../assets/avatar.svg';

function Topbar({ titulo }) {
    return (
        <header className="px-6 md:px-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900">
                    {titulo}
                </h1>
                
                <div className="flex-shrink-0">
                    <img 
                        src={user} 
                        alt="Avatar do aluno" 
                        className="w-14 h-14 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

export default Topbar;