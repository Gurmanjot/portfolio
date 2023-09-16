import React from "react";

const WorkWithMe = ({ workWithMeRef }) => {
  return (
    <div
      ref={workWithMeRef}
      className="relative isolate px-6  lg:px-8 justify-center items-center flex flex-col mt-40"
    >
      <section className="flex flex-col  w-fit rounded-lg p-2 sm:p-6 mb-10">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-white self-center">
          Connect with me:
        </h2>
        <a
          href="https://www.linkedin.com/in/gurmanjot-singh-randhawa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl text-white hover:text-blue-200 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="36"
            height="36"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <span className="ml-4 mb-1">gurmanjot-singh-randhawa</span>
        </a>
        <a
          href="mailto:randhawagurman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl text-white hover:text-blue-200 flex items-center mt-2"
        >
          <svg
            height="40px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="40px"
            fill="white"
          >
            <g>
              <path d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z" />
              <path d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z" />
            </g>
          </svg>
          <span className="ml-3">randhawagurman@gmail.com</span>
        </a>
      </section>
    </div>
  );
};

export default WorkWithMe;
