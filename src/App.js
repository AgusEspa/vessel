import { HashRouter, Routes, Route } from "react-router-dom";
import FreshLanding from "./components/FreshLanding";
import ReturnLanding from "./components/ReturnLanding";
import Stages from "./components/Stages";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedStageRoute from "./components/ProtectedStageRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<HashRouter>
			<AuthProvider>
				<Routes>
					<Route path="/start" element={<FreshLanding />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<ReturnLanding />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/stage/90101746"
						element={
							<ProtectedStageRoute>
								<Stages id={90101746} />
							</ProtectedStageRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</HashRouter>
	);
}

export default App;
