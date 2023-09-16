import React from "react";

const Menu = ({ skillsSectionRef, workWithMeRef }) => {
  const scrollToSection = (refa) => {
    refa.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-end justify-end relative isolate">
      <div className="mt-5 flex lg:ml-4 lg:mt-5 mr-5 sm:mr-10">
        <button
          type="button"
          onClick={() => scrollToSection(skillsSectionRef)}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Skills
        </button>

        <span className="ml-3 ">
          <button
            type="button"
            onClick={() => scrollToSection(workWithMeRef)}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Connect
          </button>
        </span>
      </div>
    </div>
  );
};

export default Menu;
