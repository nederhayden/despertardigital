import Button from "./components/Button";
import Banner from "./components/Banner";
import Video from "./components/Video";
import Paragraphs from "./components/Paragraphs";
import About from "./components/About";

import "./styles/index.css";

export default function App() {
  return (
    <div className="App">
      <h1>DESPERTAR DIGITAL</h1>
      <Paragraphs />
      <Video />
      <Banner />
      <Button />
      <About />
      <Banner />
      <Button />
    </div>
  );
}
