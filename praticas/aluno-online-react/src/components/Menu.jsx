import React from 'react';

function Menu() {
    const itens = [
        "Dashboard",
        "Notas",
        "Faltas",
        "Boletos",
        "Requerimentos",
        "Sair"
    ];

    return (
        <nav className="flex-1 px-6 p-6">
            <ul className="space-y-5">
                {itens.map((item, index) => (
                    <li 
                        key={index}
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        <span className="text-gray-400 text-xl leading-none mt-0.5">•</span>
                        <span className="text-base font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;