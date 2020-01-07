import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/mainPage';

function App() {
	return (
		<Switch>
			<Route path="/" exact component={MainPage} />
		</Switch>
	);
}

export default App;
