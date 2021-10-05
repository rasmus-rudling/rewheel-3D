import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './components/pages/Profile/ProfilePage';
import BikeBuilderPage from './components/pages/BikeBuilder/BikeBuilderPage';
import NavBarPresenter from './components/common/NavBar/NavBarPresenter';
import PageWrapper from './components/common/PageWrapper';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<PageWrapper>
						<BikeBuilderPage />
					</PageWrapper>
				</Route>

				<Route exact path="/profile">
					<PageWrapper>
						<ProfilePage />
					</PageWrapper>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
