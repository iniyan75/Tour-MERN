import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/login";
import Hotel from "./modules/hotel";
import Home from "./home";
import Layout from "./nav";
import Signup from "./modules/Signup";
import ProtectedRoute from "./modules/ProtectedRoute";
import { UserAuthContextProvider } from "./modules/UserAuthContext";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Explore from "./modules/explore";



export default function App() {

  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />



            <Route path="/explore/:id" element={<ProtectedRoute><Explore /></ProtectedRoute>}/>
              <Route path="/hotel/:id" element={<Hotel />} />
            


          </Route>









        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}





