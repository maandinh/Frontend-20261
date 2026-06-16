import React from 'react';


function Card({ titulo, itens }) {
    return (
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-900 text-lg text-left">
                {titulo}
            </div>
           
            <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                    {itens.map((item, index) => (
                        <li
                            key={index}
                            className="text-base leading-relaxed text-left"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}


export default Card;
