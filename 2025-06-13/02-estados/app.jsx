function App() {
  const [cuenta, setCuenta] = React.useState(0);

  return (
    <>
      <p>Cuenta: {cuenta}</p>
      <button
        onClick={() => {
          console.log("incrementar:", cuenta);
          setCuenta(cuenta + 1);
        }}
      >
        Incrementar
      </button>
    </>
  );
}
