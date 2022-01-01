import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import Departments from "./Pages/Departments/Departments";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SingleService from "./Pages/SingleService/SingleService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="departments" element={<Departments />}></Route>
          
          <Route path="/singleService/:serviceId" element={<SingleService/>}></Route>
          <Route path="about" element={<About />}></Route>

          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
        <Footer></Footer>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
