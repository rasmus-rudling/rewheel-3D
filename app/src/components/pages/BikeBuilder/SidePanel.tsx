import ProductCard from "./ProductCard";
import CurrentCategory from './CurrentCategory'

const Navigation = () => {
  return (
    <div className="h-9 w-auto mx-3 my-2 justify-self-start flex-none bg-gray-200 flex flex-row justify-between">
      <CurrentCategory categories={["Stålramar", "underkategori"]} />
      <div className="self-center cursor-pointer">
      <button className="">Filter</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mb-1 ml-1 inline-block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    </div>
  );
};

const SidePanel = () => {
  return (
    <div className="w-96 h-auto flex-none justify-self-end bg-gray-200 flex flex-col">
      <Navigation />
      <div className="flex flex-col flex-grow overflow-y-scroll items-stretch no-scrollbar">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="bg-gray-200 flex-none mx-3 my-2">
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
