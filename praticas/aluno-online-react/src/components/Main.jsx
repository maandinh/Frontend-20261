import React from 'react';
import Topbar from './Topbar';




function Main({ titulo, subtitulo, children }) {
    return (
        <main className="flex-1 flex flex-col min-h-screen">  
            <Topbar titulo={titulo} />
           
            <div className="flex-1 p-6 md:p-8 pt-4">








                <h2 className="text-lg text-gray-600 mt-2 text-left">
              {subtitulo}
                </h2>
               
                <div className="max-w-4xl mx-auto space-y-6">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Main;