import ProductCard from "./ProductCard";
import Navigation from "./Navigation";

const SidePanel = () => {
  return (
    <div className="w-96 h-auto flex-none justify-self-end bg-gray-100 flex flex-col">
      <Navigation />
      <div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="bg-gray-200 flex-none px-3 py-2">
        <div className="grid grid-cols-2">
          <span className="col-span-2">Totalt pris: xx</span>
          <span className="">Klimatkostnad: xx</span>
          <span className="ml-1">Klimatbesparing: xx</span>
        </div>
        <div className="block mt-3">
          <button className="inline-block float-left w-44 h-9 bg-gray-50">
            Spara
          </button>
          <button className="inline-block float-right w-44 h-9 bg-gray-50">
            Nästa
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
