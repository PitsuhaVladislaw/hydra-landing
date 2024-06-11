import About from "../src/page/About";
import NavBar from "./components/navbar";
import Footer from "./page/Footer";
import Forma from "./page/Forma";
import Header from "./page/Header";
import Numbers from "./page/Numbers";
import Partners from "./page/Partners";
import Reason from "./page/Reason";

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "112px"
    }}>
      <NavBar />
      <Header />
      <About />
      <Reason />
      <Partners />
      <Numbers />
      <Forma />
      <Footer />
    </div>
  )
}

export default App;