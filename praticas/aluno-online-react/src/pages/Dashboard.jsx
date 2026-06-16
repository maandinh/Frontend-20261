import React from 'react';
import Card from '../components/Card.jsx';
import Main from '../components/Main.jsx';

function Dashboard() {
    const avisos = [
        "Inscrição para o projeto de extensão",
        "Eleição para representante de turma"
    ];


    const calendario = [
        "23/02 - Início do período letivo 2026-1",
        "25/04 - Prazo final para aplicação da P1",
        "23/06 - Prazo final para aplicação da P2",
        "04/07 - Fim do período letivo 2026-1"
    ];


    const disciplinas = [
        "BI e Data Warehousing",
        "Construção de FrontEnd"      
    ];

    return (
        <div className="flex min-h-screen">
           
            <Main className="flex-1 bg-white p-6"
                titulo="Olá, Aluno!"
                subtitulo="Bem-vindo ao portal do aluno"
            >
                <Card titulo="Mural de Avisos" itens={avisos} />
                <Card titulo="Calendário Acadêmico" itens={calendario} />
                <Card titulo="Minhas Disciplinas" itens={disciplinas} />
            </Main>
        </div>
    );
}

export default Dashboard;