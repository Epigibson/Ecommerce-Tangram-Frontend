import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AuthProvider } from "./hooks/AuthContext/AuthProvider.jsx";
import {ProtectedRoute} from "./utils/protectedRouteUtils.jsx";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/" element={<ProtectedRoute />}>
                    {/*<Route path="/grupos" element={<GroupsPage />} />*/}
                    {/*<Route*/}
                    {/*    path="/asignacion_de_grupos/:athleteId"*/}
                    {/*    element={<GroupAssignPage />}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path="/atleta/:athleteId"*/}
                    {/*    element={<IndividualAthletePage />}*/}
                    {/*/>*/}
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
