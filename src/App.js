import './styles.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Nav, SearchBar } from './components';
import { Home, Deals, Cart, Item } from './components/pages';
import { GlobalStyle } from './styles';
import styled from 'styled-components';

const MainContainer = styled.div``;

function App() {
	return (
		<MainContainer>
			<GlobalStyle />
			<Router>
				<Nav />
				<SearchBar />
				<Switch>
					<Router path='/' exact>
						<Home />
					</Router>
					<Router path='/deals' exact>
						<Deals />
					</Router>
					<Router path='/cart' exact>
						<Cart />
					</Router>
					<Router path='/item/:itemId' exact>
						<Item />
					</Router>
				</Switch>
			</Router>
		</MainContainer>
	);
}

export default App;
