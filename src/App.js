import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components';
import { Home, Deals, Cart, Item } from './components/pages';
import { GlobalStyle } from './styles';
import styled from 'styled-components';

import CartContextProvider from './context/CartContext';

const MainContainer = styled.div`
	height: 100%;
	min-height: 100vh;
`;

function App() {
	return (
		<MainContainer>
			<GlobalStyle />
			<CartContextProvider>
				<Router>
					<Nav />

					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/deals' exact>
							<Deals />
						</Route>
						<Route path='/cart' exact>
							<Cart />
						</Route>
						<Route path='/item/:itemId' exact>
							<Item />
						</Route>
					</Switch>
				</Router>
			</CartContextProvider>
		</MainContainer>
	);
}

export default App;
