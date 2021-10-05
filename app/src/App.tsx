import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './components/pages/Profile/ProfilePage';
import BikeBuilderPage from './components/pages/BikeBuilder/BikeBuilderPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<BikeBuilderPage />
				</Route>

				<Route exact path="/profile">
					<ProfilePage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
