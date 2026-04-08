import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";


function Boletos() {
    return (
        <>
            <Sidebar />
            <Main titulo="Meus Boletos">
             <Tabela />
            </Main>
        </>
    );
}


export default Boletos;
