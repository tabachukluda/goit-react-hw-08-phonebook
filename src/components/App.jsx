import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import LoaderComponent from './LoaderComponent/LoaderComponent';

import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('../pages/HomeView'),
);

const RegisterView = lazy(() =>
  import('../pages/RegisterView' ),
);
const LoginView = lazy(() =>
  import('../pages/LoginView' ),
);
const ContactsView = lazy(() =>
  import('../pages/ContactsView'),
);

const NotFoundView = lazy(() =>
  import('../pages/NotFoundView'),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}

export default App;