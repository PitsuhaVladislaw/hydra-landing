import About from "../src/page/About";
import Footer from "./page/Footer";

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "112px"
    }}>
      <About />
      <Footer />
    </div>
  )
}

export default App;