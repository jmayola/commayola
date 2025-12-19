import Nature from "./assets/5.jpg";
import "./App.css";
import AppLayout from "./components/AppLayout";
import { animate, inView } from "motion";
import Section from "./components/ui/Section";
import Notes from "./components/Notes";
import Hero from "./components/Hero";
import Slider from "./components/ui/Slider";
function App() {
  inView("#hola", (element) => {
    animate(element, { opacity: 1 });
  });
  return (
    <AppLayout>
      <Section>
        <Hero></Hero>       
      </Section>
          <Slider></Slider>

      <Section>
        <Notes></Notes>
      </Section>
    </AppLayout>
  );
}

export default App;
