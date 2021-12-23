import './App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './components/ErrorPage';
const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage'));

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}
export default App;
