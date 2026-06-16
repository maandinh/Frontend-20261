import Main from "../components/Main";
import RequerimentoForm from "../forms/RequerimentoForm";


function NovoRequerimento() {
  return (
    <Main
      titulo="Novo Requerimento"
      subtitulo="Preencha os dados da solicitação"
    >
      <RequerimentoForm />
    </Main>
  );
}


export default NovoRequerimento;
