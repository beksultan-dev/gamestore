import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GamePage from './pages/game-page/GamePage';
import Order from './pages/order-page/Order';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route element={<HomePage />} path="/" />
						<Route
							element={<GamePage />}
							path="/game/:title"
						/>
						<Route element={<Order />} path="/order" />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
