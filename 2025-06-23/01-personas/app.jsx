const { useState } = React;

function App() {
  const [personas, setPersonas] = useState([
    { id: 1, apellido: "Sanchez", nombre: "Pepe", edad: 30 },
    { id: 2, apellido: "Lopez", nombre: "Esteban", edad: 27 },
  ]);
  const [maxId, setMaxId] = useState(2);

  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!apellido.trim()) {
      alert("Ingrese apellido");
      return;
    }
    if (!nombre.trim()) {
      alert("Ingrese nombre");
      return;
    }
    if (edad <= 0) {
      alert("La edad debe se positiva");
      return;
    }
    setPersonas([...personas, { id: maxId + 1, apellido, nombre, edad }]);
    setMaxId(maxId + 1);
  };

  return (
    <>
      <h1>Listado de personas</h1>
      <ul>
        {personas.map((persona) => (
          <Persona
            key={persona.id}
            apellido={persona.apellido}
            nombre={persona.nombre}
            edad={persona.edad}
            onBorrar={() => {
              if (
                confirm(
                  `¿Desea quitar a ${persona.apellido}, ${persona.nombre}?`
                )
              ) {
                setPersonas(personas.filter((p) => p.id != persona.id));
              }
            }}
          />
        ))}
      </ul>

      <h2>Cargar persona</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}
