import MorphologicalTable1 from "./MorphologicalFeatures/Table1";
import MorphologicalTable2 from "./MorphologicalFeatures/Table2";


const MorphologicalFeatures = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-center justify-center lg:w-[20rem] w-[17rem] text-center text-white font-bold lg:text-md text-sm bg-black md:px-6 px-4 lg:py-4 py-2 ">
            MORPHOLOGICAL FEATURES
          </div>
          <div className="flex flex-col gap-6">
     <MorphologicalTable1/>
      <MorphologicalTable2/>
      </div>
    </div>
  );
};

export default MorphologicalFeatures;
