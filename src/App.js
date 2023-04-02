import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route element={<HomePage />} path="/" />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
