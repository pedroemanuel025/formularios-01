import "./CampoTexto.css";

function CampoTexto(props) {
  return (
    <div className="campo">
      <label htmlFor={props.name}>{props.label}</label>

      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default CampoTexto;

