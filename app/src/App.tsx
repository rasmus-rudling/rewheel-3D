import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './components/pages/Profile/ProfilePage';
import BikeBuilderPage from './components/pages/BikeBuilder/BikeBuilderPage';
import PageWrapper from './components/common/PageWrapper';
import LoginPage from './components/pages/Login/LoginPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={['/', '/bike-builder']}>
					<PageWrapper>
						<BikeBuilderPage />
					</PageWrapper>
				</Route>

				<Route exact path="/profile">
					<PageWrapper>
						<ProfilePage />
					</PageWrapper>
				</Route>

				<Route exact path="/login">
					<PageWrapper>
						<LoginPage />
					</PageWrapper>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
