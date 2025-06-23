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
          <Item key={i} numero={n} />
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
      <p>
        Promedio:{" "}
        {(numeros.reduce((acc, n) => acc + n, 0) / numeros.length).toFixed(2)}
      </p>
    </>
  );
}
