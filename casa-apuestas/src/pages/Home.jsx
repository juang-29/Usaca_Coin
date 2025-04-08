
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Bienvenido a la Casa de Apuestas 🎰</h2>
      <p>Desde aquí podrás acceder a tus juegos y consultar tu saldo.</p>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
