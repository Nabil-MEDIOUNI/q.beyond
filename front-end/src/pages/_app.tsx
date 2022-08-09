import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import AllWeathersPage from '../pages/all-weathers';

import Header from '../components/Header';

const LazySignleWeatherPage = React.lazy(() => import('./single-weather'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/weathers" render={() => <AllWeathersPage />} />
        <Route
          path="/weathers/:id"
          render={() => (
            <React.Suspense fallback="loading...">
              <LazySignleWeatherPage />
            </React.Suspense>
          )}
        />
        <Redirect to="/weathers" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
