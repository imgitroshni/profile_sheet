import ImageUploader from "./ImageUploader";
import DrainageDropdown from "./dropdowns/DrainageDrop";
import ECDropdown from "./dropdowns/ECDrop";
import ErosionDropdown from "./dropdowns/ErosionDrop";
import FloodingDropdown from "./dropdowns/FloodingDrop";
import GravelsDropdown from "./dropdowns/GravelsDrop";
import PHDropdown from "./dropdowns/PHDrop";
import RunoffDroppdown from "./dropdowns/RunoffDrop";
import SaltDropdown from "./dropdowns/SaltDrop";
import StoneBoundariesDropdown from "./dropdowns/Stone&BoundariesDrop";
import SurfaceDropdown from "./dropdowns/SurfaceDrop";
import TopographyDropdown from "./dropdowns/TopographyDrop";
import WaterDepthDropdown from "./dropdowns/WaterDepthDrop";
import GradientDropdown from "./dropdowns/soil_slope/GradientDrop";
import LengthDropdown from "./dropdowns/soil_slope/LengthDrop";

const SiteChar = () => {
  return (
    <div className="flex flex-col border border-black divide-y divide-black">
      <div className="flex flex-col divide-y divide-black">
        <div className="flex flex-row divide-x divide-black  font-semibold">
          <div className="xl:basis-[23%] md:basis-[40%] basis-[20%] flex items-center justify-center text-center text-white font-bold md:text-xl text-md bg-black md:px-8 px-6 md:py-4 py-2 ">
            SITE CHARACTERISTICS
          </div>
          <div className="md:basis-[50%] basis-[70%] md:px-8 px-4 md:py-4 py-2 md:text-xl text-md space-y-2">
            <div>
              Author :<input type="text" className="px-2 ml-2 text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
              Date :<input type="date" className="px-2 ml-2 text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
          <div className="basis-[33%] px-2 py-2 ">
            <div>
              Series Name:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="4"
              />
            </div>
          </div>
          <div className="basis-[33%] px-2 py-2 ">
            <div>
              Map unit Symbol:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="basis-[33%] px-2 py-2 ">
            <div>
              Soil Classification:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row  divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
          <div className="basis-[30%] divide-y divide-black">
            <div className="px-2 py-2 ">
              Topo sheet No.:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="px-2 py-2 ">
              Plot (Survey)No.:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="basis-[70%] flex flex-row  divide-x divide-black ">
            <div className="basis-[33%] px-2 py-2 ">
              <div>
                Imagery No.:
                <input
                  type="text"
                  className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="basis-[33%] px-2 py-2 ">
              <div>
                Base map:
                <input
                  type="text"
                  className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                Scale:
                <input
                  type="text"
                  className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="basis-[33%] px-2 py-2 ">
              <div>
                Cadastral Sheet <br /> No.:
                <input
                  type="text"
                  className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
          <div className="basis-[50%] px-2 py-2  ">
            <div>
              Village:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              Taluk:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="basis-[50%] px-2 py-2  ">
            <div>
              Block:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              District:
              <input
                type="text"
                className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
          <div className="basis-[55%] flex flex-col divide-y divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
            <div className="flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
              <div className="basis-[50%] px-2 py-2 ">
                <div>
                  Observation No.:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="basis-[50%] ">
                <div className="xl:text-[1.1rem] md:text-[1rem] text-[0.9rem] font-bold px-2 py-2 border-b border-black bg-slate-200">
                  Location:-
                </div>
                <div className="px-2 py-2">
                  Latitude:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="px-2 pb-2">
                  Longitude:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
              <div className="basis-[50%] divide-y divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
                <div className=" px-2 py-2">
                  Geology:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className=" px-2 py-2">
                  Parent material:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="basis-[50%] divide-y divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
                <div className="px-2 py-2">
                  Microfeatures:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="px-2 py-2">
                  Profile position:
                  <input
                    type="text"
                    className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="px-2 py-2 xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
              <div>
                Physiographic division:
                <input
                  type="text"
                  className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="basis-[45%] px-2 xl:h-[22.4rem]  md:h-[20.9rem] h-[19.3rem] pb-4 divide-y divide-black overflow-auto overflow-x-hidden xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
            <ImageUploader />
          </div>
        </div>
      </div>
      <div className="flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]  ">
        <div className="basis-[50%] px-2 py-4 xl:text-[1rem] md:text-[0.9rem] text-[0.7rem]">
          <TopographyDropdown />
        </div>
        <div className="basis-[50%] px-2 py-2 ">
          <div>
            Landform:
            <input
              type="text"
              className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* SOIL-SLOPE START*/}

      <div className="divide-y divide-black ">
        <div className="xl:text-[1.1rem] md:text-[1rem] text-[0.9rem] font-bold px-2 py-2 bg-slate-200">
        Soil slope:-
        </div>
        <div className=" flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem] ">
          <div className="basis-[50%] flex flex-row gap-2 px-2 py-4">
          Gradient (%) :<GradientDropdown />
          </div>
          <div className="basis-[50%] flex flex-row gap-2 px-2 py-4">
          Length (m) :<LengthDropdown />
          </div>
        </div>
      </div>
      
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:text-[1rem] md:text-[0.9rem] text-[0.7rem] ">
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Erosion :<ErosionDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Runoff :<RunoffDroppdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Drainage :<DrainageDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          G.Water depth (m):
          <WaterDepthDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Flooding :<FloodingDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Salt/Alkali (% sur. coverage) :<SaltDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          pH :<PHDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          E.C. :<ECDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Surface fragments : <SurfaceDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Coverage of gravels (&lt;25cm): <GravelsDropdown />
        </div>
        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Coverage of stones&amp;boulders :<StoneBoundariesDropdown />
        </div>

        <div className="flex flex-row gap-2 px-2 py-4 border border-black">
          Elevation above MSL(m):
          <input
            type="text"
            className="w-full px-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      {/* SOIL-SLOPE END*/}
      
      <div className="divide-y divide-black ">
        <div className="xl:text-[1.1rem] md:text-[1rem] text-[0.9rem] font-bold px-2 py-2 bg-slate-200">
          Rock out- crops:-
        </div>
        <div className=" flex flex-row divide-x divide-black xl:text-[1rem] md:text-[0.9rem] text-[0.7rem] ">
          <div className="basis-[50%] flex flex-row gap-2 px-2 py-4">
            Coverage of gravels (&lt;25cm) (%): <GravelsDropdown />
          </div>
          <div className="basis-[50%] flex flex-row gap-2 px-2 py-4">
            Coverage of stones&amp;boulders (%) :<StoneBoundariesDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteChar;
