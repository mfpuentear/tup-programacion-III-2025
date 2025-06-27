function Persona(props) {
  return (
    <li>
      {props.apellido}, {props.nombre} ({props.edad} años){" "}
      <button onClick={props.onBorrar}>x</button>
    </li>
  );
}
