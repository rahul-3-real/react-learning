const Input = ({ id, label, type, placeholder, value, onChange }) => {
  const commonProps = {
    id,
    placeholder,
    value,
    onChange,
    className: "border rounded p-2 mt-1",
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === "textarea" && <textarea {...commonProps} rows="4" />}
      {type === "text" && <input {...commonProps} type="text" />}
      {type === "date" && <input {...commonProps} type="date" />}
      {type === "checkbox" && <input {...commonProps} type="checkbox" />}
    </div>
  );
};

export default Input;
