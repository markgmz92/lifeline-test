import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
