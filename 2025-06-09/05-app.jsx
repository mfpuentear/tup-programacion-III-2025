function TarjetaUsuario(props) {
  return (
    <div className="tarjeta-usuario">
      <h2 className="nombre">{props.nombre}</h2>
      <p className="profesion">{props.profesion}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Elena Rodriguez"
        profesion="Ingeniera de Software"
      />
      <TarjetaUsuario nombre="Miguel Campos" profesion="Diseñador UX/UI" />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
