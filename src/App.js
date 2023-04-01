import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route element={<HomePage />} path="/" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
