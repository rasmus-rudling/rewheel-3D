import CurrentCategory from "./CurrentCategory";

const FilterButton = () => {
  return (
    <div className="relative">
      <button className="group w-full border-t border-b rounded-none py-2 border-gray-300 hover:border-gray-400 flex flex-row justify-between items-center">
        <span className="ml-2 text-gray-700 group-hover:text-gray-900">
          Sortera
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="w-80 max-h-96 bg-gray-100 top-full block absolute filter drop-shadow-lg">
        <header className="bg-gray-50 w-full">
          <div className="flex flex-row justify-between">
            <span className="m-2">0 valda</span>
            <button className="h-9 w-16 m-2 bg-gray-300">Alla</button>
          </div>
          <div className="flex place-content-center">
            <input
              type="text"
              value="Sök"
              className="mx-3 my-3 h-8 p-3 w-full rounded-sm border border-gray-200"
            ></input>
          </div>
        </header>
        <div className="flex flex-col mb-3">
          <div className="mx-3 mt-3 h-10 bg-white leading-8 filter drop-shadow-sm">
            <span className="mx-3 inline-block align-middle text-black">
              Alternativ 1
            </span>
          </div>
          <div className="mx-3 mt-3 h-10 bg-white leading-8 filter drop-shadow-sm">
            <span className="mx-3 inline-block align-middle text-black">
              Alternativ 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    // h-8
    <div className="h-40 w-auto justify-self-start flex-none bg-gray-200">
      <div className="mx-3 my-2 flex flex-row justify-between">
        <CurrentCategory categories={["Stålramar", "underkategori"]} />
        <div className="my-1 cursor-pointer">
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
      <div className="grid grid-cols-2 mx-3 gap-3">
        <FilterButton />
      </div>
    </div>
  );
};

export default Navigation;
