import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewTicket from "./pages/NewTicket";
import Register from "./pages/Register";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newticket" element={<PrivateRoute />}>
              <Route path="/newticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
