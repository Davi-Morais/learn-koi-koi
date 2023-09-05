import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/Home';
import Regras from './componentes/Regras';


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