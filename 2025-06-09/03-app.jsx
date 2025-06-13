function Item(props) {
  return (
    <li>
      {props.numero} - Es {props.numero % 2 === 0 ? "Par" : "Impar"}
    </li>
  );
}

function Listado(props) {
  return (
    <ul>
      {props.numeros.map((n, i) => (
        <Item key={i} numero={n} />
      ))}
    </ul>
  );
}

function App() {
  const numeros = [3, 6, 6, 7, 5, 4];
  return (
    <>
      <h1>Numeros</h1>
      <Listado numeros={numeros} />
    </>
  );
}

// Renderizar el componente en el div 'root'
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
