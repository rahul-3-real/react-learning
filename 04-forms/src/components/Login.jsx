const Login = () => {
  return (
    <form>
      <h5>Login</h5>
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
      <div className="btn-group">
        <button type="submit" className="button">
          Login
        </button>
        <button type="reset" className="button-alt">
          Reset
        </button>
      </div>
    </form>
  );
};

export default Login;
