import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'


function App () {
  return <div className='flex flex-col md:flex-row'>
   <aside className='hidden md:block bg-gray-300'>
    <header className='flex flex-row'>
      <img src={logo} alt="imagem da logo" />
      <h1>Aluno Online</h1>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </header>
   </aside>
   <main>
    <header>
      <h1>Olá Aluno</h1>
      <img src={avatar} alt="imagem do avatar" />
      </header>
      <h2>Bem-vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Incrição para o projeto de extensão</li>
            <li>Elição para representante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
   </main>
  </div>
}

export default App;