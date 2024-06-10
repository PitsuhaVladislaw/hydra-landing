import About from "../src/page/About";
import Footer from "./page/Footer";
import Forma from "./page/Forma";
import Numbers from "./page/Numbers";
import Reason from "./page/Reason";

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "112px"
    }}>
      <About />
      <Reason />
      <Numbers />
      <Forma />
      <Footer />
    </div>
  )
}

export default App;