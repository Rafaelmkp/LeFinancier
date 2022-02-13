import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageSignUp from './Pages/PageSignUp';

function MyRoutes() {
  return (
    <Router forceRefresh>
      <Routes>
        <Route path='/sign' exact element={PageSignUp()} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
