import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { NotFound } from 'components/NotFound/NotFound';

const Home = lazy(() =>
  import('pages/Home').then(module => ({ ...module, default: module.Home }))
);
const Movies = lazy(() =>
  import('pages/Movies').then(module => ({ ...module, default: module.Movies }))
);
const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('components/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
