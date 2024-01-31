const Input = ({ type, label, id, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type == "textarea" && (
        <textarea className="form-group" id={id} {...props}></textarea>
      )}
      {type != "textarea" && (
        <input className="form-group" type={type} id={id} {...props} />
      )}
    </div>
  );
};

export default Input;
