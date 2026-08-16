import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Rightcardcontent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full  rounded-4xl justify-between flex flex-col">
        <h1 className="h-10 w-10 bg-white rounded-full text-black font-bold flex items-center justify-center m-5 ">
          {props.id+1}
        </h1>
        <div>
          <p className="text-white text-xl m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ratione odit ea eum eius iusto.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 m-5 px-5 py-2 rounded-4xl text-white font-bold">
              {props.tag}
            </button>
            <button className="bg-blue-500 m-5 px-4 py-2 rounded-4xl text-white font-bold">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcardcontent;
