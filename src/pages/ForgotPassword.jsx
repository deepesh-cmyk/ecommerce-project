import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;