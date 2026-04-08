function Tabela(props) {
    return (
        <>
            {props.titulo && <h3>{props.titulo}</h3>}
            <table>
                <thead>
                    <th>
                        <td>Coluna 1</td>
                        <td>Coluna 2</td>
                        <td>Coluna 3</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Valor 1</td>
                        <td>Valor 2</td>
                        <td>Valor 3</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


export default Tabela;
