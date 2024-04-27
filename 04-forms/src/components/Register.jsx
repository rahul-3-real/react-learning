const Register = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const acquisitionChannel = fd.getAll("acquisition");
    data.acquisition = acquisitionChannel;
    console.log(data);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h5>Register</h5>
      <hr />
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          className="form-control"
          name="confirm-password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          className="form-control"
          name="first-name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          className="form-control"
          name="last-name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">What best describes you?</label>
        <select name="role" id="role" className="form-control">
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>How did you find us?</label>
        <div className="form-check-group">
          <div className="form-check">
            <input
              type="checkbox"
              name="acquisition"
              id="google"
              value="Google"
            />
            <label htmlFor="google">Google</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="acquisition"
              id="friend"
              value="Friend"
            />
            <label htmlFor="friend">Refered by friend</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="acquisition"
              id="other"
              value="Other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
      <div className="form-group terms-group">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          value="Terms & Conditions"
        />
        <label htmlFor="terms">Agree to the Terms & Conditions</label>
      </div>
      <div className="btn-group">
        <button type="submit" className="button">
          Register
        </button>
        <button type="reset" className="button-alt">
          Reset
        </button>
      </div>
    </form>
  );
};

export default Register;
