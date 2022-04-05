import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: any) {
  const account = "auth";

  const auth = account === "auth" ? true : false;

  return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
