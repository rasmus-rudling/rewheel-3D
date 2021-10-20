interface Props {
  text: string;
  onClickHandler: () => void;
  disabled?: boolean;
  color: "blue" | "green" | "red" | "gray";
  type?: "submit" | "button";
  addBorder?: boolean;
  blackTextColor?: boolean;
  filled?: boolean;
  extraClass?: string;
}

const Button1 = ({
  text,
  onClickHandler,
  disabled = false,
  color,
  type = "button",
  addBorder = false,
  blackTextColor = true,
  filled = false,
  extraClass = "",
}: Props) => {
  let colorStyling = "",
    borderStyling = "",
    fontColor = "";

  if (filled) {
    fontColor = "text-white";

    if (color === "blue") {
      colorStyling = "bg-blue-500 hover:bg-blue-400";
    } else if (color === "green") {
      colorStyling = "bg-green-500 hover:bg-green-400";
    } else if (color === "red") {
      colorStyling = "bg-red-500 hover:bg-red-400";
    } else {
      colorStyling = "bg-gray-500 hover:bg-gray-400";
    }
  } else {
    if (color === "blue") {
      colorStyling = "hover:bg-blue-300";
      fontColor = "text-blue-500";
      borderStyling = "border border-blue-500";
    } else if (color === "green") {
      colorStyling = "hover:bg-green-300";
      fontColor = "text-green-500";
      borderStyling = "border border-green-500";
    } else if (color === "red") {
      colorStyling = "hover:bg-red-300";
      fontColor = "text-red-500";
      borderStyling = "border border-red-500";
    } else {
      colorStyling = "hover:bg-gray-300";
      fontColor = "text-gray-500";
      borderStyling = "border border-gray-500";
    }
  }

  if (!addBorder) {
    borderStyling = "";
  }

  if (blackTextColor) {
    fontColor = "text-gray-900";
  }

  const basicStyle = `
        capitalize font-light 
        rounded-sm 
        h-8 px-3 mr-2
        last:mr-0
        transition
        duration-200
        select-none
    `;

  const allStyling = [
    basicStyle,
    colorStyling,
    borderStyling,
    fontColor,
    extraClass,
  ];

  if (disabled) {
    allStyling.push("opacity-50 cursor-default");
  }

  return (
    <button
      onClick={() => {
        if (!disabled) {
          onClickHandler();
        }
      }}
      className={allStyling.join(" ")}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button1;
