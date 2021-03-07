import './styles.css';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import { Nav, SearchBar } from './components';
import { Home, Deals, Cart, Item } from './components/pages';
import { GlobalStyle } from './styles';
import styled from 'styled-components';

const MainContainer = styled.div`

height: 100%;
min-height: 100vh;
`;

function App() {
	return (
		<MainContainer>
			<GlobalStyle />
			<Router>
				<Nav />
				<SearchBar />
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
		</MainContainer>
	);
}

export default App;
