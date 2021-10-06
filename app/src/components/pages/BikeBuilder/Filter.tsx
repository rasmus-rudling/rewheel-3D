import React, { MouseEvent } from "react";

const FilterCard = (props: { name: string }) => {
  return (
    <div className="mx-3 mt-3 h-10 bg-white leading-8 filter drop-shadow-sm">
      <span className="mx-3 inline-block align-middle text-black">
        {props.name}
      </span>
    </div>
  );
};

// React.MouseEventHandler<HTMLButtonElement>
interface Props {
  name: string;
  id: string;
  setActive: any;
  openFilter: string;
  alternatives: string[];
}

const Filter: React.FC<Props> = ({ name, id, setActive, openFilter, alternatives }) => {


  return (
    <div className="">
      <button
        className="group w-full border-t border-b rounded-none py-2 border-gray-300 hover:border-gray-400 flex flex-row justify-between items-center"
        onClick={(e) => setActive(e, name)}
      >
        <span className="ml-2 text-gray-700 group-hover:text-gray-900">
          {name}
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
            d={`${openFilter === name ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}`}
          />
        </svg>
      </button>
      <div
        className={`w-80 max-h-96 bg-gray-100 block absolute filter drop-shadow-lg ${
          openFilter === name ? "" : "invisible"
        } ${parseInt(id.slice(-1)) % 2 === 0 ? 'right-3': ''}`}
      >
        <header className="bg-gray-50 w-full">
          <div className="flex flex-row justify-between">
            <span className="m-2">0 valda</span>
            <button className="h-9 w-16 m-2 bg-gray-300">Rensa</button>
          </div>
          <div className="flex place-content-center">
            <input
              type="text"
              value="Sök"
              className="mx-3 my-3 h-8 p-3 w-full rounded-sm border border-gray-200"
            ></input>
          </div>
        </header>
        <div className="overflow-scroll max-h-52">
          <div className="flex flex-col flex-nowrap overflow-hidden">
            {alternatives.map((e) => (
              <FilterCard name={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
