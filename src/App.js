import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ProtectedStageRoute from "./components/ProtectedStageRoute";
import FreshLanding from "./components/FreshLanding";
import Dashboard from "./components/Dashboard";
import Stages from "./components/Stages";
import Help from "./components/Help";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <HashRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/start"
                        element={
                            <PublicRoute>
                                <FreshLanding />
                            </PublicRoute>
                        }
                    />
                    <Route path="/help" element={<Help />} />
                    <Route path="*" element={<PageNotFound />} />

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Prologue */}
                    <Route
                        path="/stage/90063"
                        element={
                            <ProtectedStageRoute>
                                <Stages
                                    id={90063}
                                    track={"darkness-visible-22239.mp3"}
                                />
                            </ProtectedStageRoute>
                        }
                    />

                    {/* Chapter 1 */}
                    <Route
                        path="/stage/90146"
                        element={
                            <ProtectedStageRoute>
                                <Stages
                                    id={90146}
                                    track={"darkness-visible-22239.mp3"}
                                />
                            </ProtectedStageRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </HashRouter>
    );
}

export default App;
