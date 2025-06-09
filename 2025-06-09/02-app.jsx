function Persona(props) {
  return (
    <>
      <h1>{props.nombre}</h1>
      <p>Edad: {props.edad}</p>
      {props.children}
    </>
  );
}

function App() {
  return (
    <>
      <Persona nombre="Pepe" edad={50} />
      <Persona nombre="Maria" edad={45} />
      <Persona nombre="Juan" edad={26}>
        <p>Direccion: aqui</p>
      </Persona>
    </>
  );
}

// Renderizar el componente en el div 'root'
ReactDOM.render(<App />, document.getElementById("root"));
