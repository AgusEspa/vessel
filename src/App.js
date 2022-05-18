import { HashRouter, Routes, Route } from "react-router-dom";
import FreshLanding from "./components/FreshLanding";
import ReturnLanding from "./components/ReturnLanding";
import Stage from "./components/Stage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<HashRouter>
			<AuthProvider>
				<Routes>
					<Route path="/land" element={<FreshLanding />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<ReturnLanding />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/stage/*"
						element={
							<ProtectedRoute>
								<Stage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</HashRouter>
	);
}

export default App;
