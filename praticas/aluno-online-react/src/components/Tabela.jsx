function Tabela({ titulo, colunas = [], dados = [] }) {
  return (
    <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden bg-white">




      {titulo && (
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {titulo}
          </h3>
        </div>
      )}




      <div className="overflow-x-auto">
        <table className="w-full table-auto text-xs text-gray-700">




          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              {colunas.map((coluna, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 font-semibold text-gray-700
                    ${index === 0
                        ? "text-left w-[48%]"
                        : "text-center w-[26%]"
                       }
                  `}
                >
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>




          <tbody className="divide-y divide-gray-100">
            {dados.map((linha, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {linha.map((item, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3
                      ${j === 0
                          ? "text-left font-medium text-gray-800 break-words"
                          : "text-center text-gray-700 font-medium"
                       }
                    `}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabela;