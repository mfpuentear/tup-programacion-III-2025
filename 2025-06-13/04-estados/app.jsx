const { useState } = React;

function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <>
      <p>Base:</p>
      <input
        type="number"
        value={base}
        onChange={(e) => setBase(Number(e.target.value))}
      />
      <p>Altura:</p>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => alert(`Perimetro=${base * 2 + altura * 2}`)}>
        Perímetro
      </button>
      <button onClick={() => alert(`Superficie=${base * altura}`)}>
        Superficie
      </button>
    </>
  );
}
