import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/data");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>Go to Data</button>
    </div>
  );
}