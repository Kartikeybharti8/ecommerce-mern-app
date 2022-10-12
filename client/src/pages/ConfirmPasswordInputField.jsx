import "./reg.css";

function PasswordInputField({
  handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}) {
  return (
    <>
      <div className="form-group my-3">
        <input
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="password"
          placeholder="Enter your password"
          className="form-control"
        />
        <p className="text-danger">{passwordError}</p>
      </div>
    </>
  );
}

export default PasswordInputField;
