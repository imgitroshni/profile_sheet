import LandUseTable from "./LandUseAndVegetation/LandUse";
import VegetationTable from "./LandUseAndVegetation/Vegetation";



const LandUseAndVegetation = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-center justify-center lg:w-[20rem] w-[17rem] text-center text-white font-bold lg:text-md text-sm bg-black md:px-6 px-4 lg:py-4 py-2 ">
           LANDUSE / VEGETATION
          </div>
          <div className="flex flex-row gap-6">
     <LandUseTable/>
     <VegetationTable/>
      </div>
    </div>
  );
};

export default LandUseAndVegetation;
