import './styles.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Deals, Cart, Nav, SearchBar } from './components';
import { GlobalStyle } from './styles';
import styled from 'styled-components';

const MainContainer = styled.div`
	text-align: center;
`;

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
				</Switch>
			</Router>
		</MainContainer>
	);
}

export default App;
