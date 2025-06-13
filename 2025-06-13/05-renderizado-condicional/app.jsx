const { useState } = React;

function App() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <>
      {/* Un comentario */}
      <p>Cuenta:</p>
      <input
        type="number"
        value={cuenta}
        onChange={(e) => setCuenta(Number(e.target.value))}
      />
      <br />
      {cuenta % 2 === 0 ? <p>La cuenta es par</p> : <p>La cuenta es impar</p>}
      {cuenta === 0 && <p>La cuenta es nula</p>}
      {cuenta > 0 && <p>La cuenta es positiva</p>}
      {cuenta < 0 && <p>La cuenta es negativa</p>}
    </>
  );
}
