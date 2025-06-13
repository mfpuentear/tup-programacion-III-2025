function App() {
  const [cuenta, setCuenta] = React.useState(0);

  return (
    <>
      <p>Cuenta: {cuenta}</p>
      <button
        onClick={() => {
          // Importante!: cuenta no se modifica luego de llamar a setCuenta
          console.log("incrementar (antes):", cuenta);
          setCuenta(cuenta + 1);
          console.log("incrementar (despues):", cuenta);
        }}
      >
        Incrementar
      </button>
      <button onClick={() => setCuenta((c) => c - 1)}>Decrementar</button>
    </>
  );
}
