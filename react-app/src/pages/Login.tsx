import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  function validate(e: React.FormEvent) {
    e.preventDefault();
    if (username === "test" && password === "test") {
      setMessage("success");
    }
  }

  return (
    <form noValidate onSubmit={(e) => validate(e)}>
      <h1>Login Form</h1>
      <h3>{message}</h3>
      <div>
        <label htmlFor="login-user">Username</label>
        <input
          type="text"
          id="login-user"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="text"
          id="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" role="button">
        Login
      </button>
    </form>
  );
}
