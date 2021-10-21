import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeProductType } from "../../../redux/actions/currentProductType";
import { Product } from "src/types";
import { InternationalString } from "./BikePartNavigationPresenter";

interface Props {
  parts: InternationalString[];
  onPartTypeClickHandler: (partType: string) => void;
  currentProductType: string;
}

const BikePartNavigationView = ({
  parts,
  onPartTypeClickHandler,
  currentProductType,
}: Props) => {
  const basicStyle = `
    px-3
    py-2
    border-2
    rounded-md
    mr-3
    last:mr-0
    font-light
  `;

  const activeStyle = `
    text-white
    bg-blue-400
    border-blue-500
    cursor
  `;

  const nonActiveStyles = `
    cursor-pointer
    border-gray-300
    transition
    duration-200
    hover:bg-blue-100
    hover:border-blue-200
    bg-white
  `;

  return (
    <div className="flex w-full justify-center absolute bottom-7">
      {parts.map((part, idx) => {
        const currentStyles = [basicStyle];

        if (part.en.toLowerCase() === currentProductType) {
          currentStyles.push(activeStyle);
        } else {
          currentStyles.push(nonActiveStyles);
        }

        return (
          <div
            key={"partNav " + part + idx}
            className="z-20 flex mr-3 items-center last:mr-0"
          >
            <div
              className={currentStyles.join(" ")}
              onClick={() => {
                onPartTypeClickHandler(part.en.toLowerCase());
              }}
            >
              {part.sv}
            </div>
            {idx < parts.length - 1 && (
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white text-2xl"
                key={"empty start " + idx}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BikePartNavigationView;
