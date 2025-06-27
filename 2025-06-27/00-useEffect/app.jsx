const { useState, useEffect } = React;

function App() {
  const [contador, setContador] = useState(0);

  // Este efecto se ejecutará cada vez que 'contador' cambie.
  useEffect(() => {
    // Esto es un efecto secundario: interactúa con el DOM fuera de React.
    document.title = `Has hecho clic ${contador} veces`;
    console.log("Efecto ejecutado: El título ha cambiado.");
  }, [contador]); // El efecto depende de la variable 'contador'.

  return (
    <div>
      <p>Cuenta: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
