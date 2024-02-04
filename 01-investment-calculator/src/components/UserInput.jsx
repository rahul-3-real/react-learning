const UserInput = ({ userInput, handleChange }) => {
  return (
    <div className="card">
      <div className="grid">
        <div className="input-group">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              handleChange("initialInvestment", e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => {
              handleChange("annualInvestment", e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              handleChange("expectedReturn", e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => {
              handleChange("duration", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
