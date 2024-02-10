import { forwardRef } from "react";

const Input = forwardRef(({ label, type, ...props }, ref) => {
  const inputElement =
    type === "textarea" ? (
      <textarea {...props} ref={ref} />
    ) : (
      <input type={type} ref={ref} {...props} />
    );

  return (
    <div>
      <label>{label}</label>
      {inputElement}
    </div>
  );
});

export default Input;
