import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/Home";

import ProtectedRoute from "./ProtectedRoute";

const AppMain: React.FC<{}> = () => {
  return (
    <>
      <Suspense fallback={<span>loading</span>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/auth"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppMain;
