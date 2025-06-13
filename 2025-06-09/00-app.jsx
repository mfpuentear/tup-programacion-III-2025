function Texto() {
  const estado = false;
  return <p>Estado: {estado ? "Activo" : "Inactivo"}</p>;
}

function Saludo() {
  return <h1>¡Hola, Mundo desde un Componente Funcional!</h1>;
}

function App() {
  return (
    <div>
      <Saludo />
      <Texto />
    </div>
  );
}

// Renderizar el componente en el div 'root'
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
