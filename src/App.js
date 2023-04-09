import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';
import GamePage from './pages/game-page/GamePage';
import Order from './pages/order-page/Order';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route element={<HomePage />} path="/" />
				<Route element={<GamePage />} path="/game/:title" />
				<Route element={<Order />} path="/order" />
			</Routes>
		</div>
	);
}

export default App;
