import Header from "./components/Header";
import LandUseAndVegetation from "./components/LandUseAndVegetation";
import MorphologicalFeatures from "./components/MorphologicalFeatures";
import SiteChar from "./components/SiteChar";

function App() {
  return (
    <div className="container mx-auto md:my-24 my-12 flex flex-col gap-8">
      <Header />
      <SiteChar />
      <LandUseAndVegetation/>
      <MorphologicalFeatures/>
    </div>
  );
}

export default App;
