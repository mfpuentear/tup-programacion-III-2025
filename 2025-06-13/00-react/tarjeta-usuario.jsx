function TarjetaUsuario(props) {
  return (
    <div className="tarjeta-usuario">
      <h2 className="nombre">{props.nombre}</h2>
      <p className="profesion">{props.profesion}</p>
    </div>
  );
}
