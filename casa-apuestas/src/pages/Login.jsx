
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login exitoso");
      navigate("/home");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default Login;
