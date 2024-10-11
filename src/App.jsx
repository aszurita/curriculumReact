import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Incio/Home";
import { ThemeProvider } from './Pages/Incio/Shared/ThemeContext'; // Importamos el ThemeProvider

function App() {
	function NotFound() {
		return <div>404 Not Found</div>;
	}

	return (
		<ThemeProvider>
			<Router> 
				<div className='min-h-screen'>
					<Routes>
						<Route exact path='/' element={<Home />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
