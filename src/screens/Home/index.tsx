import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/auth");
  }
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={handleClick}>Click To Check Navigate</Button>
    </div>
  );
}
