import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-900">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        theme={"dark"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <main className="bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
