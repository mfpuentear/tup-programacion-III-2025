function Saludo(props) {
  // El componente <> es un fragmento de React y sirve para agrupar
  // elementos o componentes. Principalmente se utiliza para devolver
  // varios elementos o componentes.
  return (
    <>
      <h1>¡Hola, {props.nombre}!</h1>
      <p>Edad: {props.edad}</p>
    </>
  );
}

function App() {
  // Las propiedades se pueden pasar como strings o entre {}
  return (
    <>
      <Saludo nombre="Pepe" edad={50} />
      <Saludo nombre="Maria" edad={45} />
      <Saludo nombre="Juan" edad={26} />
    </>
  );
}

// Renderizar el componente en el div 'root'
ReactDOM.render(<App />, document.getElementById("root"));
