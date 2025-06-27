const { useState } = React;

function App() {
  const [numeros, setNumeros] = useState([3, 6, 5, 8, 7, 8, 4]);
  const [nuevoNumero, setNuevoNumero] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevoNumero <= 0) {
      alert("Ingrese numero positivo");
      return;
    }

    // A setNumeros hay que pasarle un nuevo arreglo con el item extra

    // con concat:
    //setNumeros(numeros.concat(nuevoNumero));

    // con ... (spread syntax) (expandir, extender, esparcir, deconstruir)
    setNumeros([...numeros, nuevoNumero]);
  };

  return (
    <>
      <h1>Listado de numeros</h1>
      <ul>
        {numeros.map((n, i) => (
          <Item
            key={i}
            numero={n}
            onBorrar={() => {
              if (confirm(`¿Desea quitar el numero ${n} en posición ${i}?`)) {
                // Llamar a setNumeros con un nuevo arreglo sin el numero en indice i
                setNumeros(numeros.filter((n, idx) => idx != i));

                // con toSpliced()
                //setNumeros(numeros.toSpliced(i, 1));
              }
            }}
          />
        ))}
      </ul>

      <h2>Cargar numero</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nuevoNumero">Nuevo número:</label>
        <input
          type="number"
          id="nuevoNumero"
          value={nuevoNumero}
          onChange={(e) => setNuevoNumero(Number(e.target.value))}
        />
        <button type="submit">Agregar</button>
      </form>

      <h2>Calculos</h2>
      {numeros.length === 0 ? (
        <p>Arreglo sin numeros</p>
      ) : (
        <>
          <p>
            Promedio:{" "}
            {(numeros.reduce((acc, n) => acc + n, 0) / numeros.length).toFixed(
              2
            )}
          </p>
          <p>
            Mayor:{" "}
            {numeros.reduce((mayor, numero) =>
              numero > mayor ? numero : mayor
            )}
          </p>
          <p>
            Menor:{" "}
            {numeros.reduce((menor, numero) =>
              numero < menor ? numero : menor
            )}
          </p>
        </>
      )}
    </>
  );
}
