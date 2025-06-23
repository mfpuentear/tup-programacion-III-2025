function Item(props) {
  return (
    <li>
      {props.numero} ({props.numero % 2 === 0 ? "Par" : "Impar"})
    </li>
  );
}
