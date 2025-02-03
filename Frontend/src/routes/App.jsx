import "./App.css";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import FetchStatus from "../components/fetchstatus";

function App() {
  return (
    <>
      <Header></Header>
      <FetchStatus />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
