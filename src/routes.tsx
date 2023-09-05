import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Regras from './pages/Regras';


function AppRoutes() {

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regras" element={<Regras />} />
          </Routes>
      </BrowserRouter>
    )
  }

export default AppRoutes;