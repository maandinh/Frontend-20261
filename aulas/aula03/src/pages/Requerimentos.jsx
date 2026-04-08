import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";


function Requerimentos() {
    return (
        <>
            <Sidebar />
            <Main titulo="Meus Requerimentos">
                <Tabela />
            </Main>
        </>
    );
}


export default Requerimentos;
