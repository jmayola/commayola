import Nature from "./assets/5.jpg";
import "./App.css";
import AppLayout from "./components/AppLayout";
import { animate, inView } from "motion";
import Section from "./components/ui/Section";
import Notes from "./components/Notes";
import Hero from "./components/Hero";
import Slider from "./components/ui/Slider";
import Experience from "./components/Experience";
import ShowRoom from "./components/ShowRoom";
import Footer from "./components/ui/Footer";
import ContactForm from "./components/ui/Contact";
import { useState, type JSX } from "react";
import SectionSelector,{type Sections} from "./components/SectionSelector";
import HeroAnimatedBackground from "./components/HeroBackground";
import Header from "./components/ui/Header";

function App() {
  const sections: Sections[] = [
    {
      element: Hero(),
      name: "Inicio"
    },
    {
    element: Experience(),
    name: "Proyectos"
  },
  {
    element: ContactForm(),
    name: "Contacto"
  }
]

  const [Sector, setSector] = useState<Sections>(sections[0])
  const setNewSector = (sector: Sections) =>{
    setSector(sector)
  }
  
  return (
    <AppLayout>
      <Header></Header>
      <Section>
      <HeroAnimatedBackground></HeroAnimatedBackground>
        {sections.map((val)=>val.name == Sector.name ? val.element : null )}
        <SectionSelector selected={Sector} assign={setNewSector} sections={sections}/>
      </Section>

      <Slider></Slider>
      <Footer></Footer>

    </AppLayout>
  );
}

export default App;
