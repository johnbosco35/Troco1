import { Footer, Header } from "./Blocks";
import { About, Download, FewPoints, Hero, Services } from "./Components";
import { Circle } from "./common";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FewPoints />
      <Circle />
      <About />
      <Services />
      <Download />
      <Footer />
    </div>
  );
};

export default App;
