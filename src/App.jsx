import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Sidebar from './components/Sidebar';



function App() {
  return (
    <main className='max-w-[1366px]'>
      <AuthContextProvider>
        <Navbar />
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </main>
  );
}

export default App;
