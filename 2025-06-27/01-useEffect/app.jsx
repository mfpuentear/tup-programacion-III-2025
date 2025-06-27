const { useState, useEffect } = React;

function App() {
  // Estado para almacenar los usuarios
  const [usuarios, setUsuarios] = useState([]);
  // Estado para saber si la consulta está en curso
  const [cargando, setCargando] = useState(true);
  // Estado para manejar posibles errores
  const [error, setError] = useState(null);

  // Usamos useEffect para realizar la consulta a la API una sola vez.
  // Definimos una función asíncrona dentro o fuera del efecto.
  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!respuesta.ok) {
        throw new Error("La respuesta de la red no fue satisfactoria.");
      }
      const data = await respuesta.json();
      setUsuarios(data); // Guardamos los datos en el estado
    } catch (error) {
      setError(error.message); // Guardamos el mensaje de error
    } finally {
      setCargando(false); // La carga ha terminado (con éxito o error)
    }
  };

  useEffect(() => {
    obtenerUsuarios(); // Llamamos a la función
  }, []); // El array vacío asegura que esto se ejecute solo una vez.

  // Renderizado condicional basado en los estados
  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} ({usuario.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
