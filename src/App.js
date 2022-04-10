import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
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
      <main className="">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
