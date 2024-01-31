import { forwardRef } from "react";

const Input = forwardRef(({ type, label, id, ...props }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" && (
        <textarea
          className="form-control"
          id={id}
          ref={ref}
          {...props}
        ></textarea>
      )}
      {type !== "textarea" && (
        <input
          className="form-control"
          type={type}
          id={id}
          ref={ref}
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
