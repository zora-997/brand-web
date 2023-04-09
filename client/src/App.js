import About from "./component/About";
import AllnOne from "./component/AllnOne";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import { Supports } from "./component/Supports";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Supports />
      <AllnOne />
      <Pricing />
      <Footer />
    </>
  );
}


export default App;
