function Livro(props) {
  return (
    <div>
      <p>
        {props.livro.titulo} — {props.livro.autor} —{" "}
        {props.livro.ano} — {props.livro.genero}
      </p>
    </div>
  );
}

export default Livro;
