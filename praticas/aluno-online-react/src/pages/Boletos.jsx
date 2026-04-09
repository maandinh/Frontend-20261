import "./Boletos.css"

function Boletos() {

    const boletos = [
  { data: "19/01/2026", valor: "500,00", status: "Pago" },
  { data: "19/02/2026", valor: "500,00", status: "Em atraso" },
  { data: "19/03/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/04/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/05/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/06/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/07/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/08/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/09/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/10/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/11/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/12/2026", valor: "500,00", status: "A Pagar" },
  { data: "19/01/2027", valor: "500,00", status: "A Pagar" },
  { data: "19/02/2027", valor: "500,00", status: "A Pagar" },
];

    return (
     <div className="boletos">
      
      <header className="subtitulo">
        <h2>Histórico de Pagamentos</h2>
      </header>

      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Vencimento</th>
              <th>Valor R$</th>
              <th>Situação</th>
            </tr>
          </thead>

          <tbody>
            {boletos.map((boleto, index) => (
              <tr key={index}>
                <td>{boleto.data}</td>
                <td>{boleto.valor}</td>
                <td>{boleto.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Boletos;