import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

// import Cast from './Cast';
// import MovieDetails from './Movie/MovieDetails';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Reviews = lazy(() => import('./Reviews'));
const MovieDetails = lazy(() => import('./Movie/MovieDetails'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Упс, невірний шлях</div>} />
    </Routes>
  );
};
