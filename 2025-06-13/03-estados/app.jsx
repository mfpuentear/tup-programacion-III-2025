function App() {
  // Declaramos la variable de estado 'estaEncendido', inicializada en 'false'
  const [estaEncendido, setEstaEncendido] = React.useState(false);

  // El estilo cambiará dependiendo del estado
  const estiloCaja = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    backgroundColor: estaEncendido ? "yellow" : "grey", // Estilo condicional
    color: estaEncendido ? "black" : "white",
  };

  // Función para cambiar el estado al contrario del valor actual
  const cambiarEstado = () => {
    setEstaEncendido(!estaEncendido);
  };

  return (
    <div>
      <div style={estiloCaja}>{estaEncendido ? "ON" : "OFF"}</div>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
}
