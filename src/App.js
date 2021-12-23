import './App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';
import Routes from './components/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Routes />
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
