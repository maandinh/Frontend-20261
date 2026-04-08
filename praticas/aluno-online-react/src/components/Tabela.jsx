function Tabela({ colunas, dados }) {
  return (
    <table>
      <thead>
        <tr>
          {colunas.map((coluna, index) => (
            <th key={index}>{coluna}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((valor, i) => (
              <td key={i}>{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;