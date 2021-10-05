const CurrentCategory = (props: { categories: string[] }) => {
    return (
      <div className="self-center">
        {props.categories.map((category, idx) => {
          if (idx !== props.categories.length - 1) {
            return (
              <>
                <span className="ml-1 inline-block cursor-pointer">
                  {category}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            );
          } else {
            return (
              <span className="my-1 inline-block cursor-pointer">{category}</span>
            );
          }
        })}
      </div>
    );
  };

export default CurrentCategory;
