// Componente con evento manejado por funcion comun.
// Sugerido para eventos de muchas lineas
function BotonInteractivo() {
  const mensaje = "En funcion";

  function handleClick() {
    alert("Click");
    console.log("click en consola:", mensaje);
  }

  return <button onClick={handleClick}>Hazme click (comun)</button>;
}

// Componente con evento manejado por funcion flecha.
// Sugerido para eventos de pocas lineas
function BotonInteractivoFlecha() {
  const mensaje = "Hola";

  return (
    <button onClick={() => console.log("Click en funcion flecha:", mensaje)}>
      Hazme click (flecha)
    </button>
  );
}

// Componente con evento que atiende el componente padre
function BotonInteractivoAlPadre(props) {
  function handleEvento() {
    props.onEvento("En hijo");
  }

  return <button onClick={handleEvento}>Hazme click (al padre)</button>;
}

function App() {
  function onEventoPadre(mensaje) {
    console.log("En padre", mensaje);
  }

  return (
    <>
      <BotonInteractivo />
      <BotonInteractivoFlecha />
      <BotonInteractivoAlPadre onEvento={onEventoPadre} />
    </>
  );
}
