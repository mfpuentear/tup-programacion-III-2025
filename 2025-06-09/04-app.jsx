function TarjetaUsuario(props) {
  // 1. Definimos un objeto de estilos
  const tarjetaStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const nombreStyle = {
    color: "#333",
    fontSize: "24px",
  };

  const profesionStyle = {
    color: props.color,
    fontSize: "18px",
    fontStyle: "italic",
  };

  // 2. Aplicamos el objeto al atributo `style`
  return (
    <div style={tarjetaStyle}>
      <h2 style={nombreStyle}>{props.nombre}</h2>
      <p style={profesionStyle}>{props.profesion}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Elena Rodriguez"
        profesion="Ingeniera de Software"
        color="red"
      />
      <TarjetaUsuario
        nombre="Miguel Campos"
        profesion="Diseñador UX/UI"
        color="blue"
      />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
